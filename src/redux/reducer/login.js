import { createSlice } from '@reduxjs/toolkit';

const loginReducer = createSlice({
  name: 'loginReducer',
  initialState: {
    //스토어에 저장하는 states 초기값
    isLogin: false,
    cookieState: 'nothing',
  },
  reducers: {
    //state를 변경하는 reducers
    cookieSet: (state, action) => {
      state.cookieState = action.payload;
      console.log('reducer : ' + state.cookieState);
    },
    loginSet: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { cookieSet, loginSet } = loginReducer.actions;
export default loginReducer;
