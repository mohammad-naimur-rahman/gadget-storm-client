import React from 'react'
import { FaFacebookSquare, FaHome } from 'react-icons/fa'
import data from '@/data/categories.json'
import Link from 'next/link'
import ShareLink from 'react-facebook-share-link'
import { THIS_URL } from '@/helpers/API'

const BreadCrumb = ({ product }) => {
  const cat = data.find((pd) => pd.sku === product.category)

  const sharableLink = THIS_URL + '/products/' + product.slug

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
      <ShareLink link={sharableLink}>
        {(link) => (
          <a href={link} target="_blank" rel="noreferrer">
            Share this product on <FaFacebookSquare />
          </a>
        )}
      </ShareLink>
    </div>
  )
}

export default BreadCrumb
