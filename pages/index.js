import axios from 'axios'
import { API_URL } from '@/helpers/API'
import Layout from '@/components/common/Layout'
import Categories from '@/components/pageComponents/Homepage/Categories'

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout title="Gadget Strom | Home">
      <Categories />
    </Layout>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get(`${API_URL}/products`)
  return {
    props: {
      data: data.data
    }
  }
}
