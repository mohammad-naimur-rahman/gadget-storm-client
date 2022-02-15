import axios from 'axios'
import { API_URL } from '@/helpers/API'
import Layout from '@/components/common/Layout'
import Categories from '@/components/pageComponents/Homepage/Categories'
import Header from '@/components/pageComponents/Homepage/Header'
import Notice from '@/components/pageComponents/Homepage/Notice'
import FeaturedCategories from '@/components/pageComponents/Homepage/FeaturedCategories'
import FeaturedProducts from '@/components/pageComponents/Homepage/FeaturedProducts'

export default function Home({ data, featured, featuredTop, notice }) {
  console.log(featured)
  return (
    <Layout title="Gadget Strom | Home">
      <Categories />
      <Header featured={featuredTop} />
      <Notice notice={notice} />
      <FeaturedCategories />
      <FeaturedProducts featured={featured} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get(`${API_URL}/products`)
  const featured = await axios.get(`${API_URL}/products?featured=true&fields=name,price,images,brand,slug,createdAt`)
  const featuredTop = await axios.get(`${API_URL}/products?featured=true&fields=name,price,images,brand&limit=4`)
  return {
    props: {
      data: data.data,
      featuredTop: featuredTop.data?.data?.data,
      featured: featured.data?.data?.data,
      notice: {
        notice:
          'Due to pandamic, some of the products may not available in our store. Please check back later if you can not find a product. Sorry for the inconvenience.'
      }
    }
  }
}
