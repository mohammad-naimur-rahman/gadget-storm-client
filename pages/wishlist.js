import Layout from '@/components/common/Layout'
import WishlistCard from '@/components/pageComponents/Wishlist/WishlistCard'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaCartPlus } from 'react-icons/fa'

const WishlistPage = () => {
  const [wishlist, setwishlist] = useState([])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const wishlistEl = JSON.parse(localStorage.getItem('wishlist')) || []
      const wishListWithMark = wishlistEl.map((el) => {
        return { ...el, selected: true }
      })
      setwishlist(wishListWithMark)
    }
  }, [])

  const addToCart = () => {}

  return (
    <Layout title="Wishlist | Gadget Storm">
      <section className="container">
        <h1 className="py-4">Wishlist</h1>
        {wishlist.length > 0 ? (
          <>
            {wishlist.map((el) => (
              <WishlistCard key={el.id} pd={el} setwishlist={setwishlist} />
            ))}
            <div className="d-flex flex-column">
              <button className="button bg-green mt-4 me-2 align-self-end shadow" onClick={addToCart}>
                <FaCartPlus />
                <span className="ps-2">Add to cart</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center text-secondary py-5">No items in wishlist</h1>
            <div className="d-flex justify-content-center">
              <Link href="/" passHref>
                <button className="button">
                  <span className="me-2">&larr;</span> Go back Home
                </button>
              </Link>
            </div>
          </>
        )}
      </section>
    </Layout>
  )
}

export default WishlistPage
