import React from 'react'
import FeaturedSlider from './FeaturedSlider'

const Header = ({ featured }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <FeaturedSlider featured={featured} />
        </div>
        <div className="col-lg-4">
          <h1>Ha ha ha</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
