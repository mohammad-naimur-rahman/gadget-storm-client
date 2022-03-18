import { configureStore } from '@reduxjs/toolkit'
import wishlist from './reducers/wishlist'

export default configureStore({
  reducer: {
    wishlist
  }
})
