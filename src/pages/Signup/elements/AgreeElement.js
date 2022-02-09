import React, { useState } from 'react'
import styled from 'styled-components'
import { Checkbox } from '.'

const AgreeElement = (props) => {
  return (
    <Container onClick={props.onClick}>
      <Checkbox isClicked={props.isClicked} />
      <Text>{props.text}</Text>
    </Container>
  )
}

const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  padding: 12px 20px;
`
const Text = styled.span`
  font-size: 15px;
  margin-left: 8px;
`
export default AgreeElement
