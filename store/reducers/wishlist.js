import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

export const counterSlice = createSlice({
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

export const { addToWishlist, removeFromWishlist, countWishlist } = counterSlice.actions

export default counterSlice.reducer
