import { selectedSetter, setSelected } from '@/helpers/product-details-helpers'
import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaShoppingBag } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import ReactTooltip from 'react-tooltip'

const ProductDetailsHeader = ({ product }) => {
  const isNonEmpty = (elem) => elem.length !== 0
  const isEmptyObj = (obj) => Object.keys(obj).length === 0

  const [pdVariants, setpdVariants] = useState([])
  const [selectedVariant, setselectedVariant] = useState(product.variants[0])

  const [pdColors, setpdColors] = useState([])
  const [selectedColor, setselectedColor] = useState(product.colors[0])

  useEffect(() => {
    selectedSetter(product.variants, setpdVariants)
  }, [product.variants])

  const selectVariant = (id) => {
    setSelected(id, pdVariants, setpdVariants, setselectedVariant)
  }

  useEffect(() => {
    selectedSetter(product.colors, setpdColors)
  }, [product.colors])

  const selectColor = (id) => {
    setSelected(id, pdColors, setpdColors, setselectedColor)
  }

  const addToCart = () => {
    if (isEmptyObj(selectedVariant)) {
      toast.error('Please, select a variant first!')
      return
    }
    if (isEmptyObj(selectedColor)) {
      toast.error('Please, select a color first!')
      return
    }
    toast.success('Product successfully added to cart!')
  }

  return (
    <div className="row">
      <div className="col-lg-5">
        <Carousel showArrows={true} swipeable={true} emulateTouch={true}>
          {product.images.map((image, i) => (
            <div key={i}>
              <img src={image} alt={product.name} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="col-lg-7">
        <div className="p-2 p-md-3 p-lg-5">
          <h1 className="color-primary">
            {product.brand} {product.name}
          </h1>
          <h2 className="py-3">
            {isNonEmpty(product.variants) ? <span>Starts from</span> : <span>Price: </span>} ${product.price}
          </h2>
          {isNonEmpty(product.variants) && (
            <>
              {/* ---VARIANTS--- */}
              <h3 className="pt-4 pb-3">Variants</h3>
              <div className="d-flex flex-wrap w-100 align-items-center variant-card-holder">
                {pdVariants.map((vr) => (
                  <div
                    key={vr.id}
                    className={`variant-card ${
                      vr.selected ? 'variant-card-selected' : ''
                    } px-2 py-1 shadow shadow-sm bg-white`}
                    onClick={() => selectVariant(vr._id)}
                  >
                    <div className="d-flex icon-value align-items-center py-1">
                      <img src="/pages/productDetails/ram.png" />
                      <h3 className="ms-3">{vr.ram}</h3>
                    </div>
                    {vr.rom && (
                      <div className="d-flex icon-value align-items-center py-1">
                        <img src="/pages/productDetails/rom.png" />
                        <h3 className="ms-3">{vr.rom}</h3>
                      </div>
                    )}
                    {vr.storage && (
                      <div className="d-flex icon-value align-items-center py-1">
                        <img src="/pages/productDetails/storage.png" />
                        <h3 className="ms-3">
                          {vr.storage} {vr.storageUnit}
                        </h3>
                      </div>
                    )}
                    {vr.size && (
                      <div className="d-flex icon-value align-items-center py-1">
                        <img src="/pages/productDetails/size.png" />
                        <h3 className="ms-3">
                          {vr.size} {vr.sizeUnit}
                        </h3>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="d-flex icon-value align-items-center pb-1 pt-3">
                <h2>Price: </h2>
                <div className="d-flex flex-column">
                  <h2 className="ms-3">${selectedVariant.price}</h2>
                  {selectedVariant.discount && (
                    <div className="d-flex negative-margin">
                      <p className="small text-danger ps-2">
                        <s>${selectedVariant.basePrice}</s>
                      </p>
                      {selectedVariant.discount.includes('%') ? (
                        <p className="small text-success ps-2">{selectedVariant.discount} off</p>
                      ) : (
                        <p className="small text-success ps-2">${selectedVariant.discount} off</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {isNonEmpty(product.colors) && (
            <>
              <h3 className="pt-4 pb-3">Colors</h3>
              <div className="d-flex flex-wrap w-100 align-items-center color-card-holder">
                {pdColors.map((color) => (
                  <div
                    key={color.id}
                    className={`color-card ${color.selected ? 'color-card-selected' : ''} shadow shadow-sm`}
                    onClick={() => selectColor(color._id)}
                    data-for={color._id}
                    data-tip={color.colorName}
                    style={{ backgroundColor: color.colorCode }}
                  >
                    <ReactTooltip id={color._id} place="top" />
                  </div>
                ))}
              </div>
            </>
          )}
          {!isNonEmpty(product.variants) && (
            <div>
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
          )}
          <button className="mt-5 button align-items-center" onClick={addToCart}>
            <FaCartPlus /> <span className="ps-2">Add to cart</span>
          </button>
          <button className="mt-5 button ms-3 bg-green" onClick={addToCart}>
            <FaShoppingBag />
            <span className="ps-2">Buy now</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsHeader
