import React from 'react';
import styled from 'styled-components';
import { Star } from '../../../components';

//프로필사진, 닉네임, 총 평점, 각 평점 4개, 상품옵션, 상품사진, 리뷰 내용, 도움된 사람 수 -> props로 받아야함
const ReviewDetail = () => {
  return (
    <Container>
      <ProfileContainer>
        <ProfileImg src="https://search.pstatic.net/sunny/?src=http%3A%2F%2Fflash24.co.kr%2Fg4%2Fdata%2Fmw.cheditor%2F2103%2FxwRixFeqUpE6cUOCL2psAM85.jpg&type=a340" />
        <NicknameStar>
          <Nickname>이준수</Nickname>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Star rating={4} size="20px" />
            <Date>2022.01.16</Date>
          </div>
        </NicknameStar>
      </ProfileContainer>
      <Rating>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: 3 }}>내구성</span>
            <Star rating={4} size="16px" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: 3 }}>디자인</span>
            <Star rating={4} size="16px" />
          </div>
        </div>
        <div style={{ marginLeft: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: 3 }}>가격</span>
            <Star rating={4} size="16px" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: 3 }}>배송</span>
            <Star rating={4} size="16px" />
          </div>
        </div>
      </Rating>
      <ReviewContentContainer>
        <Option>Q 퀸</Option>
        <ProductImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMzBfMTE4%2FMDAxNTg1NTQ5Mzc3NjE4.K1vxULmVndgOKUn2J0-Mign95AWVrzEKZs-yGTYlwFMg.sOHgdMOq8lVX_o0eSssK9VaodVAiRVopM3-nTTrl-O0g.JPEG.norano4353%2FKakaoTalk_20200324_174057960.jpg&type=a340" />
        <Content>
          사용하던 매트리스가 꺼져서 새로 구입을허던중 지인분이 사용하고 있어서
          집에 방문해서 보고 구입했어요~ 전에 쓰던 매트리스도 비싼가격에 좋은거
          쓰고 싶어 구매했는데 비싸다고 좋은건 아닌것 같더라구요...ㅠㅠ 배송도
          빨랐고 박스에 바퀴가 있어서 그나마 집까지 들이는데 괜찮았어요~ 그래도
          무게가 있어서 조금 무겁기는 했네요... 침대에 자리를 잡고 비닐을
          뜯어야지 구냥 비닐 뜯었다가는 큰 낭패봐요...압축이 풀리면서 뻥하고
          커져요~^^;; 고학년 초등아들 사용하고 있는데 적당히 단단하고
          푹신하네요~~~^^ 도봉되서 온 매트리스사용 설명서도 작은것 하나도
          신경쓴다는 생각이 들었어요~
        </Content>
      </ReviewContentContainer>
      <Footer>
        <RecommendBtn>도움이 돼요</RecommendBtn>
        <NumOfRecommend>
          <span style={{ fontWeight: 'bold' }}>5</span>명에게 도움이 되었습니다.
        </NumOfRecommend>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
  border-top: 1px solid #eeeeee;
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
const NicknameStar = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;
const Nickname = styled.span``;
const Date = styled.span`
  margin-left: 10px;
  color: gray;
`;
const Rating = styled.div`
  display: flex;
  margin-top: 10px;
`;
const ReviewContentContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
const Option = styled.span`
  color: gray;
  font-size: 16px;
`;
const ProductImg = styled.img`
  margin-top: 15px;
  width: 150px;
  height: 150px;
  border-radius: 4px;
`;
const Content = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
`;
const RecommendBtn = styled.button`
  all: unset;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.mainColor};
  padding: 5px 25px;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 4px;
`;
const NumOfRecommend = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;
export default ReviewDetail;
