import React from 'react'
import styled from 'styled-components'

const deliveryMock = [
  { title: '배송', element: '화물택배상품' },
  { title: '배송비', element: '무료배송' },
  { title: '도서산간 추가 배송비', element: '50,000원' },
  { title: '배송불가 지역', element: '배송불가 지역이 없습니다.' },
  { title: '비례 배송비', element: '주문 상품 개수에 비례하여 배송비 부과' },
]

const exchangeMock = [
  {
    title: '반품배송비',
    element: '80,000원 (최초 배송비가 무료인 경우 160,000원 부과)',
  },
  {
    title: '교환배송비',
    element: '80,000원',
  },
  {
    title: '보내실 곳',
    element: '(12782) 경기 광주시 고불로279번길 9-6 (태전동) 퀵슬립',
  },
]

const sellerMock = [
  { title: '상호', element: '준수 컴퍼니' },
  { title: '대표자', element: '이준수' },
  {
    title: '사업장소재지',
    element: '서울 강남구 테헤란로8길 42 퍼스트역삼 3층',
  },
  { title: '고객센터 전화번호', element: '02-1577-7247' },
  { title: 'E-mail', element: 'cs001@corporhez.us' },
  { title: '사업자 등록번호', element: '233-81-04610' },
]

const Delivery = (props) => {
  return (
    <Container id={props.id}>
      <DeliveryContainer>
        <Header>배송</Header>
        <Content>
          {deliveryMock.map((data) => (
            <ElementContainer>
              <Title>{data.title}</Title>
              <Element>{data.element}</Element>
            </ElementContainer>
          ))}
        </Content>
      </DeliveryContainer>
      <ExchangeContainer>
        <Header>교환/환불</Header>
        <Content>
          {exchangeMock.map((data) => (
            <ElementContainer>
              <Title>{data.title}</Title>
              <Element>{data.element}</Element>
            </ElementContainer>
          ))}
        </Content>
      </ExchangeContainer>
      <SellerContainer>
        <Header>판매자 정보</Header>
        <Content>
          {sellerMock.map((data) => (
            <ElementContainer>
              <Title>{data.title}</Title>
              <Element>{data.element}</Element>
            </ElementContainer>
          ))}
        </Content>
      </SellerContainer>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Header = styled.span`
  font-size: 20px;
  font-weight: bold;
`
const DeliveryContainer = styled.div`
  width: 100%;
`
const Content = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
`
const ElementContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  padding: 15px 0px;
`
const Title = styled.span`
  color: gray;
`
const Element = styled(Title)`
  position: absolute;
  left: 400px;
  color: black;
`
const ExchangeContainer = styled(DeliveryContainer)`
  margin-top: 100px;
`
const SellerContainer = styled(ExchangeContainer)``
export default Delivery
