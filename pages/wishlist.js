import Layout from '@/components/common/Layout'
import WishlistCard from '@/components/pageComponents/Wishlist/WishlistCard'
import React, { useEffect, useState } from 'react'

const WishlistPage = () => {
  const [wishlist, setwishlist] = useState([])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const wishlistEl = JSON.parse(localStorage.getItem('wishlist'))
      const wishListWithMark = wishlistEl.map((el) => {
        return { ...el, selected: true }
      })
      setwishlist(wishListWithMark)
    }
  }, [])
  return (
    <Layout>
      <section className="container">
        <h1 className="py-4">Wishlist</h1>
        {wishlist.length > 0 ? (
          <>
            {wishlist.map((el) => (
              <WishlistCard key={el.id} pd={el} />
            ))}
          </>
        ) : (
          <h1 className="text-center text-secondary py-5">No items in wishlist</h1>
        )}
      </section>
    </Layout>
  )
}

export default WishlistPage
