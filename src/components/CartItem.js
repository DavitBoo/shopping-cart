import React from 'react'
import image from '../assets/img/ketzalak_notewood.jpg'

export default function CartItem() {
  return (
    <div id="cart-item">
        <img src={image} alt="" />
        <p>Card title</p>
        <p>price</p>
        <input type="number" name="" id="" />
        <button className='remove-btn'>x</button>
    </div>
  )
}
