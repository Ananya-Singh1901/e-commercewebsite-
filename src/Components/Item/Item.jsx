import React from 'react'
import './Item.css'
//import { backend_url, currency } from '../../App'
import { Link } from 'react-router-dom'

const Item = (prop) => {
  return (
    <div className='item'>
    <Link to={`/product/${prop.id}`}><img src={prop.image} alt=""/></Link>
    <p>{prop.name}</p>
    <div className="item-prices">
    <div className="item-price-new">${prop.new_price}</div>
    <div className="item-price-old">${prop.old_price}</div>
  </div>
  </div>
  )
}

export default Item
