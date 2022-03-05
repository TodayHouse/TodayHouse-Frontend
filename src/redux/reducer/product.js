import { createSlice } from '@reduxjs/toolkit';

const productReducer = createSlice({
  name: 'productReducer',
  initialState: {
    //서버에서 현재 상품 게시글의 첫 번째 사진의 주소를 불러와서 저장 -> default img가 됨
    imgSrc:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MTlfMTAw%2FMDAxNTA1ODA5Nzk5NTA2.XRWWX8lj9psJTyRXFuclNbOSHtOkwUUAvoBzHXfduYAg.FfcZ-d6bjGIqmGYcdx6WcAHXBm8nksTt88-B9uUgFB8g.JPEG.1004kby76%2F2.jpg&type=sc960_832',

    selectedOption: [],
    totalPrice: 0,
    form: {},
  },
  reducers: {
    changeImg: (state, action) => {
      state.imgSrc = action.payload;
    },

    addOption: (state, action) => {
      state.selectedOption.push(action.payload);
    },
    removeOption: (state, action) => {
      return {
        //initialState에 selectedOption말고도 다른 state들도 있으므로 ...state를 사용하여 다른 state들도 불러와야함
        ...state,
        selectedOption: state.selectedOption.filter(
          (data) => data.id !== action.payload
        ),
      };
    },
    changeNum: (state, action) => {
      state.selectedOption.forEach((data) => {
        if (data.id === action.payload.id)
          data.num = parseInt(action.payload.num);
      });
    },
    dispatchSetForm: (state, action) => {
      localStorage.setItem('productInfo', JSON.stringify(action.payload));
      return {
        ...state,
        form: action.payload,
      };
    },
  },
});

export const {
  changeImg,
  addOption,
  removeOption,
  changeNum,
  dispatchSetForm,
} = productReducer.actions;
export default productReducer;
