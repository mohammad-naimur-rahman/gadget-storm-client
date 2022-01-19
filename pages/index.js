import axios from 'axios'
import Layout from '@/components/shared/Layout'
import { API_URL } from '@/helpers/API'
import Categories from '@/components/pageComponents/homepage/Categories'

export default function Home({ data }) {
  return (
    <Layout title="Gadget Storm | Home">
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
