import React from "react"
import styled from "styled-components"

const Button = (props) => {
  const { children, onClick } = props
  return (
    <Btn {...props} onClick={onClick}>
      {children}
    </Btn>
  )
}

const Btn = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme.mainColor};
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.mainColor};
  border-radius: 4px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 8px;
  margin: ${(props) => props.margin};
  &:hover {
    background-color: ${(props) => props.theme.hoverMainColor};
  }
`
export default Button
