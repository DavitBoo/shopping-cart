import React from 'react'
import image from '../assets/img/ketzalak_notewood.jpg'

export default function Product() {
  return (
    <div id='product' className='flex-col'>
      <h1 className='product-h'>Product Info</h1>
      <div>
        <img src={image} alt="" />
        <div className='flex-col'>
          <p className='price'>40€</p>
          <p className='title'>Cuaderno bonico</p>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptate recusandae at. Omnis, natus iste dolorem commodi ea id accusantium!</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
