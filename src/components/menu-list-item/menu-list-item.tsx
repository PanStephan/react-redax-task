import * as React from 'react'
import './menu-list-item.scss'
import icons from './icons'

const MenuListItem = ({menuItem, onAddToCart}) => {
  const{title, price, url, category} = menuItem
  const correntItem = Object.keys(icons).filter(el => {
    return el === category
  })

  return (
    <li className="menu__item">
      <div className="menu__title">{title}<img className="menu__icon" src={icons[correntItem]}></img></div>
      <img className="menu__img" src={url} alt={title}></img>
      <div className="menu__category">Category: <span>{category}</span></div>
      <div className="menu__price">Price: <span>{price}$</span></div>
      <button className="menu__btn" onClick={onAddToCart.bind(this)}>Add to cart</button>
    </li>
  )
}

export default MenuListItem;