import React from 'react'
import { BsX } from 'react-icons/bs'
import categories from '@/data/categories.json'
import { Button } from 'semantic-ui-react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { removeFromWishlist } from '@/store/reducers/wishlist'

const WishlistCard = ({ pd, setwishlist }) => {
  const dispatch = useDispatch()
  const catName = categories.find((c) => c.sku === pd.category).name

  const removeItem = () => {
    const wishlistEl = JSON.parse(localStorage.getItem('wishlist'))
    const newWishlist = wishlistEl.filter((el) => el.id !== pd.id)
    localStorage.setItem('wishlist', JSON.stringify(newWishlist))
    setwishlist(newWishlist)
    dispatch(removeFromWishlist())
    toast.info('Removed item from wishlist!')
  }
  return (
    <div className="d-flex flex-column flex-lg-row align-items-center wishlist-card mb-4 p-3 p-lg-4 shadow shadow-md w-100">
      <div className="d-flex align-items-center first-group flex-column flex-md-row">
        <button onClick={removeItem}>
          <BsX />
        </button>
        <input type="checkbox" checked={pd.selected} className="my-3 my-md-0" />
        <img src={pd.images[0]} alt={pd.name} />
      </div>
      <div className="d-flex align-items-center second-group my-4 my-lg-0 flex-column flex-md-row">
        <div className="d-flex flex-column mx-5 align-items-center align-items-md-baseline">
          <h3>Category: {catName}</h3>
          <h2 className="pt-3">
            {pd.brand} {pd.name}
          </h2>
          <Link href={`/products/${pd.slug}`} passHref>
            <Button secondary className="mt-3 view-details-btn px-5">
              view details
            </Button>
          </Link>
        </div>

        {pd.variants && pd.variants.length > 0 ? (
          <h1 className="d-flex my-3 my-md-0 ms-0 ms-md-auto pe-5 flex-row flex-md-column flex-xl-row">
            <span className="max-content">Starts from:</span>
            <span className="ps-3 ps-md-0 ps-xl-3 align-self-md-center align-self-end">${pd.basePrice}</span>
          </h1>
        ) : (
          <h1 className="d-flex my-3 my-md-0 ms-0 ms-md-auto pe-5 flex-row flex-md-column flex-xl-row">
            <span className="max-content">Price:</span>
            <span className="ps-3 ps-md-0 ps-xl-3 align-self-end">${pd.price}</span>
          </h1>
        )}
      </div>
    </div>
  )
}

export default WishlistCard
