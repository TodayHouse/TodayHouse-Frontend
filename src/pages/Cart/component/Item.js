import React,{useEffect, useState} from "react"
import styled from "styled-components"
import OptionModal from "./OptionModal"
import $ from 'jquery'
const Item = (props) =>{
    const [isOpen, setOpen] = useState(false);
    const handleSubmit = () => {
        setOpen(false);
    };
    const handleClick = () => {
        setOpen(true);
    };
    const num = Array(100)
    .fill()
    .map((data,i)=>i+1);
    
    return(
        <>
        
            <Container>
                <ShipCompany>{props.item.shipCompany} 배송</ShipCompany>
                <Content>
                    <CheckBox type= "checkbox"
                     onChange={(e) => props.handleSingleCheck(e.target.checked, props.item.id)}
                     // checkItems에 data.id가 있으면 체크 아니면 체크 해제
                     checked={props.checkItems.includes(props.item.id) ? true : false}></CheckBox>
                    <First>
                        <TitleBlock>
                            
                            <Frame>
                                <Image src={props.item.img}/>
                            </Frame>
                            <TextBlock>
                                <Title>{props.item.title}</Title>
                                <SubText>{props.item.shipCost ? props.item.shipcost:"무료배송"}</SubText>
                            </TextBlock>
                            <Delete onClick={()=>props.delete(props.item.id)}>X</Delete>
                        </TitleBlock>
                        {
                            props.item.options.map((option,index) =>
                            (
                                <OptionBlock  key={index}>
                                    <OptionName>{option.name}<OptionDelete onClick={()=>props.deleteOption(props.index,index)} >X</OptionDelete></OptionName>
                                    
                                    <OptionPriceBlock>
                                        <SelectNum>
                                            {num.map((data)=>(
                                                <option value={data} selected={data === option.number}>{data}</option>
                                            ))}
                                        </SelectNum>
                                        <Number>{option.number} 개</Number>
                                        <Price>{option.price * option.number}</Price>
                                    </OptionPriceBlock>
                                </OptionBlock>
                            ))
                        }
                        <OptionNav>
                            <SubText onClick={handleClick}>옵션변경</SubText>
                        </OptionNav>
                        
                    </First>
                    
                </Content>
                {props.item.shipCost ? <ShipCost>배송비 :{props.item.shipCost}</ShipCost> :<ShipCost>무료배송</ShipCost>}
                <OptionModal isOpen = {isOpen} item={props.item} index={props.index} onSubmit={handleSubmit}></OptionModal>            
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    background-color: white;
    align-items: center;
    width:50vw;
    margin-bottom: 20px;
    padding-right: 30px;

`
const ShipCompany = styled.div`
    font-weight:bold;
    border-bottom: 0.01em solid #f4f4f4;
    padding:10px;
    
`
const TitleBlock = styled.div`
    display:flex;
    margin:10px;
    
`
const Frame = styled.div` 
width: 70px;
height: 70px;
border-radius: 8px;
overflow: hidden;
cursor: pointer;
`
//마우스 갖다대면 확대(hover)
const Image = styled.img`
width: 70px;
height: 70px;
transition: all 0.2s linear;
&:hover{
    transform: scale(1.1);
    
}
`

const TextBlock=styled.div`
    cursor:pointer;
`
const Title=styled.div`
    font-weight:bold;
    padding-left:10px;
    &:hover{
    color:grey;
}
`
const SubText=styled.div`
    color:grey;
    font-size: 5px;
    padding-left:10px;

`
const OptionBlock=styled.div`
    background-color:#f4f4f4;
    display:flex;
    flex-direction: column;
    margin:10px;
    width:90%;
    border-radius: 8px;
`
const OptionName=styled.div`
    font-size: medium;
    margin:10px;
    width:100%;
    display:flex ;
    
`
const Input=styled.input`
    width:20%;
    margin:10px;
    border-radius: 5px;
`
const OptionPriceBlock = styled.div`
    display:flex;
    
`
const Price = styled.div`
    margin: 20px;
    font-size: large;
`
const Number= styled.div`
    margin:20px;
    margin-right: auto;
`
const ShipCost=styled.div`
    font-weight:bold;
    border-bottom: 0.01em solid #f4f4f4;
    padding:10px;
`
const CheckBox=styled.input`
    width: 10%;
    height: 20px;
    margin-left: 20px;
    margin-top: 10px;
    cursor: pointer;
`
const Content = styled.div`
    width:100%;
    display: flex;
`
const First =styled.div`
    width:90%;
`
const Delete=styled.button`
background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color:white;
  }
  height:20px;
  width:20px;
  border-radius: 4px;
  border: 0;
  font-size: 10px;
  font-weight: bolder;
  margin-left: auto;
`
const OptionDelete=styled.button`
background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color:white;
  }
  height:20px;
  width:20px;
  border-radius: 4px;
  border: 1;
  font-size: 10px;
  font-weight: bolder;
  margin-left: auto;
  
`
const OptionNav = styled.div`
    display:flex;
    
`
const SelectNum=styled.select`
    width:100px;
    height:30px;
`
export default Item