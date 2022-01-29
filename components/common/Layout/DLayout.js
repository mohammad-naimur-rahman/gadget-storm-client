import Head from 'next/head'
import React, { useState } from 'react'
import DNavbar from '../Navbar/Dnavbar'
import SideNav from '../Navbar/SideNav'

const DLayout = ({ title, meta, children }) => {
  const [collapsed, setcollapsed] = useState(false)
  return (
    <>
      <Head>
        <title>{title}</title>
        {meta}
      </Head>
      <div className="d-flex d-layout">
        <SideNav collapsed={collapsed} setcollapsed={setcollapsed} />
        <div className="d-flex flex-column d-layout-main">
          <DNavbar collapsed={collapsed} />
          <div className={`d-layout-content ${collapsed ? 'content-collapsed' : ''}`}>{children}</div>
        </div>
      </div>
    </>
  )
}

export default DLayout
