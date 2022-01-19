import React from 'react'
import categories from '@/data/categories.json'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className="container d-flex justify-content-around">
      {categories.map((category) => (
        <Link key={category.category} href={category.link}>
          <a className="text-white px-3 py-1 rounded rounded-pill bg-primary">{category.category}</a>
        </Link>
      ))}
    </div>
  )
}

export default Categories
