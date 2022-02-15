import React from "react"
import styled from "styled-components"

const Input = (props) => {
  const { width, fontSize, margin, placeholder, name, onChange } = props
  return (
    <InputBox
      {...props}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  )
}

Input.defaultProps = {
  width: "",
  fontSize: "18px",
  margin: "",
}

const InputBox = styled.input`
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  padding: 8px 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin: ${(props) => props.margin};
`
export default Input
