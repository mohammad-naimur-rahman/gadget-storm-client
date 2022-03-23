import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.count += 1
    },
    removeFromCart: (state) => {
      state.count -= 1
    },
    countCart: (state, action) => {
      state.count = action.payload
    }
  }
})

export const { addToCart, removeFromCart, countCart } = cartSlice.actions

export default cartSlice.reducer
