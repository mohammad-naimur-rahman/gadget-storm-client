import { isNonEmptyString } from '@/helpers/product-details-helpers'
import React from 'react'

const ObjectChildShower = ({ title, thing }) => {
  return (
    <>
      {isNonEmptyString(thing) && (
        <div className="d-flex align-items-center pb-2">
          <h5>{title} :</h5>
          <p className="ps-3">{thing}</p>
        </div>
      )}
    </>
  )
}

export default ObjectChildShower
