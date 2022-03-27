import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

//집들이 페이지의 그리드로 뿌려져있는 게시글 하나하나의 미리보기
const StoryPost = (props) => {
  const navigate = useNavigate();
  const { src, title, profile, nickname, scrap, view, id } = props;
  return (
    <Container
      onClick={() => {
        navigate(`/story/post/${id}`);
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          borderRadius: 8,
        }}
      >
        <Image src={src} />
        <Bookmark
          onClick={() => {
            alert('스크랩했습니다');
          }}
          width="40px"
          height="40px"
          src={require('../../../img/bookmark.png')}
        />
      </div>
      <Title>{title}</Title>
      <User>
        <img
          alt="img"
          style={{ borderRadius: 20 }}
          width="20px"
          height="20px"
          src={profile}
        />
        <Nickname>{nickname}</Nickname>
      </User>
      <Footer>
        <span>스크랩 5,000 · 조회 5,000</span>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: pointer;
  position: relative;
  margin-bottom: 30px;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
`;
const Bookmark = styled.img`
  position: absolute;
  right: 20px;
  bottom: 20px;
  &:hover {
    opacity: 0.7;
  }
`;
const Title = styled.h1`
  margin-top: 16px;
  font-size: 20px;
  font-weight: bold;
  word-break: normal;
  text-align: center;
`;
const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 20px;
`;
const Nickname = styled.p`
  font-size: 15px;
  margin: 0px 8px;
`;
const Footer = styled.div`
  display: flex;
  font-size: 15px;
  color: #777777;
  margin-top: 8px;
`;
export default StoryPost;
