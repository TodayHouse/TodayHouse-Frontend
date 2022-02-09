import React from 'react'
import styled from 'styled-components'
import {Col} from 'antd'
import {Link} from "react-router-dom"
function GridCards(props) {
    return (
        <Col lg={6} md={8} xs={24}>
            <div style ={{position: 'relative'}}>
                <Link to={`/advices/${props.id}`}>
                    <Frame>
                    <Image src={props.image}/>
                    </Frame>
                    <Text>
                        제목
                        <Textsmall>작성자</Textsmall>
                        <Textsmall>조회수</Textsmall>
                    </Text>
                </Link>
                
            </div>
        </Col>
    )
}

export default GridCards
//이미지 확대시 overflow관리를 위한 프레임
const Frame = styled.div` 
width: 100%;
height: 300px;
border-radius: 5%;
overflow: hidden;
cursor: pointer;
`
//마우스 갖다대면 확대(hover)
const Image = styled.img`
width: 100%;
height: 320px;
transition: all 0.2s linear;
&:hover{
    transform: scale(1.4);
    
}


`
const Text =styled.div`
  position: relative;
  display: inline-block;
  margin: 6px 10px 0;
  padding: 14px 6px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  color: #0;
  cursor: pointer;
`
const Textsmall=styled.div`
font-size: 8px;
line-height: 15px;
color: #888888;
`