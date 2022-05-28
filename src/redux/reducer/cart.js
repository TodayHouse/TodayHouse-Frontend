import { createSlice } from '@reduxjs/toolkit'
const isSameGroup =(g1,g2) => {
    return (g1[0].productId == g2[0].productId);
    
}
const cartReducer = createSlice({
    name: 'cartReducer',
    initialState:{ //스토어에 저장하는 states 초기값
        checkedGroups: [],
        totalPrice: 0,
        deliveryFee: 0,
    },
    reducers:{//state를 변경하는 reducers
        checkGroup:(state,action)=>{
            let flag = true;
            state.checkedGroups.length !== 0 && state.checkedGroups.map((group)=>{ //checkedGroup에 이미 있는지 체크
                if(isSameGroup(group,action.payload.group)) flag = false;
                
            })
            

            if(flag){ //존재하지 않을 때
                state.totalPrice = state.totalPrice + action.payload.price;
                state.deliveryFee = state.deliveryFee + action.payload.deliveryFee;
                state.checkedGroups = [...state.checkedGroups, action.payload.group];
                

            }
            else{//이미 있을 때 (체크 해제)
                state.checkedGroups = [...state.checkedGroups.filter(group=> !isSameGroup(group,action.payload.group))];
                state.totalPrice = state.totalPrice - action.payload.price;
                state.deliveryFee = state.deliveryFee - action.payload.deliveryFee;

            }
            
            

        },
        deleteProduct:(state,action)=>{
            console.log(state.items)
            state.items = state.items.filter((item,index)=>index !== action.payload);
        },
        
    }
})

export const { checkGroup,deleteProduct } = cartReducer.actions
export default cartReducer
