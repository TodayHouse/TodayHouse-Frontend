import { createSlice } from "@reduxjs/toolkit";

const storyReducer = createSlice({
    name: "storyReducer",
    initialState: {
        selectedCategoryList: [],
        scrapCount: 0,
        isScraped: false,
        commentCount: 0,
        viewCount: 0,
        likeCount: 0,
    },
    reducers: {
        changeCategoryList: (state, action) => {
            //배열이 비어있는 경우 그냥 배열에 추가
            if (state.selectedCategoryList.length === 0) {
                state.selectedCategoryList.push({
                    type: action.payload.type,
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
        setCount: (state, action) => ({
            ...state,
            [action.payload.name]: action.payload.count,
        }),
        handleIsScraped: (state, action) => ({
            ...state,
            isScraped: action.payload,
        }),
    },
});

export const {
    changeCategoryList,
    deleteCategory,
    resetCategory,
    setCount,
    handleIsScraped,
} = storyReducer.actions;
export default storyReducer;
