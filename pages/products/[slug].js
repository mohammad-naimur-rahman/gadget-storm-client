import Layout from '@/components/common/Layout'
import Categories from '@/components/pageComponents/Homepage/Categories'
import BreadCrumb from '@/components/pageComponents/ProductDetailsPage/BreadCrumb'
import { API_URL } from '@/helpers/API'
import axios from 'axios'
import React from 'react'
const Carousel = require('react-responsive-carousel').Carousel

const ProductDetailsPage = ({ product }) => {
  const hasIt = (property) => product.hasOwnProperty(proerty)
  const isNonEmpty = (arr) => arr.length !== 0
  console.log(product.variants)

  console.log(product)
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
          <div className="col-md-7 p-2 p-md-3 p-lg-5">
            <h1 className="color-primary">
              {product.brand} {product.name}
            </h1>
            <h2 className="py-3">
              {product.variants ? <span>Starts from</span> : <span>Price: </span>} ${product.price}
            </h2>
            {/* {product.variants &&
              product.variants.map((vr, i) => (
                <div key={i}>
                  <h4>Ram: {vr.ram}</h4>
                  {vr.rom && <h4>Rom: {vr.rom}</h4>}
                  {vr.storage && <h4>Storage: {vr.storage}</h4>}
                  {vr.size && (
                    <h4>
                      size: {vr.size} {vr.sizeUnit}
                    </h4>
                  )}
                  {vr.basePrice && <h4>BasePrice: {vr.basePrice}</h4>}
                  {vr.discount && <h4>Discount: {vr.discount}</h4>}
                  {vr.price && <h4>price: {vr.price}</h4>}
                </div>
              ))} */}
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
