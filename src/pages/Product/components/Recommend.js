import React from 'react'
import styled from 'styled-components'

const Recommend = (props) => {
  return (
    <Container id={props.id}>
      <Header>추천</Header>
      <Content>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
        <p>추천입니다</p>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Header = styled.span`
  font-size: 20px;
  font-weight: bold;
`
const Content = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
`
export default Recommend
