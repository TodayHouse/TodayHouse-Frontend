import React from 'react'
import styled from 'styled-components'

const NavbarElement = (props) => {
  return (
    <Category
      id={props.id}
      onClick={props.onClick}
      selectedElem={props.selectedElem}
    >
      {props.text}
    </Category>
  )
}

const Category = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 50px;
  color: ${(props) =>
    props.id === props.selectedElem ? props.theme.mainColor : 'black'};
  border-bottom: 3px solid
    ${(props) =>
      props.id === props.selectedElem ? props.theme.mainColor : 'null'};
  &:hover {
    cursor: pointer;
  }
`
export default NavbarElement
