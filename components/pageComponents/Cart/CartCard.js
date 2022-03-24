import React from 'react'
import { BiX } from 'react-icons/bi'

const CartCard = ({ el, cart, setcart }) => {
  return (
    <div className="cart-card d-flex align-items-center shadow shadow-md mb-4 p-4">
      <BiX className="cross-btn" />
      <div className="d-flex cart-cart--main">
        <img src={el.images[0]} alt={el.name} />
        <div className="cart-card--main__details">
          <h2>
            {el.brand} {el.name}
          </h2>
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
