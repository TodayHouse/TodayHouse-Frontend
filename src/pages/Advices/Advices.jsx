import React, { useState,useEffect } from "react";
import styled from "styled-components";
import GridCards from "./GridCards";
import {Row} from "antd"
import house1 from"./img/house1.jpg"
import house2 from"./img/house2.jpg"
import house3 from"./img/house3.jpg"
import house4 from"./img/house4.jpg"
import "antd/dist/antd.css"
const Advices =() =>{
    const [images] =useState([house1,house2,house3,house4])//임시 이미지
    const [items,setItems] = useState([])
    const load = () =>{
        setItems([...items,...images]) //기존 아이템리스트에 이미지 추가(임시)
    }
    useEffect(() => {
        load();
    }, [])

    return(
        <React.Fragment>
            <Text>테마별 노하우</Text>
            <Scroll>
                <Row gutter={16}>
                {items && items.map((item,index)=>( //반복문
                        <React.Fragment key={index}>
                            <GridCards
                            image ={item}
                            id = {index} // 임시로 순서대로 id부여
                            >
                            </GridCards>

                        </React.Fragment>
                    ))}

                    
                </Row>
                <LoadMore onClick={load}>Load</LoadMore>
            </Scroll>
        </React.Fragment>
    )
}

export default Advices
const Scroll =styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width : 1256px;
background-color: #fff;
border-bottom: 1px solid #ededed;
margin:0 auto;
`
const Text =styled.div`
  position: relative;
  display: inline-block;
  margin: 6px 10px 0;
  padding: 14px 6px;
  font-size: 25px;
  line-height: 26px;
  font-weight: 700;
  color: #0;
  
`
const LoadMore = styled.button`
    cursor: pointer;
    color: #198754;
    border-color: #198754;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    

`