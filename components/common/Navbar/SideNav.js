import React, { useState } from 'react'
import data from '@/data/dashboardSideLinks.json'
import DNavlink from '../Navlink/DNavlink'
import { Icon } from 'semantic-ui-react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar'
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa'

const SideNav = () => {
  const [collapsed, setcollapsed] = useState(false)
  return (
    <ProSidebar image={false} rtl={false} collapsed={collapsed} toggled={false} breakPoint="md" className="sidenav">
      <SidebarHeader>
        <div className="d-flex align-items-center justify-content-between sidenav-header">
          {!collapsed && <img src="/logo.png" alt="logo" />}
          <Icon name="bars" size="large" onClick={() => setcollapsed(!collapsed)} className="sidenav-bar" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />} suffix={<span className="badge red">New</span>}>
            Dashboard
          </MenuItem>
          <MenuItem icon={<FaGem />}>Components</MenuItem>
        </Menu>
        <Menu iconShape="square">
          <MenuItem icon={<FaList />}>
            <span>UI Elements</span>
            <span className="badge red">New</span>
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu suffix={<span className="badge yellow">3</span>} title="With Suffix" icon={<FaRegLaughWink />}>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
          </SubMenu>
          <SubMenu suffix={<span className="badge gray">3</span>} title="With Prefix" icon={<FaHeart />}>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
          </SubMenu>
          <SubMenu title="Multilevel" icon={<FaList />}>
            <MenuItem>1 </MenuItem>
            <MenuItem>2 </MenuItem>
            <SubMenu title="3">
              <MenuItem>3.1 </MenuItem>
              <MenuItem>3.2 </MenuItem>
              <SubMenu title={`$3.3`}>
                <MenuItem>3.3.1 </MenuItem>
                <MenuItem>3.3.2 </MenuItem>
                <MenuItem>3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px'
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>View Source</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default SideNav
