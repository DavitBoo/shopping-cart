import React from 'react'
import { useParams } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

export default function Product(props) {

  
  const { addCartItems, products } = props
  const { id } = useParams() // Obtener el valor de id desde las props
  
  if (!products || products.length === 0) {
    return <div className='loading-screen flex'>
        Loading product...
      </div>;
  }
  const { price, title, description, image } = props.products[id-1]

  const sendToAppState = () => {
    addCartItems({...products[id-1], uuid:uuidv4()})
  }

  



  return (
    <div id='product' className='flex-col'>
      <h1 className='product-h'>Product Info</h1>
      <div>
        <img src={image} alt="" />
        <div className='flex-col'>
          <p className='price'>{price}€</p>
          <p className='title'>{title}</p>
          <p className='description'>{description}</p>
          <button onClick={sendToAppState}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
