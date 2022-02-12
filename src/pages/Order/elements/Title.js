import React from 'react'
import styled from 'styled-components'

const Title = (props) => {
  const { children } = props
  return (
    <TitleContainer>
      <TitleText>{children}</TitleText>
    </TitleContainer>
  )
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-bottom: 10px;
  border-bottom: 1px solid #dddddd;
`
const TitleText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #555555;
`
export default Title
