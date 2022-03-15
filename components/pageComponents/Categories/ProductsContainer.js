import React from 'react'
import Products from './Products'

const ProductsContainer = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 border"></div>
        <div className="col-md-9">
          <Products products={products} />
        </div>
      </div>
    </div>
  )
}

export default ProductsContainer
