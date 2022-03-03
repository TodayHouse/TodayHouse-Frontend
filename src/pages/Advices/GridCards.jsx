import React from 'react'
import styled from 'styled-components'
import {Col} from 'antd'
import {Link} from "react-router-dom"
function GridCards(props) {
    return (
        <Col lg={6} md={8} xs={24}>
            <div style ={{position: 'relative'}}>
                <Container>
                    <Link to={`/advices/${props.id}`}>
                        <Frame>
                        <Image src={props.image}/>
                        </Frame>
                        <Text style={{color:"black"}}>
                            제목
                            <Textsmall>작성자</Textsmall>
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
    width:100%;
`
const Frame = styled.div` 
height: 250px;
width:100%;
border-radius: 10px;
overflow: hidden;
cursor: pointer;
`
//마우스 갖다대면 확대(hover)
const Image = styled.img`
height: 250px;
width:100%;
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