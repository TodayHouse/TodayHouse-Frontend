import React from 'react'
import styled from 'styled-components'

const SelectBoxElement = (props) => {
  return (
    <Container onClick={props.onClick}>
      <Idx>{props.idx}</Idx>
      <Img src={props.img} />
      <NamePrice>
        <Name>{props.name}</Name>
        <Price>{props.price.toLocaleString()}</Price>
      </NamePrice>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid lightgray;
  &:hover {
    cursor: pointer;
  }
`
const Idx = styled.span`
  color: gray;
`
const Img = styled.img`
  width: 50px;
  height: 50px;
  margin: 0px 10px;
  border-radius: 4px;
`
const NamePrice = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.span`
  font-size: 15px;
`
const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
`
export default SelectBoxElement
