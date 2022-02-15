import Heading from '@/components/common/utils/Heading'
import React from 'react'
import data from '@/data/featuredCategories.json'
import Link from 'next/link'

const FeaturedCategories = () => {
  return (
    <div className="container">
      <Heading title="Featured Categories" subtitle="Get Your Desired Product from Featured Category !" />
      <div className="d-flex justify-content-around flex-wrap">
        {data.map((category) => (
          <Link href={`/categories/${category.link}`} key={category.name} passHref>
            <div className="featured-cat-card d-flex flex-column justify-content-center align-items-center shadow shadow-md m-3 bg-white">
              <img src={category.icon} alt={category.name} />
              <h3 className="pt-3 pb-2 text-center">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeaturedCategories
