import React from 'react'
import Slider from 'react-slick'
import { Button } from 'semantic-ui-react'

const ArrowMan = ({ className, style, onClick }) => {
  return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick}></div>
}

const FeaturedSlider = ({ featured }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <ArrowMan />,
    nextArrow: <ArrowMan />
  }

  return (
    <div className="shadow shadow-lg">
      <Slider {...settings}>
        {featured?.map((product) => (
          <div key={product.id}>
            <div className="d-flex featured-product-card">
              <img src={product.images[0]} alt={product.name} className="w-50" />
              <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <h2>{product.brand}</h2>
                <h3>{product.name}</h3>
                <h1>Starting from ${product.price}</h1>
                <Button primary>See Details</Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default FeaturedSlider
