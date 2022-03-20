import { createSlice } from '@reduxjs/toolkit'

const cartReducer = createSlice({
    name: 'cartReducer',
    initialState:{ //스토어에 저장하는 states 초기값
        totalCost:308000,
        shipCost:0,
        items:
            [
                {
                    id:1,
                    title:"[오늘의딜] 아이닉 대용량 스텐 에어프라이어 3colors",
                    img:"https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163090404341558104.jpg?w=480&h=480&c=c&webp=1",
                    options:
                    [
                        {
                            name:"아이보리/좌형",
                            number:1,
                            price:154000,

                        },
                        {
                            name:"아이보리/우형",
                            number:2,
                            price:154000,

                        }

                    ],
                    shipCompany:"아이닉샵",
                    shipCost:0,
                    isChecked:true,
    
                },
                {
                    id:2,
                    title:"[오늘의딜] 아이닉 대용량 스텐 에어프라이어 3colors",
                    img:"https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163090404341558104.jpg?w=480&h=480&c=c&webp=1",
                    options:
                    [
                        {
                            name:"아이보리/좌형",
                            number:2,
                            price:154000,

                        },
                        {
                            name:"아이보리/우형",
                            number:1,
                            price:154000,

                        }

                    ],
                    shipCompany:"아이닉샵",
                    shipCost:0,
                    isChecked:true,
    
                }
            ]


        
    },
    reducers:{//state를 변경하는 reducers
        deleteProduct:(state,action)=>{
            console.log(state.items)
            state.items = state.items.filter((item,index)=>index !== action.payload);
        },
        addOption:(state,action)=>{
            

        }
    }
})

export const { deleteProduct } = cartReducer.actions
export default cartReducer
