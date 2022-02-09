import { createSlice } from '@reduxjs/toolkit'

const signupReducer = createSlice({
  name: 'productReducer',
  initialState: {
    agree: [false, false, false, false],
  },
  reducers: {
    changeAgree: (state, action) => {
      state.agree = action.payload
    },
  },
})

export const { changeAgree } = signupReducer.actions
export default signupReducer
