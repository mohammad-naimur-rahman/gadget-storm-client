import { isNonEmpty } from '@/helpers/product-details-helpers'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const ProductDetailsDescription = ({ product }) => {
  return (
    <div id="description">
      <h3 className="py-2">Description</h3>
      <ReactMarkdown>{product.description}</ReactMarkdown>

      {isNonEmpty(product.descriptionImages) && (
        <div className="row">
          {product.descriptionImages.map((img) => (
            <div className="col-md-4" key={img}>
              <img src={img} alt={product.name} className="description-img img-fluid p-2" />
            </div>
          ))}
        </div>
      )}

      {isNonEmpty(product.features) && (
        <>
          <h3 className="pt-4 pb-3">Features</h3>
          <ul className="features-list">
            {product.features.map((feature) => (
              <li className="py-2" key={feature}>
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default ProductDetailsDescription
