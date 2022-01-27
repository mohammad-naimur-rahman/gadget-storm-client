import axios from 'axios'
import { API_URL } from '@/helpers/API'

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <h1>Hello</h1>
    </div>
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
