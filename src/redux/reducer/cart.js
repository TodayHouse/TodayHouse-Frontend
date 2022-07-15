import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import theme from '../../theme'
const url = theme.apiUrl;
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
        productInfo:[],
    },
    reducers:{//state를 변경하는 reducers
        checkGroup:(state,action)=>{
            let flag = true;
            
            //가격 계산
            let price = 0;
            let deliveryFee= action.payload.group[0].deliveryFee;

            action.payload.group.map((option)=>{
                price += option.price * option.num;
                });

            state.checkedGroups.length !== 0 && state.checkedGroups.map((group)=>{ //checkedGroup에 이미 있는지 체크
                if(isSameGroup(group,action.payload.group)) flag = false;
                
            })
            

            if(flag){ //존재하지 않을 때
                
                
                state.totalPrice += price;
                state.deliveryFee += deliveryFee;
                state.checkedGroups = [...state.checkedGroups, action.payload.group];
                

            }
            else{//이미 있을 때 (체크 해제)
                state.checkedGroups = [...state.checkedGroups.filter(group=> !isSameGroup(group,action.payload.group))];
                state.totalPrice = state.totalPrice - price;
                state.deliveryFee = state.deliveryFee - deliveryFee;

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
            console.log(state.checkedGroups);
        },
        deleteOption:(state,action)=>{
            
            let groups = JSON.parse(localStorage.getItem("cart")); //현재 장바구니 불러옴
            
            groups[action.payload.groupIndex] = groups[action.payload.groupIndex].filter((option)=>{ 
                return (option.parentOptionId != action.payload.option.parentOptionId || option.childOptionId !=action.payload.option.childOptionId)

            }) //옵션 삭제 
            
            

            // checkedGroup 갱신
            let flag = true;
            state.checkedGroups.length !== 0 && state.checkedGroups.map((group)=>{ //checkedGroup에 이미 있는지 체크
                if(isSameGroup(group,action.payload.group)) flag = false;
                
            })
            if(!flag){ //checkeGroup에 있으면 갱신
                state.checkedGroups = [...state.checkedGroups.filter(group=> !isSameGroup(group,action.payload.group))]; //해당그룹삭제
                if(groups[action.payload.groupIndex].length != 0){
                    state.checkedGroups.push(groups[action.payload.groupIndex]); //변경된 그룹으로 재삽입.
                }
                
               
                state.totalPrice -= action.payload.group[action.payload.optionIndex].num *action.payload.group[action.payload.optionIndex].price; // 가격 갱신
            }

            // 0개인 그룹 삭제
            groups= groups.filter((group)=>{
                return (group.length != 0);
            })

            localStorage.setItem("cart",JSON.stringify(groups))//갱신
            state.allGroups=JSON.parse(localStorage.getItem("cart"));
            
        },
        deleteGroup:(state,action)=>{
            //1 localstorage , allgroup 갱신
            let groups = JSON.parse(localStorage.getItem("cart")); //현재 장바구니 불러옴
            groups = groups.filter((group,index)=>{ //해당그룹 삭제.
                return (index != action.payload.groupIndex);
            });
            //checkedGroup 에 있는 그룹이면 삭제
            let flag = true;
            state.checkedGroups.length !== 0 && state.checkedGroups.map((group)=>{ //checkedGroup에 이미 있는지 체크
                if(isSameGroup(group,action.payload.group)) flag = false;
                
            })
            if(!flag){ //checkeGroup에 있으면 갱신
                //삭제하는 그룹의 제품의 수량*가격 모두 차감.
                state.checkedGroups[action.payload.groupIndex].map((option)=>{
                    state.totalPrice -= option.num * option.price;
                })
                state.checkedGroups = [...state.checkedGroups.filter(group=> !isSameGroup(group,action.payload.group))]; //해당그룹삭제
                
               
            }
            localStorage.setItem("cart",JSON.stringify(groups))//갱신
            state.allGroups=JSON.parse(localStorage.getItem("cart"));


        },
        loadCart:(state,action)=>{
            state.allGroups = JSON.parse(localStorage.getItem("cart"));
            state.totalPrice =0;
            state.deliveryFee =0;
            state.checkedGroups = [];
        },
        purchase:(state,action)=>{
            localStorage.setItem("cartToPurchase",JSON.stringify(state.checkedGroups));
            console.log(JSON.parse(localStorage.getItem("cartToPurchase")));
        },
        setInfo:(state, action)=>{
            console.log(action);
        },
        
    }
})

export const { checkGroup,changeOptionNum,deleteOption,deleteGroup,loadCart,purchase,setInfo} = cartReducer.actions
export default cartReducer
