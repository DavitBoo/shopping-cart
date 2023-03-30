import React from 'react'
import Item from './Item'

export default function ItemGrid(props) {
  const products = props.products

  return (
    <div id='item-grid' className='flex'>
      {products.map(item => {
        return <Item key={item.id} item={item}/>
      })}
           
    </div>
  )
}
