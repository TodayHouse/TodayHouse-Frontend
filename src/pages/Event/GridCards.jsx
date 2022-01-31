import React from 'react'
import styled from 'styled-components'
import {Col} from 'antd'
function GridCards(props) {
    return (
        <Col lg={12} md={24} xs={24}>
            <div style ={{position: 'relative'}}>
                    <Frame>
                    <Image src={props.image}/>
                    </Frame>
                    <Text>
                        진행중
                    </Text>
                    
                
            </div>
        </Col>
    )
}

export default GridCards
//이미지 확대시 overflow관리를 위한 프레임
const Frame = styled.div` 
width: 600px;
height: 250px;
border-radius: 30px;
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