import Layout from '@/components/common/Layout'
import CartCard from '@/components/pageComponents/Cart/CartCard'
import React, { useEffect, useState } from 'react'

const CartPage = () => {
  const [cart, setcart] = useState([])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || []
      const cartItemsModified = cartItems.map((el) => {
        return { ...el, quantity: 1 }
      })
      setcart(cartItemsModified)
    }
  }, [])

  return (
    <Layout title="Cart | Gadget Storm">
      <section className="container">
        <h1 className="py-5">Cart</h1>
        {cart.map((el) => (
          <CartCard key={el.id} el={el} cart={cart} setcart={setcart} />
        ))}
      </section>
    </Layout>
  )
}

export default CartPage
