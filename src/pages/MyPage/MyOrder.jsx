import styled from 'styled-components';
import {} from 'react-icons/fa';
import { Icon, InlineIcon } from "@iconify/react";
import React, {useState, useEffect} from "react"; 
import Item from 'antd/lib/list/Item';

const MyStories = () => {
    return (
        <>
        <CenterRenderer>
           <StateRenderer>
               <GridBox id = "order_complete">     
                    <InnerGrid>
                        <InnerImage>
                        <Icon icon="el:ok-sign" fontSize={80}/>
                        </InnerImage>
                     
                        <InnerGridContent id = "text">주문완료</InnerGridContent>  
                   </InnerGrid>          
                       
               </GridBox>

               <GridBox id = "bucket">
                   <InnerGrid>
                       <InnerImage>
                       <Icon icon="map:grocery-or-supermarket" fontSize={80}/>
                       </InnerImage>
                 
                        <InnerGridContent id = "text">장바구니</InnerGridContent>
                   </InnerGrid>                        
               </GridBox>

               <GridBox id = "order_canceled">   
                    <InnerGrid>
                        <InnerImage>
                            <Icon icon="fluent:calendar-cancel-24-filled" fontSize={80}/>     
                        </InnerImage>
                       
                       <div style = {{marginLeft : '13%'}}>
                       <InnerGridContent id = "text">취소</InnerGridContent>
                       </div>
                
                    </InnerGrid>            
               </GridBox>
           </StateRenderer>

            <ItemBox>
                주문한 콘텐츠를 렌더링하는 부분입니다.
            </ItemBox>
        </CenterRenderer>
        </>
    );
}

const InnerGrid = styled.div`
    padding-left: 70px;
    padding-top : 25px;
`
const InnerImage = styled.div`
    padding-left: 15px;
`

const InnerGridContent = styled.div`
    height : 150px;
    font-size:30px;
`
const CenterRenderer = styled.div`
    background-color: white;
    width : 100%;
    display : flex;
    align-items: center;
    flex-direction: column;
    
`

const StateRenderer = styled.div`
    width : 900px;
    display : flex;
    height: 190px;
    margin-top : 30px;
    background-color: skyblue;
    border : 1px solid skyblue;
    border-radius: 4px;
`

const GridBox = styled.div`
    display : inline-block;
    height : 170px;
    width : 330px;
    margin-top: 1%;
    margin-left : 2%;
    margin-right : 2%;
    background-color: white;
    border-radius: 4px;
`

const ItemBox = styled.div`
    width : 80%;
    border : 3px solid skyblue;
    margin-top: 2%;
    border-radius: 4px;
`

export default MyStories;