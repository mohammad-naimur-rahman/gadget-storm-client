import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    add: (state) => {
      state.count += 1
    },
    remove: (state) => {
      state.count -= 1
    },
    count: (state) => {
      state.count = action.payload
    }
  }
})

export const { add, remove } = counterSlice.actions

export default counterSlice.reducer

if (typeof window !== 'undefined') {
  const wishlist = localStorage.getItem('wishlist')
  if (wishlist) {
    const wishlistData = JSON.parse(wishlist)
    store.dispatch(count(wishlistData.length))
  }
}
