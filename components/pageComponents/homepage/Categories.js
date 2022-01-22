import React from 'react'
import categories from '@/data/categories.json'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className="container d-flex justify-content-around flex-wrap">
      {categories.map((category) => (
        <Link key={category.category} href={category.link}>
          <a className="text-white px-3 py-1 mb-2 rounded rounded-pill bg-primary link-text">{category.category}</a>
        </Link>
      ))}
    </div>
  )
}

export default Categories
