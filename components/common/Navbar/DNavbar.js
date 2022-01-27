import Link from 'next/link'
import React from 'react'
import { Container, Menu } from 'semantic-ui-react'

const DNavbar = () => {
  return (
    <Menu fixed="top" className="d-navbar d-flex align-items-center">
      <Container>
        <Menu.Item as={Link} href="/" passHref className="d-navbar__logo">
          <a>
            <img src="/logo.png" alt="logo" />
          </a>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default DNavbar
