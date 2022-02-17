import Layout from '@/components/common/Layout'
import Categories from '@/components/pageComponents/Homepage/Categories'
import BreadCrumb from '@/components/pageComponents/ProductDetailsPage/BreadCrumb'
import { API_URL } from '@/helpers/API'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
const Carousel = require('react-responsive-carousel').Carousel

const ProductDetailsPage = ({ product }) => {
  const hasIt = (property) => product.hasOwnProperty(proerty)
  const isNonEmpty = (arr) => arr.length !== 0

  const [pdVariants, setpdVariants] = useState([])
  const [selectedVariant, setselectedVariant] = useState({})

  useEffect(() => {
    if (product.variants) {
      if (product.variants.length === 1) {
        const obj = [product.variants[0]]
        setpdVariants({
          ...obj,
          selected: true
        })
      } else {
        const newArr = product.variants.map((variant) => {
          return { ...variant, selected: false }
        })
        setpdVariants(newArr)
      }
    }
  }, [product.variants])

  const selectVariant = (id) => {
    const newArr = pdVariants.map((el) => {
      el.selected = false
      if (el._id === id) {
        el.selected = true
        setselectedVariant(el)
      }
      return el
    })
    setpdVariants(newArr)
  }

  //console.log(product)
  return (
    <Layout>
      <Categories />
      <div className="container">
        <BreadCrumb product={product} />
        <div className="row">
          <div className="col-md-5">
            <Carousel showArrows={true} swipeable={true} emulateTouch={true}>
              {product.images.map((image) => (
                <div key={image}>
                  <img src={image} alt={product.name} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="col-md-7">
            <div className="p-2 p-md-3 p-lg-5">
              <h1 className="color-primary">
                {product.brand} {product.name}
              </h1>
              <h2 className="py-3">
                {product.variants ? <span>Starts from</span> : <span>Price: </span>} ${product.price}
              </h2>
              {product.variants && (
                <>
                  <h3 className="pt-4 pb-3">Choose Variant</h3>
                  <div className="d-flex flex-wrap w-100 align-items-center variant-card-holder">
                    {pdVariants.map((vr, i) => (
                      <div
                        key={i}
                        className={`variant-card ${
                          vr.selected ? 'variant-card-selected' : ''
                        } p-3 p-lg-4 shadow shadow-sm bg-white`}
                        onClick={() => selectVariant(vr._id)}
                      >
                        <div className="d-flex icon-value align-items-center py-1">
                          <img src="/pages/productDetails/ram.png" />
                          <h3 className="ms-3">{vr.ram}</h3>
                        </div>
                        {vr.rom && (
                          <div className="d-flex icon-value align-items-center py-1">
                            <img src="/pages/productDetails/rom.png" />
                            <h3 className="ms-3">{vr.rom}</h3>
                          </div>
                        )}
                        {vr.storage && (
                          <div className="d-flex icon-value align-items-center py-1">
                            <img src="/pages/productDetails/storage.png" />
                            <h3 className="ms-3">
                              {vr.storage} {vr.storageUnit}
                            </h3>
                          </div>
                        )}
                        {vr.size && (
                          <div className="d-flex icon-value align-items-center py-1">
                            <img src="/pages/productDetails/size.png" />
                            <h3 className="ms-3">
                              {vr.size} {vr.sizeUnit}
                            </h3>
                          </div>
                        )}
                        <div className="d-flex icon-value align-items-center py-1">
                          <img src="/pages/productDetails/price.png" />
                          <div className="d-flex flex-column">
                            {vr.discount && (
                              <div className="d-flex negative-margin">
                                <p className="small text-danger ps-2">
                                  <s>{vr.basePrice}</s>
                                </p>
                                {vr.discount.includes('%') ? (
                                  <p className="small text-success ps-2">{vr.discount} off</p>
                                ) : (
                                  <p className="small text-success ps-2">${vr.discount} off</p>
                                )}
                              </div>
                            )}
                            <h3 className="ms-3">${vr.price}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params
  const data = await axios.get(`${API_URL}/products?slug=${slug}`)
  const product = data?.data?.data?.data[0]
  return {
    props: {
      product
    }
  }
}

export default ProductDetailsPage

export const IconValue = (children, value) => {
  return (
    <div className="d-flex flex-column icon-value justify-content-center align-items-center">
      {children}
      <h4>{value}</h4>
    </div>
  )
}
