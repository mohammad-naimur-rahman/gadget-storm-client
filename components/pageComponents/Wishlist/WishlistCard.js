import React from 'react'
import { BsX } from 'react-icons/bs'
import categories from '@/data/categories.json'
import { Button } from 'semantic-ui-react'

const WishlistCard = ({ pd }) => {
  const catName = categories.find((c) => c.sku === pd.category).name
  return (
    <div className="d-flex flex-column flex-lg-row align-items-center wishlist-card mb-4 p-2 p-lg-4 shadow shadow-md w-100">
      <div className="d-flex align-items-center first-group flex-column flex-md-row">
        <button>
          <BsX />
        </button>
        <input type="checkbox" checked={pd.selected} className="my-3 my-md-0" />
        <img src={pd.images[0]} alt={pd.name} />
      </div>
      <div className="d-flex align-items-center second-group my-4 my-lg-0 flex-column flex-md-row">
        <div className="d-flex flex-column mx-5">
          <h3>Category: {catName}</h3>
          <h2 className="pt-3">
            {pd.brand} {pd.name}
          </h2>
          <Button secondary className="mt-3">
            view details
          </Button>
        </div>

        {pd.variants && pd.variants.length > 0 ? (
          <h1 className="d-flex my-3 my-md-0 ms-0 ms-md-auto pe-5 flex-row flex-md-column flex-xl-row">
            Starts from:{' '}
            <span className="ps-3 ps-md-0 ps-xl-3 align-self-md-center align-self-end">${pd.basePrice}</span>
          </h1>
        ) : (
          <h1 className="d-flex my-3 my-md-0 ms-0 ms-md-auto pe-5 flex-row flex-md-column flex-xl-row">
            Price: <span className="ps-3 ps-md-0 ps-xl-3 align-self-end">${pd.price}</span>
          </h1>
        )}
      </div>
    </div>
  )
}

export default WishlistCard
