import React from 'react'
import styled from 'styled-components'
import {Col} from 'antd'
import {Link} from "react-router-dom"
function ProductCard(props) {
    return (
        <Col lg={6} md={8} xs={24}>
            <div style ={{position: 'relative'}}>
                <Link to={`/product/${props.id}`}>
                    <Frame>
                    <Image src={props.item.url}/>
                    </Frame>
                    <Content>
                        <Company>{props.item.company}</Company>
                        <Title>{props.item.title}</Title>
                        <PriceLine>
                            <Discount>{props.item.discount}%</Discount>
                            <span style={{width:"10px"}}></span>
                            <Price>{props.item.price}</Price>
                        </PriceLine>
                        <Rating>
                            <Star>{props.item.star} </Star>
                            <span style={{width:"10px"}}></span>
                            <Review>리뷰 {props.item.review}</Review>
                        </Rating>
                        {props.item.delivery ==="free"&&
                            <Delivery>무료배송</Delivery>
                        }
                        {props.item.delivery ==="overSea"&&
                            <Delivery>해외배송</Delivery>
                        }

                    </Content>
                </Link>
                
            </div>
        </Col>
    )
}

export default ProductCard
//이미지 확대시 overflow관리를 위한 프레임
const Frame = styled.div` 
width: 100%;
height: 200px;
border-radius: 8px;
overflow: hidden;
cursor: pointer;
`
//마우스 갖다대면 확대(hover)
const Image = styled.img`
width: 100%;
height: 200px;
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
const Delivery=styled.div`
margin-top:8px;
background-color: #dddddd;
border-radius:4px;
color:#555555;
font-weight:bold;
padding:0px 5px 0px 5px;
width:68px;
`
const Content=styled.div`
display:flex;
margin-top:10px;
flex-direction:column;
`
const Company=styled.div`
font-size: 12px;
line-height: 15px;
color: #888888;
`
const Title=styled.div`
font-size: 18px;
line-height: 30px;
color:black;
`
const PriceLine=styled.div`
display:flex;
font-weight:bold;
`
const Discount=styled.div`
font-size: 20px;
line-height: 30px;

`
const Price=styled.div`
font-size: 20px;
line-height: 30px;
color:black;
`
const Rating=styled.div`
display:flex;
font-weight:bold;
`
const Star=styled.div`
font-size:13px;
`
const Review=styled.div`
font-size:13px;
color: #888888;
`