import Head from 'next/head'
import React from 'react'
import DNavbar from '../Navbar/Dnavbar'
import SideNav from '../Navbar/SideNav'

const DLayout = ({ title, meta, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {meta}
      </Head>
      <DNavbar />
      <div className="d-flex d-layout-content">
        <SideNav />
        <div className="content">{children}</div>
      </div>
    </>
  )
}

export default DLayout
