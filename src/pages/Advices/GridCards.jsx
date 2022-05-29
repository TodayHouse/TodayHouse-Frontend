import React from 'react'
import styled from 'styled-components'
import {Col} from 'antd'
import {Link} from "react-router-dom"
function GridCards(props) {
    console.log(props.item);
    return (
        <Col lg={6} md={8} xs={24}>
            <div style ={{position: 'relative'}}>
                <Container>
                    <Link to={`/advices/${props.item.id}`}>
                        <Frame>
                        <Image src={props.item.thumbnailUrl}/>
                        </Frame>
                        <Text style={{color:"black"}}>
                            {props.item.title}
                            <Textsmall>{props.item.writer}</Textsmall>
                            <Textsmall>조회수</Textsmall>
                        </Text>
                    </Link>
                </Container>
                
            </div>
        </Col>
    )
}

export default GridCards
//이미지 확대시 overflow관리를 위한 프레임
const Container= styled.div`
    display:flex;
    flex-direction: column;
`
const Frame = styled.div` 
height: 250px;
border-radius: 10px;
overflow: hidden;
cursor: pointer;
`
//마우스 갖다대면 확대(hover)
const Image = styled.img`
height: 250px;
transition: all 0.2s linear;
&:hover{
    transform: scale(1.2);
    
}
`
const Text =styled.div`
  position: relative;
  display: inline-block;
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  color: black;
  cursor: pointer;
`
const Textsmall=styled.div`
font-size: 8px;
line-height: 15px;
color: #888888;
`