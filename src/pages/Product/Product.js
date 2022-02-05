import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Main from '../Main/Main'
import {
  ProductSimpleView,
  ProductNavigation,
  UserStylingView,
  ProductInfo,
  ProductSidebar,
  Review,
  Ask,
  Delivery,
  Recommend,
} from '../Product/components'

const Product = () => {
  // 상품 상세정보 불러오는 api 호출할 때 productId 넣어서 보내면 해당 id에 맞는 정보를 서버에서 받아옴
  const productId = useParams().id

  return (
    <Container>
      <Main />
      <ProductSimpleView />
      <ProductNavigation />
      <Wrap>
        <ProductContents>
          <UserStylingView />
          <ProductInfo id="productInfo" />
          <Review id="review" />
          <Ask id="ask" />
          <Delivery id="delivery" />
          <Recommend id="recommend" />
        </ProductContents>
        <ProductSidebar />
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
const ProductContents = styled.div`
  width: 767px;
  display: flex;
  flex-direction: column;
`
export default Product
