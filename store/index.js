import { configureStore } from '@reduxjs/toolkit'
import wishlist from './reducers/wishlist'
import cart from './reducers/cart'

export default configureStore({
  reducer: {
    wishlist,
    cart
  }
})
