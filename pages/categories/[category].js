import Layout from '@/components/common/Layout'
import Categories from '@/components/pageComponents/Homepage/Categories'
import React from 'react'

const CategoryPage = ({ products }) => {
  return (
    <Layout>
      <Categories />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const { category } = params
  const data = await axios.get(`${API_URL}/products?category=${category}`)
  const products = data?.data?.data?.data
  return {
    props: {
      products
    }
  }
}

export default CategoryPage
