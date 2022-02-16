import Layout from '@/components/common/Layout'
import Categories from '@/components/pageComponents/Homepage/Categories'
import { API_URL } from '@/helpers/API'
import axios from 'axios'
import React from 'react'
const Carousel = require('react-responsive-carousel').Carousel

const ProductDetailsPage = ({ product }) => {
  const hasIt = (property) => product.hasOwnProperty(proerty)
  const isNonEmpty = (arr) => arr.length !== 0
  console.log(product)
  return (
    <Layout>
      <Categories />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Carousel showArrows={true}>
              {product.images.map((image) => (
                <div key={image}>
                  <img src={image} alt={product.name} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params
  const data = await axios.get(`${API_URL}/products?slug=${slug}`)
  return {
    props: {
      product: data?.data?.data?.data[0]
    }
  }
}

export default ProductDetailsPage
