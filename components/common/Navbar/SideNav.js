import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar'
import { FaPlus } from 'react-icons/fa'
import { useRouter } from 'next/router'

const SideNav = ({ collapsed, setcollapsed }) => {
  const router = useRouter()
  return (
    <ProSidebar image={false} rtl={false} collapsed={collapsed} toggled={false} breakPoint="md" className="sidenav">
      <SidebarHeader>
        <div className="d-flex align-items-center justify-content-between sidenav-header">
          {!collapsed && <h2 className="ms-2">Dashboard</h2>}
          <Icon
            name="bars"
            size="large"
            onClick={() => setcollapsed(!collapsed)}
            className={`sidenav-bar ${collapsed ? 'mx-auto' : 'pe-2'}`}
          />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaPlus />} onClick={() => router.push('/dashboard/add-product')}>
            Add Product
          </MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  )
}

export default SideNav
