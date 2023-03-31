import React from 'react'
import ItemGrid from '../components/ItemGrid'

export default function ShopPage(props) {


  return (
    <div id="shop-page" className='flex-col'>
       <p>¡Encuentra lo que estás buscando entre nuestros artículos hecho a mano!</p>
      <ItemGrid products={props.products}/>
    </div>
  )
}
