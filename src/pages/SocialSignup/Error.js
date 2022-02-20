import React from "react"
import styled from "styled-components"
import { Button } from "../../elements"
import { Link } from "react-router-dom"

const Error = () => {
  const urlParams = new URL(window.location.href).searchParams
  const type =
    urlParams.get("provider") === "LOCAL"
      ? "일반 회원가입"
      : urlParams.get("provider") === "KAKAO"
      ? "카카오톡 간편가입"
      : "네이버 간편가입"

  const socialUrl =
    urlParams.get("provider") === "LOCAL"
      ? "/login"
      : urlParams.get("provider") === "KAKAO"
      ? "http://localhost:8080/oauth2/authorize/kakao"
      : "http://localhost:8080/oauth2/authorize/naver"

  return (
    <Container>
      <Text>'{type}'으로</Text>
      <Text>이미 가입한 계정이 있습니다.</Text>
      <Email>{urlParams.get("email")}</Email>
      <Btns>
        <Link to="/signup">
          <WhiteBtn margin="0px 5px">다른 방식으로 가입</WhiteBtn>
        </Link>
        <a href={socialUrl}>
          <BlueBtn margin="0px 5px">기존 계정 로그인</BlueBtn>
        </a>
      </Btns>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  //background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Text = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`
const Email = styled.span`
  margin-top: 20px;
  font-size: 18px;
`
const Btns = styled.div`
  margin-top: 30px;
  display: flex;
`
const BlueBtn = styled(Button)`
  width: 180px;
`
const WhiteBtn = styled(BlueBtn)`
  background-color: white;
  color: black;
  border: 1px solid #cccccc;
  font-weight: normal;
  &:hover {
    background-color: #eeeeee;
  }
`
export default Error
