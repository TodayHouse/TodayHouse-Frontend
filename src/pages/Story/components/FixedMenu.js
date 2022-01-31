import React from 'react'
import styled from 'styled-components'

//집들이 게시글 상세 페이지의 상품 모아보기, 위로 가기, 목차 버튼이 있는 컴포넌트
const FixedMenu = () => {
  return (
    <Container id="fixedMenu">
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <BlueButton>상품 모아보기</BlueButton>
      </div>
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <WhiteButton id="index">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/overview-pages-3--v1.png" />
        </WhiteButton>
        <WhiteButton
          id="scrollToTop"
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <img
            width="25px"
            height="25px"
            src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-up-arrow-arrows-dreamstale-lineal-dreamstale.png"
          />
        </WhiteButton>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 20%;
  height: 160px;
  right: 30px;
  bottom: 50px;
  padding: 12px;
`
const BlueButton = styled.button`
  border: none;
  border-radius: 50px;
  color: white;
  background-color: ${(props) => props.theme.mainColor};
  font-size: 14px;
  font-weight: bold;
  padding: 12px 24px;
  &:hover {
    background-color: ${(props) => props.theme.hoverMainColor};
  }
`
const WhiteButton = styled.button`
  border: 1px solid #eeeeee;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  background: white;
  &:hover {
    background-color: #eeeeee;
  }
`
export default FixedMenu
