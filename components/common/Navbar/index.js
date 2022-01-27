import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Container, Icon, Input, Menu } from 'semantic-ui-react'

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
            <Link href="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/cart" passHref>
              <Button icon color="facebook">
                <Icon name="cart" />
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/compare" passHref>
              <Button icon color="teal">
                <Icon name="chart bar" />
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/login">Login</Link>
          </Menu.Item>
        </Container>
      </Menu>
    </Container>
  )
}

export default Navbar
