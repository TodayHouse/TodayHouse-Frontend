import { createSlice } from "@reduxjs/toolkit";

const orderReducer = createSlice({
    name: "orderReducer",
    initialState: {
        orderForm: {},
        destForm: {},
        memo: "",
    },
    reducers: {
        dispatchSetOrderForm: (state, action) => {
            return {
                ...state,
                orderForm: action.payload,
            };
        },
        dispatchSetDestForm: (state, action) => {
            return {
                ...state,
                destForm: action.payload,
            };
        },
        dispatchSetMemo: (state, action) => {
            return { ...state, memo: action.payload };
        },
    },
});

export const { dispatchSetOrderForm, dispatchSetDestForm, dispatchSetMemo } =
    orderReducer.actions;
export default orderReducer;
