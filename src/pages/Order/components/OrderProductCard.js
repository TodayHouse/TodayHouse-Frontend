import React from 'react'
import styled from 'styled-components'

const OrderProductCard = () => {
  return (
    <Container>
      <Image src={require('../../../img/house1.jpg')} />
      <ContentContainer>
        <Name>캐더린</Name>
        <Option>상품선택: 수파싱얼</Option>
        <PriceContainer>
          <Price>164,900원</Price>
          <Amount>1개</Amount>
        </PriceContainer>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 20px 15px;
  border-bottom: 1px solid #dddddd;
`
const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
const Name = styled.span`
  font-size: 18px;
`
const Option = styled.span`
  font-size: 16px;
  color: gray;
`
const PriceContainer = styled.div`
  display: flex;
`
const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  border-right: 1px solid #dddddd;
  padding-right: 10px;
`
const Amount = styled.span`
  color: gray;
  font-size: 16px;
  padding-left: 10px;
`
export default OrderProductCard
