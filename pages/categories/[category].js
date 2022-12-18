import Layout from '@/components/common/Layout'
import ProductsContainer from '@/components/pageComponents/Categories/ProductsContainer'
import Categories from '@/components/pageComponents/Homepage/Categories'
import { API_URL } from '@/helpers/API'
import axios from 'axios'

const CategoryPage = ({ products }) => {
  return (
    <Layout>
      <Categories />
      <ProductsContainer products={products} />
    </Layout>
  )
}

export const getServerSideProps = async ({ params }) => {
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
