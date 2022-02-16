import Categories from '@/components/pageComponents/Homepage/Categories'
import Head from 'next/head'
import React from 'react'
import { Container } from 'semantic-ui-react'
import Navbar from '../Navbar'

const Layout = ({ title, meta, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {meta}
      </Head>
      <Navbar />
      <Container fluid className="layout-container px-0">
        {children}
      </Container>
    </>
  )
}

export default Layout
