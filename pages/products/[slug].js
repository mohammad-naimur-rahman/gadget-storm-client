import Layout from '@/components/common/Layout'
import Categories from '@/components/pageComponents/Homepage/Categories'
import BreadCrumb from '@/components/pageComponents/ProductDetailsPage/BreadCrumb'
import { API_URL } from '@/helpers/API'
import axios from 'axios'
import ProductDetailsHeader from '@/components/pageComponents/ProductDetailsPage/ProductDetailsHeader'
import ProductDetailsDescription from '@/components/pageComponents/ProductDetailsPage/ProductDetailsDescription'
import ProductDetailsMenu from '@/components/pageComponents/ProductDetailsPage/ProductDetailsMenu'

const ProductDetailsPage = ({ product }) => {
  console.log(product)
  return (
    <Layout title={`${product.brand} ${product.name} | Gadget Storm`}>
      <Categories />
      <div className="container">
        <BreadCrumb product={product} />
        <ProductDetailsHeader product={product} />
        <ProductDetailsMenu />
        <ProductDetailsDescription product={product} />
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
