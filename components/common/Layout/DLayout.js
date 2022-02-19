import Head from 'next/head'
import React, { useState } from 'react'
import DNavbar from '../Navbar/Dnavbar'
import SideNav from '../Navbar/SideNav'

const DLayout = ({ title, meta, children, className }) => {
  const [collapsed, setcollapsed] = useState(false)
  return (
    <div className="w-100">
      <Head>
        <title>{title}</title>
        {meta}
      </Head>
      <div className="d-flex d-layout">
        <SideNav collapsed={collapsed} setcollapsed={setcollapsed} />
        <div className="d-flex flex-column d-layout-main w-100">
          <DNavbar />
          <div className={`d-layout-content w-100 ${collapsed ? 'content-collapsed' : ''}`}>
            <div className={`m-2 ${className}`}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DLayout
