import React, { Children } from 'react'
import styled from 'styled-components'

const SelectedCategoryElement = (props) => {
  const { children, onClick, id } = props
  return (
    <Element id={id} onClick={onClick}>
      {children}
      <img
        style={{ marginLeft: 8 }}
        width="15px"
        height="15px"
        src={require('../../../img/roundX.png')}
      />
    </Element>
  )
}

const Element = styled.button`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 8px;
  margin: 0px 2px;
  color: white;
  border-radius: 24px;
  border: none;
  background-color: ${(props) => props.theme.mainColor};
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.hoverMainColor};
  }
`
export default SelectedCategoryElement
