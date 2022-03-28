import React from 'react';
import styled from 'styled-components';
//댓글 컴포넌트
const Comment = (props) => {
  return (
    <Container>
      <ProfileImg width="30px" height="30px" src={props.src} />
      <Detail>
        <NicknameContainer>
          <Nickname>{props.nickname}</Nickname>
          <CommentContent>{props.comment}</CommentContent>
        </NicknameContainer>
        <Footer>
          <span style={{ marginRight: 10, color: '#aaaaaa' }}>
            {props.time} 전
          </span>
          <FooterContent>좋아요</FooterContent>
          <FooterContent>답글 달기</FooterContent>
          <FooterContent>신고</FooterContent>
        </Footer>
      </Detail>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  align-items: center;
  padding: 10px 0px;
`;
const ProfileImg = styled.img`
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
`;
const Detail = styled.div`
  padding: 0px 10px;
`;
const NicknameContainer = styled.div`
  display: flex;
`;
const Nickname = styled.span`
  font-weight: bold;
`;
const CommentContent = styled.span`
  margin-left: 10px;
`;
const Footer = styled.div`
  display: flex;
`;
const FooterContent = styled.span`
  margin-right: 10px;
  color: #777777;
  &:hover {
    cursor: pointer;
  }
`;
export default Comment;
