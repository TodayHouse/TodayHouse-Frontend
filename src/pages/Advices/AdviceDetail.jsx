import React from 'react'
import styled from 'styled-components'
import house1 from "./img/house1.jpg"
import house2 from "./img/house2.jpg"
import Navbar from "../Main/Navbar"
import SubNavbar from "../Main/SubNavbar"
import Reply from "./Reply"
const AdviceDetail = (props) => {



    return (
        <>
        
        <TitleImage src={house1}></TitleImage>
        
        <Category> 노하우  세부</Category>
        <Title>제목</Title>

        <WriterInfo>
            <WriterImage src={house2}></WriterImage>
            <WriterName>
                작성자
                <Date>2022/00/00</Date>
            </WriterName>
            <span style={{width : 800}}></span>
            <Follow>+ 팔로우</Follow>
        </WriterInfo>
        <Reply/>
        

        
        <></>
        </>

    )
    
        
    
}
export default AdviceDetail
const TitleImage = styled.img`
height : 1000px

`
const Category = styled.div`
color: #555555;
font-size: 18px;
`
const Title = styled.h1`
color: #2f3438;
font-weight: bold
`
const WriterInfo = styled.div`
position: relative;
width : 1256px;
height: 100px;
display: flex;
background-color: #fff;
border-bottom: 1px solid #ededed;
margin:0 auto;


`
const WriterImage = styled.img`
border-radius : 100%
width: parents
height:100%

`
const WriterName = styled.div`
color: #2f3438;
font-weight: bold;
margin : 20px
word-wrap: break-word;
width: parents
`
const Date = styled.div`
color: #555555;
font-weight:normal;
`
const Follow = styled.button`
width:110px;
height:50px;
background-color: #38ccff;
border: none;
color:#fff;
border-radius:5%;
padding: 10px 0;
text-align: center;
text-decoration: none;
display: block;
font-size: 15px;
margin: 4px;
cursor: pointer;
font-weight:bold;
&:hover{
    background-color: #28acff;
}


`