import React, { useState } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import { EmailInput, Input, PhoneNumInput, Title } from '../elements'

const OrderPersonContainer = () => {
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    emailSuffix: '',
    phoneNum: '',
  })
  // 형식에 맞지 않을 때 글씨를 빨간색으로 바꿔줄 state
  const [textColor, setTextColor] = useState({
    name: 'black',
    email: 'black',
    emailSuffix: 'black',
    phoneNum: 'black',
  })

  // form값을 불러오고 바뀐 값만 form에 새로 대체해줌
  const handleChange = (e) => {
    const changed = {
      ...orderForm,
      [e.target.name]: e.target.value,
    }
    setOrderForm(changed)
  }

  return (
    <Container>
      <Title>주문자</Title>

      <ContentContainer>
        <Input label="이름" />
        <EmailInput />
        <PhoneNumInput label="휴대전화" button={true} />
      </ContentContainer>
    </Container>
  )
}
const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`
const ContentContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

export default OrderPersonContainer