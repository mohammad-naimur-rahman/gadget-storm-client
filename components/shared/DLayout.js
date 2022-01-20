import React from 'react'
import DNavlink from './DNavLink'
import Layout from './Layout'
import data from '@/data/dashboardlinks.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LinkItem = ({ href, icon, text }) => {
  return (
    <DNavlink href={href}>
      <div className="d-flex">
        <FontAwesomeIcon icon={icon} /> <span className=" ps-3 link-text">{text}</span>
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
