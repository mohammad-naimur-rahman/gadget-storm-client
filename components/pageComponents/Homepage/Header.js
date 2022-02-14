import React from 'react'
import FeaturedSlider from './FeaturedSlider'

const Header = ({ featured }) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-8">
          <FeaturedSlider featured={featured} />
        </div>
        <div className="col-lg-4">
          <div className="d-flex flex-column w-100 h-100 justify-content-center">
            <div className="rounded bg-dark text-white p-4 mt-2 d-flex flex-column align-items-center shadow shadow-lg cursor-pointer offer-card">
              <img className="w-25 offer-card-img" src="/pages/homepage/voucher.png" alt="voucher" />
              <h3>Collect Coupons</h3>
            </div>
            <div className="rounded bg-dark text-white p-4 mt-4 d-flex flex-column align-items-center shadow shadow-lg cursor-pointer offer-card">
              <img className="w-25 offer-card-img" src="/pages/homepage/new-offer.png" alt="new offer" />
              <h3>Grab New Offers</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
