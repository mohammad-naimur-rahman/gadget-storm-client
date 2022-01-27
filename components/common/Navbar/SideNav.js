import React from 'react'
import data from '@/data/dashboardSideLinks.json'
import DNavlink from '../Navlink/DNavlink'
import { Icon } from 'semantic-ui-react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar'
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa'

const SideNav = () => {
  return (
    <ProSidebar image={false} rtl={false} collapsed={false} toggled={false} breakPoint="md">
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          Dashboard
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />} suffix={<span className="badge red">New</span>}>
            Dashboard
          </MenuItem>
          <MenuItem icon={<FaGem />}>Components</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu suffix={<span className="badge yellow">3</span>} title="With Suffix" icon={<FaRegLaughWink />}>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
          </SubMenu>
          <SubMenu prefix={<span className="badge gray">3</span>} title="With Prefix" icon={<FaHeart />}>
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
