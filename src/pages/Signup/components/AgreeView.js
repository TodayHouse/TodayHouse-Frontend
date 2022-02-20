import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { AgreeElement, Checkbox } from "../elements"
import { useDispatch } from "react-redux"
import { changeAgree } from "../../../redux/reducer/signup"

const texts = [
  "만 14세 이상입니다.",
  "이용약관",
  "개인정보수집 및 이용동의",
  "이벤트, 프로모션 알림 메일 및 SMS 수신 (선택)",
]
const AgreeView = () => {
  const dispatch = useDispatch()
  const [agree, setAgree] = useState([false, false, false, false])
  const [allAgree, setAllAgree] = useState(false)

  const onClick = (idx) => {
    //누른 항목의 bool값 변경
    let arr = []
    for (let i = 0; i < 4; i++) {
      if (idx === i) arr.push(!agree[i])
      else arr.push(agree[i])
    }
    setAgree(arr)
  }

  const onAllClick = () => {
    //전체 동의 logic
    let cnt = 0
    for (let i = 0; i < 4; i++) {
      if (agree[i]) cnt += 1
    }
    if (cnt === 4) {
      setAgree([false, false, false, false])
      setAllAgree(false)
    } else {
      setAgree([true, true, true, true])
      setAllAgree(true)
    }
  }

  useEffect(() => {
    dispatch(changeAgree(agree))

    let cnt = 0
    for (let i = 0; i < 4; i++) {
      if (agree[i]) cnt += 1
    }

    if (cnt === 4) setAllAgree(true)
    else setAllAgree(false)
  }, [agree])

  useEffect(() => {
    setAgree([false, false, false, false])
  }, [])

  return (
    <Wrap>
      <Label>약관동의</Label>
      <Container>
        <AllAgree onClick={onAllClick}>
          <Checkbox isClicked={allAgree} />
          <Text>전체동의</Text>
        </AllAgree>
        {texts.map((data, idx) => (
          <AgreeElement
            key={idx}
            text={data}
            onClick={() => {
              onClick(idx)
            }}
            isClicked={agree[idx]}
          />
        ))}
      </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #cccccc;
`
const AllAgree = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eeeeee;
`
const Text = styled.span`
  font-weight: bold;
  font-size: 15px;
  margin-left: 8px;
`
const Label = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0px;
`
export default AgreeView
