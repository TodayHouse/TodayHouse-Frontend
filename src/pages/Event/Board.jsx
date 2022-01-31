import React, { useState,useEffect } from "react";
import styled from "styled-components";
import GridCards from "./GridCards";
import {Row} from "antd";
import img1 from "./img/img1.png";
import img2 from"./img/img2.png";

import "antd/dist/antd.css"
const Advices =() =>{
    const [images, setImages] =useState([img1, img2])//임시 이미지
    const [items,setItems] = useState([])
    const load = () =>{
        console.log("load");
        setItems([...items,...images]) //기존 아이템리스트에 이미지 추가(임시)
    }
    useEffect(() => {
        load();
    }, [])

    return(
        <React.Fragment>
            
            <Scroll>
                <Row gutter={20}>
                {items && items.map((item,index)=>( //반복문
                        <React.Fragment key={index}>
                            <GridCards
                            image ={item}
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
margin-top : 50px;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width : 1256px;
background-color: #fff;
border-bottom: 1px solid #ededed;

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
    margin: 30px 50px;
    

`