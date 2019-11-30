import * as React from 'react'
import MenuListItem from '../menu-list-item'
import {connect} from 'react-redux'
import WithRestoService from '../hoc'
import {menuLoaded, menuReq, menuErr, addedToCard} from '../../actions'
import Spinner from '../spinner'

import './menu-list.scss'

class MenuList extends React.Component<any> {

  componentDidMount() {
    const{RestoService, menuLoaded, menuReq, menuItems} =  this.props
    if(!menuItems.length) {
      menuReq()
      RestoService.getMenuItems()
        .then(res => menuLoaded(res))
        .catch(menuErr) 
    }
  }

  render() {
    const{menuItems, loading, addedToCard} = this.props

    return (
      loading ? <Spinner/> :
      <ul className="menu__list">
        {
          menuItems.map(item => {
            return <MenuListItem key={item.id} menuItem={item} onAddToCart={addedToCard.bind(this, item.id)}/>
          })
        }  
      </ul>
    )
  }
}

const mapStateToProps = ({menu, loading}, {category}) => {
  return {
    menuItems: menu.filter(el => {
      if(!category) return el
      if(el.category === category) return el
    }),
    loading: loading
  }
}

const mapDispatchToProps = {
  menuLoaded,
  menuReq,
  menuErr,
  addedToCard
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));