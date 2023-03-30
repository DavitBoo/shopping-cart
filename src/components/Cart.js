import React, { useState } from "react";
import CartItem from "./CartItem";



export default function Cart (props){

  const {cartItems, deleteCartItems} = props

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price
  }, 0)

  return (
    <div id="cart">
      <div className="cart-items-container flex-col">
        {
          cartItems.map(item => {
            return <CartItem key={item.uuid} item={item} deleteCartItems={deleteCartItems}/>
          })
        }
        <div className="cart-fields total-field">Total: {totalPrice}€</div>
        <button className="cart-fields checkout-btn">Checkout</button>
        <button className="cart-fields close-btn">Close</button>
      </div>
    </div>
  );
};