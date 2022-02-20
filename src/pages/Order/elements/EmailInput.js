import React, { useEffect } from "react"
import styled from "styled-components"
import $ from "jquery"

const EmailInput = (props) => {
  const { namePrefix, nameSuffix, onChange } = props
  const backToSelectBar = () => {
    // 이메일 주소 직접 입력 창에서 x 버튼 눌렀을 때 수행
    $(function () {
      $("#direct").hide()
      $("#selectBar").show()
      $("#selectBar").val("selected")
      $("#directBox").val("")
    })
  }

  useEffect(() => {
    // selectBar에서 직접입력을 선택했을 때, selectBar 가리고 이메일 주소 직접 입력 창 띄움
    $(function () {
      $("#direct").hide()
      $("#selectBar").on("change", function () {
        if ($("#selectBar").val() === "direct") {
          $("#direct").show()
          $("#selectBar").hide()
        } else {
          $("#direct").hide()
        }
      })
    })
  }, [])

  return (
    <Container>
      <LabelContainer>
        <Label>이메일</Label>
      </LabelContainer>
      <Input name={namePrefix} placeholder="이메일" onChange={onChange} />
      <p
        style={{
          fontWeight: "bold",
          margin: "0px 2px",
          fontSize: "20px",
          color: "#cccccc",
        }}
      >
        @
      </p>
      <SelectBar
        id="selectBar"
        name={nameSuffix}
        onChange={onChange}
        defaultValue="selected"
      >
        <option value="selected">선택해주세요</option>
        <option value="naver.com">naver.com</option>
        <option value="hanmail.net">hanmail.net</option>
        <option value="daum.net">daum.net</option>
        <option value="gmail.com">gmail.com</option>
        <option value="nate.com">nate.com</option>
        <option value="hotmail.com">hotmail.com</option>
        <option value="outlook.com">outlook.com</option>
        <option value="icloud.com">icloud.com</option>
        <option value="direct">직접입력</option>
      </SelectBar>
      <DirectBoxContainer id="direct">
        <Input
          id="directBox"
          name={nameSuffix}
          placeholder="입력해주세요"
          onChange={onChange}
        />
        <button
          style={{
            backgroundColor: "white",
            border: "none",
          }}
          id="backToSelectBar"
          onClick={backToSelectBar}
        >
          X
        </button>
      </DirectBoxContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`
const LabelContainer = styled.div`
  width: 100px;
`
const Label = styled.span`
  font-size: 16px;
  color: gray;
`
const SelectBar = styled.select`
  width: 300px;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-sizing: border-box;

  font-size: 15px;
  font-weight: 500;
`
const DirectBoxContainer = styled.div`
  display: flex;
`
const Input = styled.input`
  width: 300px;
  font-size: 15px;
  font-weight: 500;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 10px 0px;
`

export default EmailInput
