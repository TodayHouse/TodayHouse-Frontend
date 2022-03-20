import React from 'react';
import styled from 'styled-components';

const AskDetail = () => {
  return (
    <Container>
      <State>구매 | 배송 | 미답변</State>
      <Info>네건** | 2022년 02월 05일 14시 55분</Info>
      <Question>
        <Alphabet>Q</Alphabet>안녕 문의드립니다.
      </Question>
      <Answer>
        <Alphabet>A</Alphabet>답변
      </Answer>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
`;
const State = styled.span``;
const Info = styled.span`
  color: #cccccc;
`;
const Question = styled.span`
  margin-top: 10px;
  font-size: 18px;
`;
const Answer = styled(Question)``;
const Alphabet = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.mainColor};
  margin-right: 10px;
`;
export default AskDetail;
