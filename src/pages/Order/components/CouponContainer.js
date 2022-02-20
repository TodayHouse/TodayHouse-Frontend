import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Title } from "../elements"
import { Button } from "../../../elements"
import $ from "jquery"

const CouponContainer = () => {
  const [toggleOpen, setToggleOpen] = useState(false)

  const handleToggle = () => {
    setToggleOpen(!toggleOpen)
  }

  useEffect(() => {
    if (toggleOpen) $("#couponToggle").show()
    else $("#couponToggle").hide()
  }, [toggleOpen])

  return (
    <Container>
      <Title>
        쿠폰
        <Text>사용 가능한 쿠폰이 없습니다</Text>
      </Title>
      <Toggle>
        <ToggleTextContainer onClick={handleToggle}>
          <ToggleText>쿠폰 코드가 있으신가요?</ToggleText>
          <ToggleArrow
            src={require(toggleOpen
              ? "../../../img/ExpandLessArrow.png"
              : "../../../img/ExpandMoreArrow.png")}
          />
        </ToggleTextContainer>
        <CouponInputContainer id="couponToggle">
          <CouponInput />
          <Button width="80px" margin="0px 10px">
            확인
          </Button>
        </CouponInputContainer>
      </Toggle>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`
const Text = styled.span`
  position: absolute;
  right: 0;
  color: gray;
  font-size: 18px;
  font-weight: normal;
`
const Toggle = styled.div`
  padding: 0px 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  border-radius: 4px;
`
const ToggleTextContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px 0px;
  width: 100%;
  color: #aaaaaa;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`
const ToggleText = styled.span``
const ToggleArrow = styled.img`
  width: 30px;
  height: 30px;
`
const CouponInputContainer = styled.div`
  display: flex;
  padding-bottom: 40px;
`
const CouponInput = styled.input`
  width: 300px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 18px;
`
export default CouponContainer
