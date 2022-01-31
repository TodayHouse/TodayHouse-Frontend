import React, { useState } from 'react'
import styled from "styled-components"
import house1 from "./img/house1.jpg"
import { Row } from 'antd';
const Reply = () =>{

    const [replyNum,setReplyNum]=useState(0);
    const [replies,setReplies]=useState([]);

    const storeReply = e =>{
        e.preventDefault();
    }

    return (
        <>
        <ReplyNum>댓글 {replyNum}</ReplyNum>

        <InputBar>
            <ImageBlock>
                <Image src={house1}></Image>
            </ImageBlock>
            <ReplyForm onSubmit={storeReply}>
                <ReplyInput type="text" name="content">
                </ReplyInput>
                <ReplySubmit type="submit">등록</ReplySubmit>
            </ReplyForm>
            
        </InputBar>

      
        </>
    )
}
const ReplyNum = styled.div``
const InputBar = styled.div`
display:flex;
width:100%;
background-color:#aaaaaa;
border-color:#000000
height:70px;
margin:0px 20px 0px ;
align-items:center;
`

const ImageBlock = styled.div`
margin:10px;
height:parent;
`
const Image = styled.img`
height:40px;
border-radius:100%;
`
const ReplyForm = styled.form`
width:100%;
display:flex;

`
const ReplyInput = styled.input`
width:100%;
height:40px;
border-radius:5px 0px 0px 5px;
border:none;
`
const ReplySubmit = styled.button`
width:100px;
height:40px;
border-radius:0px 5px 5px 0px;
border:none;
background-color:white;
font-weight:bold;
color:skyblue;
`
export default Reply