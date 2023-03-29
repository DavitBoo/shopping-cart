import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Item(props) {
  const{title, price, description, image, id} = props.item
  // const slug = title.split(' ').join('-')

  let shortDescription = description.split(' ')
  shortDescription.splice(10, description.length-10)
  shortDescription = shortDescription.join(' ') + ' ...'

  return (
    <div id="item" className='flex'>
      <NavLink className='flex' to={`/product/${id}`}>
        <img src={image} alt="" />
        <div className="item-info flex-col">
          <p className='title'>{title}</p>
          <p className='price'>{price}€</p>
          <p className='description'>{shortDescription}</p>
          <p className='available-stock'>available stock</p>
          <div className='see-product-btn'>See the product!</div>
        </div>
      </NavLink>
    </div>
  )
}
