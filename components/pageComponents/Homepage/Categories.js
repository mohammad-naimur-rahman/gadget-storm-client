import React from 'react'
import categories from '@/data/categories.json'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className="d-flex shadow shadow-lg py-4 categories justify-content-center">
      {categories.map((category) => (
        <Link key={category.name} href={`/categories/${category.link}`}>
          {category.name}
        </Link>
      ))}
    </div>
  )
}

export default Categories
