import axios from 'axios'
import { API_URL } from '@/helpers/API'
import Layout from '@/components/common/Layout'

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <h1>This is up</h1>
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
