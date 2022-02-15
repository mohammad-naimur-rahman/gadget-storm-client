import React from 'react'
import categories from '@/data/categories.json'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className="d-flex shadow shadow-lg py-3 categories justify-content-center flex-wrap">
      {categories.map((category) => (
        <Link key={category.name} href={`/categories/${category.link}`}>
          <a className="py-2 px-3">{category.name}</a>
        </Link>
      ))}
    </div>
  )
}

export default Categories
