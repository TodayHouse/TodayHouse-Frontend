import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import leftArrow from '../img/leftArrow.png';
import rightArrow from '../img/rightArrow.png';

const Carousel = (props) => {
  const { images, userInfo } = props;
  const totalSlide = images?.length - 1;
  const carouselRef = useRef();
  const [curSlide, setCurSlide] = useState(0);

  const carouselLeft = () => {
    if (curSlide === 0) setCurSlide(totalSlide);
    else setCurSlide(curSlide - 1);
  };

  const carouselRight = () => {
    if (curSlide >= totalSlide) setCurSlide(0);
    else setCurSlide(curSlide + 1);
  };

  //현재 slide가 변경될 때
  useEffect(() => {
    carouselRef.current.style.transition = 'all 0.5s ease-in-out';
    carouselRef.current.style.transform = `translateX(${-500 * curSlide}px)`;
  }, [curSlide]);

  return (
    <Wrap>
      <Container ref={carouselRef}>
        {images?.map((data, idx) => (
          <ImageContainer key={idx}>
            <Image src={data} />
            <UserInfo userInfo={userInfo}>
              <Profile>
                <ProfileImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150723_158%2Fdbsdlakqjqtk_1437657113111Pg1B1_JPEG%2Fblog_daum_net_20150723_221113.jpg&type=a340" />
                <Nickname>태평강냥</Nickname>
              </Profile>
              <Count>
                {idx + 1}/{totalSlide + 1}
              </Count>
            </UserInfo>
          </ImageContainer>
        ))}
      </Container>
      <CarouselLeftMoveBtn
        id="leftBtn"
        onClick={carouselLeft}
        curSlide={curSlide}
      >
        <CarouselMoveImg src={leftArrow} />
      </CarouselLeftMoveBtn>
      <CarouselRightMoveBtn
        id="rightBtn"
        onClick={carouselRight}
        curSlide={curSlide}
        totalSlide={totalSlide}
      >
        <CarouselMoveImg src={rightArrow} />
      </CarouselRightMoveBtn>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 20px;
  width: 700px;
  overflow: hidden;
  position: relative;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  margin-left: 100px;
`;
const CarouselLeftMoveBtn = styled.button`
  visibility: ${(props) => (props.curSlide === 0 ? 'hidden' : 'visible')};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  position: absolute;
  top: 225px;
  left: 25px;
`;
const CarouselRightMoveBtn = styled.button`
  visibility: ${(props) =>
    props.curSlide === props.totalSlide ? 'hidden' : 'visible'};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  position: absolute;
  top: 225px;
  right: 25px;
`;
const CarouselMoveImg = styled.img`
  width: 40px;
  height: 40px;
`;
const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
`;
const Image = styled.img`
  width: 500px;
  height: 500px;
  padding: 0px 5px;
  border-radius: 8px;
`;
const UserInfo = styled.div`
  visibility: ${(props) => (props.userInfo ? 'visible' : 'hidden')};
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 490px;
  height: 60px;
  margin: 0px 5px;
  padding: 0px 15px;
  border-radius: 0px 0px 8px 8px;
  background: rgba(0, 0, 0, 0.4);
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 5px;
`;
const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
const Nickname = styled.div`
  margin-left: 10px;
  font-size: 18px;
  color: white;
  font-weight: bold;
`;
const Count = styled.span`
  font-size: 18px;
  color: white;
`;
export default Carousel;
