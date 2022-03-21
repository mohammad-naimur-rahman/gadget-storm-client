import React from 'react'
import { FaFacebookSquare, FaHeart, FaHome } from 'react-icons/fa'
import data from '@/data/categories.json'
import Link from 'next/link'
import ShareLink from 'react-facebook-share-link'
import { THIS_URL } from '@/helpers/API'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addToWishlist } from '@/store/reducers/wishlist'

const BreadCrumb = ({ product }) => {
  const dispatch = useDispatch()
  const cat = data.find((pd) => pd.sku === product.category)

  const sharableLink = THIS_URL + '/products/' + product.slug

  const handleAddToWishList = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'))
    if (wishlist) {
      const isExist = wishlist.some((item) => item.id === product.id)
      if (isExist) {
        toast.error('Product already added to wishlist')
      } else {
        localStorage.setItem('wishlist', wishlist ? JSON.stringify([...wishlist, product]) : JSON.stringify([product]))
        dispatch(addToWishlist())
        toast.success('Product added to wishlist!')
      }
    } else {
      localStorage.setItem('wishlist', JSON.stringify([product]))
      dispatch(addToWishList())
      toast.success('Product added to wishlist!')
    }
  }

  return (
    <div className="breadcrumb py-2 d-flex flex-wrap justify-content-between align-items-center">
      <div className="breadcrumb-links">
        <Link href="/">
          <a className="cursor-pointer">
            <FaHome />
          </a>
        </Link>{' '}
        /{''}
        <Link href={`/categories/${cat.link}`}>
          <a>{cat.name}</a>
        </Link>
        /
        <Link href={`/products/${product.slug}`}>
          <a>{product.name}</a>
        </Link>
      </div>
      <div className="d-flex align-items-center">
        <a
          className="cursor-pointer color-primary me-5 fw-bold p-2 border border-primary border-1 rounded rounded-pill button-alt"
          onClick={handleAddToWishList}
        >
          Add to wishlist{' '}
          <span className="text-danger ms-1">
            <FaHeart />
          </span>
        </a>
        <ShareLink link={sharableLink}>
          {(link) => (
            <a href={link} target="_blank" rel="noreferrer">
              Share this product on <FaFacebookSquare />
            </a>
          )}
        </ShareLink>
      </div>
    </div>
  )
}

export default BreadCrumb
