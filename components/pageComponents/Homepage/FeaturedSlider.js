import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'

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
    autoplay: false,
    prevArrow: <ArrowMan />,
    nextArrow: <ArrowMan />
  }

  return (
    <div className="shadow shadow-sm bg-white">
      <Slider {...settings}>
        {featured?.map((product) => (
          <div key={product.id} className="h-100">
            <div className="d-flex featured-slider-card align-items-center h-100 w-100">
              <img src={product.images[0]} alt={product.name} className="w-50 m-1" />
              <div className="w-50 d-flex flex-column justify-content-center align-items-center">
                <h2>{product.brand}</h2>
                <h3 className="pt-3 pb-4">{product.name}</h3>
                <h1>Starting from ${product.price}</h1>
                <Link href={`/products/${product.slug}`}>
                  <button className="mt-3 button">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default FeaturedSlider
