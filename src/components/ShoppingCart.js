import React from 'react'
import CartItem from './CartItem'

export default function ShoppingCart() {
  return (
    <div>
        <CartItem/>
        <p>Total cost</p>
        <button>Checkout!</button>
        <button>Continue Shopping!</button>
    </div>
  )
}
