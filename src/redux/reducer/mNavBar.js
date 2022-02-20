import { createSlice } from '@reduxjs/toolkit'

const mpageBar = createSlice({
    name: 'mpageNavBarReducer',
    initialState:{ //스토어에 저장하는 states 초기값
        isLogin: false,
        navSelect:"profile",
    },
    reducers:{//state를 변경하는 reducers
        navChange:(state,action)=>{
            console.log(action.payload)
            state.navSelect = action.payload;
        },
    }
})

export const { navChange } = mpageBar.actions
export default mpageBar
