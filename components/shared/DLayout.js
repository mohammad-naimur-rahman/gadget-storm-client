import React from 'react'
import DNavlink from './DNavLink'
import Layout from './Layout'
import data from '@/data/dashboardlinks.json'
import Head from 'next/head'

const LinkItem = ({ href, icon, text }) => {
  return (
    <DNavlink href={href}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div className="d-flex text-white justify-content-center align-items-center dashboard-link py-2">
        <i className={icon}></i> <span className="ps-3 link-text mb-1">{text}</span>
      </div>
    </DNavlink>
  )
}

const DLayout = ({ title, children }) => {
  return (
    <Layout title={title}>
      <div className="d-flex">
        <div className="dashboard-nav bg-primary">
          {data.map((link) => (
            <LinkItem key={link.item} icon={link.icon} text={link.item} href={`/dashboard/${link.link}`} />
          ))}
        </div>
        <div className="dashboard-content">{children}</div>
      </div>
    </Layout>
  )
}

export default DLayout
