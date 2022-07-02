import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Group from'./component/Group'
import { useSelector,useDispatch } from 'react-redux'
import { OmitProps } from 'antd/lib/transfer/ListBody'
import { deleteProduct, loadCart } from '../../redux/reducer/cart'
const Cart = () =>{
    let data =[]; 
    const groups=useSelector((state)=>state.cart.allGroups) ;//장바구니 불러옴
    const totalPrice=useSelector((state)=>state.cart.totalPrice);
    const totalDeliveryFee=useSelector((state)=>state.cart.deliveryFee);
    console.log(groups);
    
    const dispatch = useDispatch(); 
    useEffect(()=>
    {
        dispatch(loadCart());
        /*if(localStorage.getItem("cart")){
            data = JSON.parse(localStorage.getItem("cart"));

        }
        else{
            console.log("장바구니가 비었습니다.");
        }
        */
        
        
        
    },[]);
    
    



    return (
        <>
            <Container>
                <Container2>
                    <Container1>
                        <SelectLine>
                            <CheckBlock><Check 
                            type="checkbox" />모두선택 
                            </CheckBlock>
                            <Choice>선택삭제</Choice>
                        </SelectLine>
                        <CartContainer>
                        {   
                            
                                groups && groups.map((group, index)=>{
                                    return (
                                        <React.Fragment key={index}>
                                            <Group
                                            group={group}
                                            index={index}
                                            
                                            ></Group>

                                        </React.Fragment>
                                    )

                                })
                            
                        }
                        </CartContainer>
                    </Container1>
                    
                    <ContainerSticky>
                        <Receipt>
                            <Price>총 상품금액<Won>{totalPrice}원</Won></Price>
                            <ShipPrice>총 배송비<Won>{totalDeliveryFee}원</Won></ShipPrice>
                            <Cost>결제금액<Won>{totalPrice + totalDeliveryFee}원</Won></Cost>
                        </Receipt>
                        <Purchase>구매하기</Purchase>
                    </ContainerSticky>
                    
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


`
const Container1 =styled.div`
    display:flex;
    flex-direction : column;
    align-items: center;
`
const ContainerSticky =styled.div`
    display:flex;
    flex-direction : column;
    align-items: center;
    position: sticky;
    top: 0px;
`
const Container2 =styled.div`
    display:flex;
`
const SelectLine = styled.div`
    display:flex;
    width:100%;
    height: 50px;
    align-items: flex-start;

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
margin:10px;
margin-left: auto;

`
const CartContainer=styled.div`
    display:flex;
    flex-direction: column;
    width:100%;

`
const Receipt =styled.div`
    margin-top: 50px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    background-color: white;
    align-items:flex-start;
    width:25vw;
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
const ShipCompany = styled.div`
    font-weight:bold;
    border-bottom: 0.01em solid #f4f4f4;
    padding:10px;
    
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