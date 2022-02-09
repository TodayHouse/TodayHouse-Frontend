import React from 'react'
import styled from 'styled-components'

const ProductInfo = (props) => {
  return (
    <Container id={props.id}>
      <Header>상품정보</Header>
      <Content>상품정보입니다.</Content>
      <Content>상품정보입니다.</Content>
      <Content>상품정보입니다.</Content>
      <Content>상품정보입니다.</Content>
      <Content>상품정보입니다.</Content>
      <Content>상품정보입니다.</Content>
      <Content>상품정보입니다.</Content>
      <Content>상품정보입니다.</Content>
      <Content>상품정보입니다.</Content>
      <Content>상품정보입니다.</Content>
      <Content>상품정보입니다.</Content>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 1500px;
  display: flex;
  flex-direction: column;
`
const Header = styled.span`
  font-size: 20px;
  font-weight: bold;
`
const Content = styled.span`
  font-size: 30px;
`
export default ProductInfo
