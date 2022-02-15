import FeaturedProductCard from '@/components/common/Card/FeaturedProductCard'
import Heading from '@/components/common/utils/Heading'
import React from 'react'

const FeaturedProducts = ({ featured }) => {
  return (
    <div className="container">
      <Heading title="Featured Products" subtitle="Check & Get Your Desired Product !" />
      <div className="d-flex featured-products-container pb-5">
        {featured.map((pd) => (
          <FeaturedProductCard key={pd.id} pd={pd} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
