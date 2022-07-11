import React,{useEffect, useState} from "react"
import styled from "styled-components"
import { useSelector,useDispatch } from 'react-redux'
import { checkGroup,changeOptionNum , deleteOption , deleteGroup} from "../../../redux/reducer/cart"
import OptionModal from "./OptionModal"
import $ from 'jquery'
import { changeNum } from "../../../redux/reducer/product"
const Group = ({group,index}) =>{
    const [isOpen, setOpen] = useState(false);
    const dispatch = useDispatch();
    const productInfo = useSelector((state => state.cart.productInfo? state.cart.productInfo:null));
    const handleSubmit = () => {
        setOpen(false);
    };
    const handleClick = () => {
        setOpen(true);
    };
    
    

    let price = 0;
    
    const handleChangeNum = (g ,o,gi,oi)=>{ //리덕스 옵션수량변경
        dispatch(changeOptionNum({
            group:g,
            option:o,
            groupIndex:gi,
            optionIndex:oi,
            num:document.getElementById("selectNum"+gi+"-"+oi).value}));
        
    }
    const handleDeleteOption =(g,o,gi,oi)=>{ //옵션 삭제
        dispatch(deleteOption({
            group:g,
            option:o,
            groupIndex:gi,
            optionIndex:oi,
        }))
    }
    const handleDeleteGroup =(g,gi)=>{ //그룹 삭제
        dispatch(deleteGroup({
            group:g,
            groupIndex:gi,
        }));
    }
    useEffect(()=>
    {
        let temp = 0;
        group.map((option)=>{ temp += option.price *option.num});
        price=temp;

        
    });

    const [deleveryFee,setDeleveryFee] = useState(0);
    const num = Array(100)
    .fill()
    .map((data,i)=>i+1);
    
    
    return(
         group.length != 0? (
        <>
            <Container>
                <Content>
                    <CheckBox type= "checkbox" id={"group"+index}
                    onClick={() => dispatch(checkGroup({group: group}))}
                     ></CheckBox>
                    <First>
                        <TitleBlock>
                            <Frame>
                                <Image src={group.length !=0? group[0].image: "이미지없음"}/>
                            </Frame>
                            <TextBlock>
                                <Title>{group[0].title}</Title>
                                <SubText>{group[0].deleveryFee ? group[0].deleveryFee + "원" : "무료배송"}</SubText>
                            </TextBlock>
                            <Delete onClick={()=>handleDeleteGroup(group,index)}>X</Delete>
                            
                        </TitleBlock>
                        <SelectedView>
                            <Selected
                                id={productInfo? productInfo.parentId : null}
                                //onChange={onParentOptionSelected}
                                defaultValue="default">
                                <option value="default" disabled>
                                    {productInfo? productInfo.optionTitle1: null}선택
                                </option>
                                {productInfo? productInfo.optionList1?.map((data, idx) => (
                                    <option
                                        key={idx}
                                        id={"option" + idx}
                                        value={data.content}>
                                        {data.content +
                                            "(" +
                                            data.price.toLocaleString() +
                                            "원)"}
                                    </option>
                                )): null}
                            </Selected>
                        </SelectedView>
                        {
                            group.map((option,i) =>
                            (
                                <OptionBlock  key={i}>
                                    <OptionName>{option.name}<OptionDelete  onClick={()=>handleDeleteOption(group,option,index,i)}>X</OptionDelete></OptionName>
                                    
                                    <OptionPriceBlock>
                                        <SelectNum id={"selectNum"+index+"-"+i}
                                        onChange={()=>handleChangeNum(group,option,index,i)
                                            }>
                                            { //숫자를 변경하면 장바구니 갱신
                                            num.map((data,index)=>(
                                                <option key={index} value={data} selected={data === option.num}
                                                >{data}</option>
                                            ))} 
                                        </SelectNum>
                                        <Number>{option.num} 개</Number>
                                        <Price>{option.price * option.num}</Price>
                                    </OptionPriceBlock>
                                </OptionBlock>
                            ))
                        }
                        <OptionNav>
                            <SubText onClick={handleClick}>옵션변경</SubText>
                        </OptionNav>
                        
                    </First>
                    
                </Content>
                           
            </Container>
        </>):(<></>
        )
                    
    )
}
//<OptionModal isOpen = {isOpen} onSubmit={handleSubmit}></OptionModal> 
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
const Selected = styled.select`
    width: 100%;
    height: 50px;
    border: none;
    font-size: 16px;
    &:focus {
        outline: none;
    }
`;
const SelectedView = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${(props) => props.theme.mainColor};
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    margin-top: 10px;
    width: 100%;
`;
export default Group