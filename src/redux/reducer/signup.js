import { createSlice } from '@reduxjs/toolkit';

const signupReducer = createSlice({
  name: 'productReducer',
  initialState: {
    agree: [false, false, false, false],
    showVerify: false,
    isVerified: false,
  },
  reducers: {
    changeAgree: (state, action) => {
      return {
        ...state,
        agree: action.payload,
      };
    },
    handleVerify: (state, action) => {
      return {
        ...state,
        showVerify: action.payload,
      };
    },
    setIsVerified: (state, action) => {
      return {
        ...state,
        isVerified: true,
      };
    },
  },
});

export const { changeAgree, handleVerify, setIsVerified } =
  signupReducer.actions;
export default signupReducer;
