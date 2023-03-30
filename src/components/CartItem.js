import React from 'react'

export default function CartItem(props) {
  const {image, title, price, uuid} = props.item

  const sendToAppState = () => {
    props.deleteCartItems(uuid);
  }

  return (
    <div id="cart-item">
        <img src={image} alt="" />
        <p>{title}</p>
        <p>{price}</p>
        <div className='flex'>
          <button>+</button>
          <input type="" name="" id="" />
          <button>-</button>
        </div>

        <button className='remove-btn' onClick={sendToAppState}>x</button>
    </div>
  )
}
