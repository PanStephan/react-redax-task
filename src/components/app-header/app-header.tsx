import React from 'react'
import * as cartIcon from './shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import './app-header.scss'
import {connect} from 'react-redux'

const AppHeader = ({total}) => {
  return (
    <header className="header">
      <Link to='/' className="header__link" href="#">
        Menu
      </Link>
      <Link to='/meat' className="header__link" href="#">
        Meat
      </Link>
      <Link to='/salads' className="header__link" href="#">
        Salads
      </Link>
      <Link to='/pizza' className="header__link" href="#">
        Pizza
      </Link>
      <Link to='/cart' className="header__link" href="#">
        <img className="header__cart" src={cartIcon} alt="cart"></img>
        Total: {total} $
      </Link>
    </header>
  )
}

const mapStateToProps = ({menu}) => {
  return {
    total: menu.reduce((sum, {price=0, counter=0}) => sum+(price*counter), 0)
  }
}


export default connect(mapStateToProps)(AppHeader)