import isNew from '@/helpers/isNew'
import Link from 'next/link'
import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'

const FeaturedProductCard = ({ pd }) => {
  return (
    <div className="featured-product-card d-flex flex-column bg-white shadow shadow-sm p-3">
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
      <div className="pt-3 d-flex justify-content-between align-items-center featured-product-card__price">
        <h4>Starting from</h4>
        <div className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="pt-0 mt-0">${pd.price}</h3>
          {pd.discount && (
            <div className="d-flex negative-margin-top">
              <p className="text-danger">
                <s>${pd.basePrice}</s>
              </p>
              {pd.discount.includes('%') ? (
                <p className="ps-2 py-0 my-0 text-succes">{pd.discount} off</p>
              ) : (
                <p className="ps-2 py-0 my-0 text-success">${pd.discount} off</p>
              )}
            </div>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default FeaturedProductCard
