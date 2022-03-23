import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state) => {
      state.count += 1
    },
    removeFromWishlist: (state) => {
      state.count -= 1
    },
    countWishlist: (state, action) => {
      state.count = action.payload
    }
  }
})

export const { addToWishlist, removeFromWishlist, countWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer
