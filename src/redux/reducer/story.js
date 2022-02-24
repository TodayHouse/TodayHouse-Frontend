import { createSlice } from '@reduxjs/toolkit';

const storyReducer = createSlice({
  name: 'storyReducer',
  initialState: {
    selectedCategoryList: [],
  },
  reducers: {
    changeCategoryList: (state, action) => {
      //배열이 비어있거나 type이 전체톤 컬러이면 그냥 배열에 추가 (전체톤 컬러는 중복 가능)
      if (
        state.selectedCategoryList.length === 0 ||
        action.payload.type === 'allColor'
      ) {
        state.selectedCategoryList.push({
          type:
            //전체톤 컬러는 색깔 별로 독립적으로 다루기 위해 type을 별도로 정해줌
            state.selectedCategoryList.length === 0
              ? action.payload.type
              : action.payload.type + action.payload.data,
          data: action.payload.data,
        });
      }
      //배열이 비어있지 않은 경우
      else {
        let check = false;
        state.selectedCategoryList.forEach((data, idx) => {
          if (data.type === action.payload.type) {
            //이미 존재하는 타입이면 값 수정 후 종료
            data.data = action.payload.data;
            check = true;
          }
        });
        //존재하지 않는 타입이면 배열에 추가
        if (!check)
          state.selectedCategoryList.push({
            type: action.payload.type,
            data: action.payload.data,
          });
      }
      console.log(JSON.parse(JSON.stringify(state.selectedCategoryList)));
    },
    deleteCategory: (state, action) => {
      //선택된 카테고리 삭제
      let list = state.selectedCategoryList.filter(
        (data) => data.type !== action.payload.type
      );
      return {
        ...state,
        selectedCategoryList: list,
      };
    },
    resetCategory: (state, action) => {
      return { ...state, selectedCategoryList: [] };
    },
  },
});

export const { changeCategoryList, deleteCategory, resetCategory } =
  storyReducer.actions;
export default storyReducer;
