import { count } from '@/store/reducers/wishlist'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Icon, Input, Menu } from 'semantic-ui-react'
import Navlink from '../Navlink'

const Navbar = () => {
  const dispatch = useDispatch()
  const wishlistState = useSelector((state) => state.wishlist)
  const [searchQuery, setsearchQuery] = useState('')

  console.log(wishlistState.count)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const wishlistLength = JSON.parse(localStorage.getItem('wishlist')).length
      dispatch(count(wishlistLength))
    }
  }, [dispatch])

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
              <Button icon color="facebook" className="nav-popup">
                <Icon name="cart" />
                {wishlistState.count && wishlistState.count > 0 && <p>{wishlistState.count}</p>}
              </Button>
            </Navlink>
          </Menu.Item>
          <Menu.Item>
            <Navlink href="/wishlist">
              <Button icon color="red" className="nav-popup">
                <Icon name="heart" />
                {wishlistState.count && wishlistState.count > 0 && <p>{wishlistState.count}</p>}
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
