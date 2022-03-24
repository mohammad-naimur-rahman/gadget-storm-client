import isNew from '@/helpers/isNew'
import { addToCart } from '@/store/reducers/cart'
import { addToWishlist } from '@/store/reducers/wishlist'
import Link from 'next/link'
import React from 'react'
import { FaHeart, FaCartPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import ReactTooltip from 'react-tooltip'

const FeaturedProductCard = ({ pd }) => {
  const dispatch = useDispatch()

  const handleAddToWishList = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'))
    if (wishlist) {
      const isExist = wishlist.some((item) => item.id === pd.id)
      if (isExist) {
        toast.error('Product already added to wishlist!')
      } else {
        localStorage.setItem('wishlist', wishlist ? JSON.stringify([...wishlist, pd]) : JSON.stringify([pd]))
        dispatch(addToWishlist())
        toast.success('Product added to wishlist!')
      }
    } else {
      localStorage.setItem('wishlist', JSON.stringify([pd]))
      dispatch(addToWishList())
      toast.success('Product added to wishlist!')
    }
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart) {
      const isExist = cart.some((item) => item.id === pd.id)
      if (isExist) {
        toast.error('Product already added to Cart!')
      } else {
        localStorage.setItem('cart', cart ? JSON.stringify([...cart, pd]) : JSON.stringify([pd]))
        dispatch(addToCart())
        toast.success('Product added to cart!')
      }
    } else {
      localStorage.setItem('cart', JSON.stringify([pd]))
      dispatch(addToCart())
      toast.success('Product added to cart!')
    }
  }
  return (
    <div className="featured-product-card d-flex flex-column bg-white shadow shadow-sm p-3">
      {isNew(pd.createdAt) && (
        <div className="featured-product-card__new">
          <p>New</p>
        </div>
      )}
      <div
        className="featured-product-card__add-to-wishlist"
        data-for="wishlist"
        data-tip="Add to wishlist"
        onClick={handleAddToWishList}
      >
        <FaHeart />
        <ReactTooltip id="wishlist" place="bottom" />
      </div>
      <div
        className="featured-product-card__add-to-cart"
        data-for="cart"
        data-tip="Add to cart"
        onClick={handleAddToCart}
      >
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
