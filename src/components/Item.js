import React from 'react'
import image from '../assets/img/ketzalak_notewood.jpg'
import { NavLink } from 'react-router-dom';


export default function Item() {
  return (
    <div id="item" className='flex'>
        <img src={image} alt="" />
        <div className="item-info flex-col">
          <p className='title'>Cuaderno de Fresno Eguzkilore</p>
          <p className='price'>40€</p>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, alias.</p>
          <p className='available-stock'>available stock</p>
          <NavLink to="/product/1">Click!</NavLink>
        </div>
    </div>
  )
}
