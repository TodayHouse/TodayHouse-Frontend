import React from "react"
import styled from "styled-components"
import { Title } from "../elements"
import { OrderProductCard } from "."

const OrderProduct = () => {
  return (
    <Container>
      <Title>주문상품</Title>
      <ContentContainer>
        <ProductContainer>
          <ProductTopContainer>
            <CompanyContainer>
              <CompanyName>주식회사리샘</CompanyName>
              <DeliveryFee>
                배송비{" "}
                <span style={{ color: "black", fontWeight: "normal" }}>
                  착불 120,000원
                </span>
              </DeliveryFee>
            </CompanyContainer>
            <DeliveryInfo>업체직접배달</DeliveryInfo>
          </ProductTopContainer>
          <OrderProductCard />
          <OrderProductCard />
        </ProductContainer>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`

const ContentContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dddddd;
  border-radius: 4px;
`
const ProductTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 15px;
`
const CompanyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 15px;
`
const CompanyName = styled.span`
  font-size: 16px;
  font-weight: bold;
`
const DeliveryFee = styled.span`
  color: gray;
  font-size: 16px;
  font-weight: bold;
`
const DeliveryInfo = styled.span`
  padding-top: 15px;
  font-size: 16px;
  font-weight: bold;
  color: gray;
`
export default OrderProduct
