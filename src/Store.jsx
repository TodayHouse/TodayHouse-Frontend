import React from 'react'
import {configureStore,createSlice} from '@reduxjs/toolkit'

const slicer = createSlice({
    name:"Reducer",
    initialState:{ //스토어에 저장하는 states 초기값
        isLogin: false,
        navSelect:"community",
        selPage:"store",
    },
    reducers:{//state를 변경하는 reducers
        navChange:(state,action)=>{
            state.navSelect = action.payload;
        },
        

    }

})

const store= configureStore({reducer: slicer.reducer}) //redux toolkit 사용가능

export const {navChange} =slicer.actions //export할 reducer들 이름
export default store;
