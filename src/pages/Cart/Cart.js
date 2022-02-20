import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Item from'./component/Item'
import { useSelector,useDispatch } from 'react-redux'
import { OmitProps } from 'antd/lib/transfer/ListBody'
import { deleteProduct } from '../../redux/reducer/cart'
const Cart = () =>{
    const [items,setItems]=useState([])
    const [checkItems, setCheckItems] = useState([]);
    const data= useSelector((state) => state.cart.items)
    const [totalCost,setTotalcost]=useState(0);
    const [shipCost,setShipCost]=useState(0);

    useEffect(()=>{
        setItems(data)
    },[data]);

    useEffect(()=>{
        calTotalCost();
        calShipCost();
    },[checkItems])

    const deleteItem = (id) =>{
        setItems(items.filter((item)=>item.id !== id))
        setCheckItems(checkItems.filter((el)=> el!== id))
        calTotalCost();
        calShipCost();
    }
    const calTotalCost=()=>{
        var cost =0;
        items.map((item) =>{
            checkItems.includes(item.id) && item.options.map((option)=>{
                cost +=option.price *option.number;
            })

        })
        setTotalcost(cost);
    }
    const calShipCost=()=>{
        var cost =0;
        items.map((item) =>{
            cost += item.shipCost;

        })
        setShipCost(cost);
    }
    const handleCheckAll =(checked)=>{
        if (checked) {
            const Array = [];
            items.forEach((item) => Array.push(item.id));
            setCheckItems(Array);
          }
      
          // 반대의 경우 전체 체크 박스 체크 삭제
          else {
            setCheckItems([]);
          }
    }
    const handleSingleCheck = (checked, id) => {
        if (checked) {
          setCheckItems([...checkItems, id]);
        } else {
          setCheckItems(checkItems.filter((el) => el !== id));
        }
      };

    return (
        <>
            <Container>
                <Container2>
                    <Container1>
                        <SelectLine>
                            <CheckBlock><Check 
                            type="checkbox" 
                            onChange={(e)=>handleCheckAll(e.target.checked)}
                            checked={checkItems.length === items.length ? true : false}/>모두선택 </CheckBlock>
                            <Choice/>
                        </SelectLine>
                        <CartContainer>
                        {
                            items && items.map((item,index)=>(
                                <Item item={item} 
                                      index={index} 
                                      key={index} 
                                      delete={deleteItem}
                                      handleSingleCheck={handleSingleCheck}
                                      checkItems={checkItems}/>
                            ))
                        }
                        </CartContainer>
                    </Container1>
                    
                    <ContainerSticky>
                        <Receipt>
                            <Price>총 상품금액<Won>{totalCost}원</Won></Price>
                            <ShipPrice>총 배송비<Won>{shipCost}원</Won></ShipPrice>
                            <Cost>결제금액<Won>{totalCost + shipCost}원</Won></Cost>
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
    width: 100vw;
    height: auto;


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
    height:auto;
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