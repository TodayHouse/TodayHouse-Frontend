import { createSlice } from '@reduxjs/toolkit'

const navBarReducer = createSlice({
    name: 'navBarReducer',
    initialState:{ //스토어에 저장하는 states 초기값
        isLogin: false,
        navSelect:"community",
        selPage:"store",
    },
    reducers:{//state를 변경하는 reducers
        navChange:(state,action)=>{
            console.log(action.payload)
            state.navSelect = action.payload;
        },
    }
})

export const { navChange } = navBarReducer.actions
export default navBarReducer
