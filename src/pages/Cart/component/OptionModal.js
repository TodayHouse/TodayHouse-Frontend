import React, { useEffect,useState } from 'react';
import ReactModal from 'react-modal';
import styled from "styled-components";
import $ from 'jquery'
import Operation from 'antd/lib/transfer/operation';

const OptionModal =({item,index,isOpen,onSubmit}) =>{
    const handleClickSubmit = () => {
        onSubmit();
    };
    const customStyles = {
        content: {
          top: '25%',
          left: '25%',
          right: 'auto',
          bottom: 'auto',
          marginLeft : '5%',
          paddingLeft : '0%',
          width: '500px',
          
        },
      };
      const testOption = 
      [
          {
              name: "블랙",
              price:154000,
          },
          {
              name:"아이보리",
              price:154000
          }
      ]
    const num = Array(100)
    .fill()
    .map((data,i)=>i+1);

    
    
      return (
        <ReactModal isOpen = {isOpen} onSubmit = {onSubmit} style = {customStyles}>
            <Selected>
                {
                    testOption.map((option)=>
                    (
                        <option>{option.name+'('+option.price.toLocaleString() + '원)'}</option>
                    ))
                }
            </Selected>
            {
                item.options.map((option,i) =>
                    (
                        <OptionBlock  key={i}>
                            <OptionName>{option.name}</OptionName>
                            
                            <OptionPriceBlock>
                                <SelectNum id={`${index}-${i}m`}>
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
            <ButtonBlock>
            <Cancel onClick = {handleClickSubmit}>
                취소
            </Cancel>
            <Submit onClick = {handleClickSubmit}>
                확인
            </Submit>
            
            </ButtonBlock>

        </ReactModal>
      )
}
export default OptionModal
const OptionBlock=styled.div`
    background-color:#f4f4f4;
    display:flex;
    flex-direction: column;
    margin:20px;
    width:450px;
    border-radius: 8px;
`
const OptionName=styled.div`
    font-size: medium;
    margin:10px;
    
`
const Input=styled.input`
    width:100px;
    margin:10px;
`
const Price = styled.div`
    margin: 10px;
    font-size: large;
`
const Number= styled.div`
    margin:10px 200px 10px 10px;
`
const OptionPriceBlock = styled.div`
    display:flex;
    
`
const Selected = styled.select`
    width: 100%;
    height: 50px;
    border: none;
    font-size: 16px;

`
const Submit=styled.button`
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
const Cancel=styled.button`
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
  margin-left:20px;
`
const ButtonBlock=styled.div`
    display:flex;
    margin:10px;
    
`
const SelectNum=styled.select`
    width:100px;
    height:30px;
`