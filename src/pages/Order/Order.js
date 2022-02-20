import React from "react"
import styled from "styled-components"
import {
  OrderPersonContainer,
  OrderStickyContainer,
  DestinationContainer,
  OrderProduct,
  CouponContainer,
  PointContainer,
  PaymentContainer,
} from "./components"

const Order = () => {
  return (
    <Wrap>
      <Container>
        <ContentContainer>
          <HeaderTitle>주문/결제</HeaderTitle>
          <OrderPersonContainer />
          <DestinationContainer />
          <OrderProduct />
          <CouponContainer />
          <PointContainer />
          <PaymentContainer />
        </ContentContainer>
        <StickyContainer>
          <OrderStickyContainer />
        </StickyContainer>
      </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 30px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1150px;
  display: flex;
`
const HeaderTitle = styled.span`
  font-size: 32px;
  font-weight: bold;
`
const ContentContainer = styled.div`
  width: 65%;
  //background-color: pink;
`
const StickyContainer = styled.div`
  width: 35%;
  // background-color: skyblue;
`
export default Order
