import { isNonEmptyString } from '@/helpers/product-details-helpers'
import React from 'react'

const SingleShower = ({ thing, title }) => {
  return (
    <>
      {isNonEmptyString(thing) && (
        <div className="d-flex py-2 align-items-center">
          <h4>{title} :</h4>
          <p className="ps-4">{thing}</p>
        </div>
      )}
    </>
  )
}

export default SingleShower
