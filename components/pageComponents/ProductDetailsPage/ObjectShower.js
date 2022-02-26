import { isNonEmptyObj } from '@/helpers/product-details-helpers'
import React from 'react'

const ObjectShower = ({ thing, title, children }) => {
  return (
    <>
      {isNonEmptyObj(thing) && (
        <div className="d-flex flex-column flex-md-row py-2">
          <h4>{title} :</h4>
          <div className="ps-0 ps-md-4">{children}</div>
        </div>
      )}
    </>
  )
}

export default ObjectShower
