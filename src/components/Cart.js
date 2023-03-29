import React, { useState } from "react";
import CartItem from "./CartItem";



export default function Cart (){
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="cart">
      <div className="cart-items-container flex-col">
        <CartItem/>
        <CartItem/>
        <div className="cart-fields total-field">Total: 40€</div>
        <button className="cart-fields checkout-btn">Checkout</button>
        <button className="cart-fields close-btn">Close</button>
      </div>
    </div>
  );
};