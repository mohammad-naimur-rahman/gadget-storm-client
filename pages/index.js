import axios from 'axios'
import Layout from '@/components/shared/Layout'
import { API_URL } from '@/helpers/API'
import Categories from '@/components/pageComponents/homepage/Categories'

import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'

const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon])

library.add(...iconList)

export default function Home({ data }) {
  console.log(data)
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
