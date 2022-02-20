import React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
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
} from "../Product/components"
import $ from "jquery"

const Product = () => {
  // 상품 상세정보 불러오는 api 호출할 때 productId 넣어서 보내면 해당 id에 맞는 정보를 서버에서 받아옴
  const productId = useParams().id

  window.addEventListener("scroll", () => {
    const offset = document
      .querySelector("#container")
      .getBoundingClientRect().top
    if (offset === 0) $("#scrollToTop").hide()
    else $("#scrollToTop").show()
  })

  return (
    <Container id="container">
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
      <WhiteButton
        id="scrollToTop"
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      >
        <img
          alt="top"
          width="25px"
          height="25px"
          src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-up-arrow-arrows-dreamstale-lineal-dreamstale.png"
        />
      </WhiteButton>
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
  width: 1150px;
  height: 100%;
  display: flex;
  justify-content: center;
`
const ProductContents = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
`
const WhiteButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 50px;
  border: 1px solid #eeeeee;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  background: white;
  &:hover {
    background-color: #eeeeee;
  }
`
export default Product
