import { createSlice } from '@reduxjs/toolkit'

const isSameGroup =(g1,g2) => {
    return (g1[0].productId == g2[0].productId);
    
}
const searchOptionOfGroup =(group,op)=>{
    // 찾으면 인덱스 반환 못 찾으면 -1 반환
    
    group.map((option,index)=>{
        console.log("옵션 인덱스 : "+option.childOptionId+op.childOptionId+option.parentOptionId+op.parentOptionId);
        if(option.parentOptionId == op.parentOptionId && option.childOptionId == op.childOptionId){
            console.log(index);
            return index;
        }
    })
    return -1;
}
const cartReducer = createSlice({
    name: 'cartReducer',
    initialState:{ //스토어에 저장하는 states 초기값
        allGroups:[],
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
                state.totalPrice += action.payload.price;
                state.deliveryFee += action.payload.deliveryFee;
                state.checkedGroups = [...state.checkedGroups, action.payload.group];
                

            }
            else{//이미 있을 때 (체크 해제)
                state.checkedGroups = [...state.checkedGroups.filter(group=> !isSameGroup(group,action.payload.group))];
                state.totalPrice = state.totalPrice - action.payload.price;
                state.deliveryFee = state.deliveryFee - action.payload.deliveryFee;

            }
            
            

        },
        changeOptionNum:(state,action) =>{ // 수량을 변경했을 때
            //1 localstorage, allgroup 갱신
            let groups = JSON.parse(localStorage.getItem("cart")); //현재 장바구니 불러옴
            groups[action.payload.groupIndex][action.payload.optionIndex].num = parseInt(action.payload.num); //수량변경
            localStorage.setItem("cart",JSON.stringify(groups))//갱신
            state.allGroups=JSON.parse(localStorage.getItem("cart"));

            //2 checkedGroup 갱신
            let flag = true;
            state.checkedGroups.length !== 0 && state.checkedGroups.map((group)=>{ //checkedGroup에 이미 있는지 체크
                if(isSameGroup(group,action.payload.group)) flag = false;
                
            })
            if(!flag){ //checkeGroup에 있으면 갱신
                state.checkedGroups = [...state.checkedGroups.filter(group=> !isSameGroup(group,action.payload.group))]; //삭제
                state.checkedGroups.push(groups[action.payload.groupIndex]); //재삽입
                state.totalPrice -= action.payload.group[action.payload.optionIndex].num *action.payload.group[action.payload.optionIndex].price;
                state.totalPrice += action.payload.num *action.payload.group[action.payload.optionIndex].price; // 가격 갱신
            }
        },
        deleteOption:(state,action)=>{
            //1 localstorage , allgroup 갱신
            let groups = JSON.parse(localStorage.getItem("cart")); //현재 장바구니 불러옴
            console.log(groups);
            groups[action.payload.groupIndex] = groups[action.payload.groupIndex].filter((option)=>{ 
                return (option.parentOptionId != action.payload.option.parentOptionId || option.childOptionId !=action.payload.option.childOptionId)

            }) 
            console.log(groups);
        },
        deleteGroup:(state,action)=>{
            
        },
        loadCart:(state,action)=>{
            state.allGroups = JSON.parse(localStorage.getItem("cart"));
        }
        
    }
})

export const { checkGroup,changeOptionNum,deleteOption,deleteGroup,loadCart } = cartReducer.actions
export default cartReducer
