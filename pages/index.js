import axios from 'axios'
import { API_URL } from '@/helpers/API'
import Layout from '@/components/common/Layout'
import Categories from '@/components/pageComponents/Homepage/Categories'
import Header from '@/components/pageComponents/Homepage/Header'

export default function Home({ data, featured }) {
  console.log(featured)
  return (
    <Layout title="Gadget Strom | Home">
      <Categories />
      <Header featured={featured} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get(`${API_URL}/products`)
  const featured = await axios.get(`${API_URL}/products?featured=true&fields=name,price,images,brand`)
  return {
    props: {
      data: data.data,
      featured: featured.data?.data?.data
    }
  }
}
