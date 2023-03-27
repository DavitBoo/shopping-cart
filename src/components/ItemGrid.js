import React from 'react'
import Item from './Item'

export default function ItemGrid() {
  return (
    <div id='item-grid' className='flex'>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>        
    </div>
  )
}
