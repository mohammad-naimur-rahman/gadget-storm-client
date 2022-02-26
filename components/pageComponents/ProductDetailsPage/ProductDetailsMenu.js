import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

const ProductDetailsMenu = () => {
  const [activeItem, setActiveItem] = useState('description')
  return (
    <Menu secondary>
      <Menu.Item
        name="description"
        active={activeItem === 'description'}
        content="Description"
        onClick={() => {
          setActiveItem('description')
        }}
        className="group-menu-item"
        href="#description"
      />
      <Menu.Item
        name="specifications"
        active={activeItem === 'specifications'}
        content="Specifications"
        onClick={() => {
          setActiveItem('specifications')
        }}
        className="group-menu-item"
        href="#specifications"
      />
      <Menu.Item
        name="reviews"
        active={activeItem === 'reviews'}
        content="Reviews"
        onClick={() => {
          setActiveItem('reviews')
        }}
        className="group-menu-item"
        href="#reviews"
      />
    </Menu>
  )
}

export default ProductDetailsMenu
