import Head from 'next/head'
import React from 'react'
import Nav from './Nav'

const Layout = ({ title, meta, children }) => {
  return (
    <div className="container-fluid ps-0 pe-0">
      <Head>
        title={title}
        meta={meta}
      </Head>
      <Nav />
      <div className="mt-2">{children}</div>
    </div>
  )
}

export default Layout
