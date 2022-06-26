import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
    name: "productReducer",
    initialState: {
        //서버에서 현재 상품 게시글의 첫 번째 사진의 주소를 불러와서 저장 -> default img가 됨
        imgSrc: "",
        selectedOption: [],
        totalPrice: 0,
        form: {},
        sellerInfo: {},
        canLike: [],
    },
    reducers: {
        changeImg: (state, action) => {
            state.imgSrc = action.payload;
        },
        addOption: (state, action) => {
            state.selectedOption.push(action.payload);
            // order 페이지에서 리덕스 정보를 사용하기 위해 local storage에 저장
            localStorage.setItem(
                "selectedOption",
                JSON.stringify(state.selectedOption)
            );
        },
        removeOption: (state, action) => {
            const options = state.selectedOption.filter(
                (data) => data.id !== action.payload
            );
            // order 페이지에서 리덕스 정보를 사용하기 위해 local storage에 저장
            localStorage.setItem("selectedOption", JSON.stringify(options));
            return {
                //initialState에 selectedOption말고도 다른 state들도 있으므로 ...state를 사용하여 다른 state들도 불러와야함
                ...state,
                selectedOption: options,
            };
        },
        changeNum: (state, action) => {
            state.selectedOption.forEach((data) => {
                if (data.id === action.payload.id)
                    data.num = parseInt(action.payload.num);
            });
            localStorage.setItem(
                "selectedOption",
                JSON.stringify(state.selectedOption)
            );
        },
        dispatchSetForm: (state, action) => {
            localStorage.setItem("productInfo", JSON.stringify(action.payload));
            return {
                ...state,
                form: action.payload,
            };
        },
        dispatchSellerInfo: (state, action) => ({
            ...state,
            sellerInfo: action.payload,
        }),
        handleCanLike: (state, action) => ({
            ...state,
            canLike: action.payload,
        }),
    },
});

export const {
    changeImg,
    addOption,
    removeOption,
    changeNum,
    dispatchSetForm,
    dispatchSellerInfo,
    handleCanLike,
} = productReducer.actions;
export default productReducer;
