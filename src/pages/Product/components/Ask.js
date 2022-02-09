import React from 'react'
import styled from 'styled-components'
import { AskDetail } from '.'
import Pagination from '../../../components/Pagination'

const mock = [1, 2, 3, 4, 5, 6]

const Ask = (props) => {
  return (
    <Container id={props.id}>
      <HeaderView>
        <Header>
          문의 <NumOfAsks>9,866</NumOfAsks>
        </Header>
        <WriteView>
          <Write>문의하기</Write>
        </WriteView>
      </HeaderView>
      {mock.map((data) => (
        <AskDetail />
      ))}
      <Pagination />
    </Container>
  )
}

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
`
const HeaderView = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Header = styled.span`
  font-size: 20px;
  font-weight: bold;
`
const WriteView = styled(Header)``
const NumOfAsks = styled.span`
  color: ${(props) => props.theme.mainColor};
`
const Write = styled(NumOfAsks)`
  &:hover {
    cursor: pointer;
  }
`

export default Ask
