import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Container, Icon, Input, Menu } from 'semantic-ui-react'
import Navlink from '../Navlink'

const Navbar = () => {
  const [searchQuery, setsearchQuery] = useState('')
  return (
    <Container fluid className="px-0">
      <Menu fixed="top" inverted>
        <Container as="nav" className="align-items-center">
          <Menu.Item as={Link} href="/" className="nav-logo">
            <img src="/logo.png" alt="logo" />
          </Menu.Item>
          <Menu.Item>
            <Input
              placeholder="Search"
              className="nav-input ms-auto"
              icon="search"
              value={searchQuery}
              onChange={(e) => setsearchQuery(e.target.value)}
            />
          </Menu.Item>
          <Menu.Item>
            <Navlink href="/dashboard">Dashboard</Navlink>
          </Menu.Item>
          <Menu.Item>
            <Navlink href="/cart">
              <Button icon color="facebook">
                <Icon name="cart" />
              </Button>
            </Navlink>
          </Menu.Item>
          <Menu.Item>
            <Navlink href="/compare">
              <Button icon color="teal">
                <Icon name="chart bar" />
              </Button>
            </Navlink>
          </Menu.Item>
          <Menu.Item>
            <Navlink href="/login">Login</Navlink>
          </Menu.Item>
        </Container>
      </Menu>
    </Container>
  )
}

export default Navbar
