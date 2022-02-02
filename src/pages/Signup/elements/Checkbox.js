import React from 'react'
import styled from 'styled-components'

const Checkbox = (props) => {
  console.log(props)
  return <Container isClicked={props.isClicked} />
}

const Container = styled.button`
  width: 20px;
  height: 20px;
  border: 1px solid
    ${(props) => (props.isClicked ? props.theme.mainColor : '#dddddd')};
  border-radius: 4px;
  background-color: ${(props) =>
    props.isClicked ? props.theme.mainColor : 'white'};
`
export default Checkbox
