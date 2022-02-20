import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Item from'./component/Item'
import { useSelector,useDispatch } from 'react-redux'
import { OmitProps } from 'antd/lib/transfer/ListBody'
import { deleteProduct } from '../../redux/reducer/cart'
const Cart = () =>{
    const [items,setItems]=useState([])
    const [selected,setSelected]=useState([])
    const data= useSelector((state) => state.cart.items)
    const [totalCost,setTotalcost]=useState(0);
    const shipCost = useSelector((state) =>state.cart.shipCost)
    const dispatch = useDispatch();

    useEffect(()=>{
        setItems(data)
        
    },[data]);

    const useDeleteItem = (index) =>{
        dispatch(deleteProduct(index))
        console.log(data)
        data = useSelector((state)=>state.cart.data)
        
    }

    return (
        <>
            <Container>
                <Container2>
                    <Container1>
                        <SelectLine>
                            <CheckBlock><Check type="checkbox"/>모두선택 </CheckBlock>
                            <Choice/>
                        </SelectLine>
                        <CartContainer>
                        {
                            items && items.map((item,index)=>(
                                <Item item={item} index={index} key={index} delete={useDeleteItem}/>
                            ))
                        }
                        </CartContainer>
                    </Container1>
                    <Container1>
                        <Receipt>
                            <Price>총 상품금액<Won>{totalCost}원</Won></Price>
                            <ShipPrice>총 배송비<Won>{shipCost}원</Won></ShipPrice>
                            <Cost>결제금액<Won>{totalCost + shipCost}원</Won></Cost>
                        </Receipt>
                        <Purchase>구매하기</Purchase>
                    </Container1>
                </Container2>
            
            </Container>
        </>
    )

}

export default Cart
const Container = styled.div`
    display : flex;
    flex-direction : column;
    align-items: center;
    background-color : #f4f4f4;
    width: 100vw;
    height: 100vw;


`
const Container1 =styled.div`
    display:flex;
    flex-direction : column;
    align-items: center;
`
const Container2 =styled.div`
    display:flex;
`
const SelectLine = styled.div`
    display:flex;
    height: 50px;

`
const CheckBlock =styled.div`
    display:flex;
    align-items: center;
`
const Check = styled.input`
    width: 20px;
    height: 20px;
    cursor: pointer;   
    margin:10px;
`
const Choice = styled.div`
`
const CartContainer=styled.div`
    display:flex;
    flex-direction: column;

`
const Receipt =styled.div`
    margin-top: 50px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    background-color: white;
    align-items:flex-start;
    width:300px;
`
const Price=styled.div`
    display: flex;
    margin:15px;
`
const ShipPrice=styled.div`
    display: flex;
    margin:15px;
`
const Cost = styled.div`
    display: flex;
    margin:15px;
`
const Won=styled.div`
    font-weight: bold;
    margin-left: 100px;

`
const Purchase=styled.button`
  background-color: ${(props) => props.theme.mainColor};
  color: white;
  &:hover {
    background-color: ${(props) => props.theme.hoverMainColor};
  }
  width: 50%;
  padding: 10px 0px;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 4px;
  font-size: 20px;
  margin:10px;
`