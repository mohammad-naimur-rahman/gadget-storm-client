import { isNonEmptyArr, selectedSetter, setSelected } from '@/helpers/product-details-helpers'
import React, { useEffect, useState } from 'react'
import { BiX } from 'react-icons/bi'

const CartCard = ({ el, cart, setcart }) => {
  const [pdVariants, setpdVariants] = useState([])
  const [selectedVariant, setselectedVariant] = useState(el.variants[0])

  const [pdColors, setpdColors] = useState([])
  const [selectedColor, setselectedColor] = useState(el.colors[0])

  useEffect(() => {
    selectedSetter(el.variants, setpdVariants)
  }, [el.variants])

  const selectVariant = (id) => {
    setSelected(id, pdVariants, setpdVariants, setselectedVariant)
  }

  useEffect(() => {
    selectedSetter(el.colors, setpdColors)
  }, [el.colors])

  const selectColor = (id) => {
    setSelected(id, pdColors, setpdColors, setselectedColor)
  }

  return (
    <div className="cart-card d-flex align-items-center shadow shadow-md mb-4 p-4">
      <BiX className="cross-btn" />
      <div className="d-flex cart-cart--main">
        <img src={el.images[0]} alt={el.name} />
        <div className="cart-card--main__details">
          <h2>
            {el.brand} {el.name}
          </h2>
          {isNonEmptyArr(pdVariants) &&
            pdVariants.map((elem, i) => (
              <div key={i} className="shadow">
                {elem.ram && <h3>Ram: {elem.ram}</h3>}
                {elem.rom && <h3>Rom: {elem.rom}</h3>}
              </div>
            ))}
        </div>
        <div className="cart-cart--main__quantity d-flex align-items-center">
          <button>+</button>
          <h2>{el.quantity}</h2>
          <button>-</button>
        </div>
      </div>
    </div>
  )
}

export default CartCard
