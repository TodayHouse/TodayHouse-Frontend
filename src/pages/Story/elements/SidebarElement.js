import React from 'react'
import styled from 'styled-components'

const SidebarElement = (props) => {
  return (
    <Element>
      <Icon onClick={props.onClick}>
        <img width="25px" height="25px" src={props.src} />
      </Icon>
      <Num>{props.num.toLocaleString()}</Num>
    </Element>
  )
}

const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #aaaaaa;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  box-shadow: 1px 1px 1px lightgray;
  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`
const Num = styled.span``
export default SidebarElement
