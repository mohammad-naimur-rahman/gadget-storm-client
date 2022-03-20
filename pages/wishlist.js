import Layout from '@/components/common/Layout'
import React, { useEffect, useState } from 'react'

const WishlistPage = () => {
  const [wishlist, setwishlist] = useState([])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const wishlistEl = JSON.parse(localStorage.getItem('wishlist'))
      setwishlist(wishlistEl)
    }
  }, [])
  console.log(wishlist)
  return (
    <Layout>
      <section className="container">
        <h1 className="py-4">Wishlist</h1>
        {wishlist.map((el) => (
          <div className="wishlist-card mb-3" key={el.id}>
            <p>el</p>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export default WishlistPage
