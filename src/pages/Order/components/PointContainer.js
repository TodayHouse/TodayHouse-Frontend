import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Title } from '../elements'
import { Button } from '../../../elements'

const PointContainer = () => {
  return (
    <Container>
      <Title>
        포인트
        <Text>사용 가능한 포인트가 없습니다</Text>
      </Title>
      <ContentContainer>
        <MyPointContainer id="toggle">
          <MyPoint placeholder="0" />
          <PointButton width="80px" margin="0px 10px">
            전액사용
          </PointButton>
        </MyPointContainer>
        <span style={{ fontSize: 18 }}>
          사용 가능 포인트 <UsablePoint>0P</UsablePoint>
        </span>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`
const Text = styled.span`
  position: absolute;
  right: 0;
  color: gray;
  font-size: 18px;
  font-weight: normal;
`
const ContentContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`
const MyPointContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
`
const MyPoint = styled.input`
  width: 250px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 18px;
`
const PointButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  width: 100px;
  padding: 8px;
  margin: 0px 10px;
  background-color: white;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.mainColor};
  border-radius: 4px;
  color: ${(props) => props.theme.mainColor};
  &:hover {
    background-color: #e6f4ff;
  }
`
const UsablePoint = styled.span`
  color: ${(props) => props.theme.mainColor};
  font-weight: bold;
`
export default PointContainer
