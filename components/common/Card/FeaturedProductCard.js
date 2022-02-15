import isNew from '@/helpers/isNew'
import Link from 'next/link'
import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'

const FeaturedProductCard = ({ pd }) => {
  return (
    <div className="featured-product-card d-flex flex-column bg-white shadow shadow-sm p-3 mb-3">
      {isNew(pd.createdAt) && (
        <div className="featured-product-card__new">
          <p>New</p>
        </div>
      )}
      <div className="featured-product-card__add-to-wishlist" data-for="wishlist" data-tip="Add to wishlist">
        <FaHeart />
        <ReactTooltip id="wishlist" place="bottom" />
      </div>
      <div className="featured-product-card__add-to-cart" data-for="cart" data-tip="Add to cart">
        <FaCartPlus />
        <ReactTooltip id="cart" place="bottom" />
      </div>
      <img src={pd.images[0]} alt={pd.name} />
      <Link href={`/products/${pd.slug}`}>
        <a className="pt-4">
          {pd.brand} {pd.name}
        </a>
      </Link>
      <h3 className="py-3 text-success">${pd.price}</h3>
    </div>
  )
}

export default FeaturedProductCard
