import FeaturedProductCard from '@/components/common/Card/FeaturedProductCard'
import React from 'react'

const Products = ({ products }) => {
  return (
    <div className="d-flex flex-wrap">
      {products.map((product) => (
        <FeaturedProductCard key={product.id} pd={product} />
      ))}
    </div>
  )
}

export default Products
