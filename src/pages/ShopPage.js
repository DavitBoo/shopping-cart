import React from 'react'
import ItemGrid from '../components/ItemGrid'
import SearchBar from '../components/SearchBar'

export default function ShopPage() {
  return (
    <div id="shop-page" className='flex-col'>
      <SearchBar/>
      <ItemGrid/>
    </div>
  )
}
