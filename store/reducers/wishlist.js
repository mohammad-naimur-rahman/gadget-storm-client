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
    count: (state, action) => {
      state.count = action.payload
    }
  }
})

export const { add, remove, count } = counterSlice.actions

export default counterSlice.reducer
