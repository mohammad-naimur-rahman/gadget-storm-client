import React from 'react'
import Products from './Products'

const ProductsContainer = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.length ? (
          <>
            <div className="col-md-12">
              <Products products={products} />
            </div>
          </>
        ) : (
          <h2 className="text-center pt-5 text-secondary">No Products Found!</h2>
        )}
      </div>
    </div>
  )
}

export default ProductsContainer
