import { createSlice } from '@reduxjs/toolkit';

const editorReducer = createSlice({
  name: 'editorReducer',
  initialState: {
    //스토어에 저장하는 states 초기값
    content : '',
  },
  reducers: {
    //state를 변경하는 reducers
    changeContent: (state, action) => {
      return {
        ...state,
        content: action.payload,
      };
    },
  },
});

export const { changeContent } = editorReducer.actions;
export default editorReducer;
