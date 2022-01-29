import React from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import Main from '../../Main/Main'
import { Sidebar, FixedMenu, Footer } from '../components/index'

const sample = [
  { category: '공간', data: '아파트' },
  { category: '평수', data: '33평' },
  { category: '작업', data: '전문가' },
  { category: '분야', data: '리모델링' },
  { category: '가족형태', data: '신혼부부' },
  { category: '지역', data: '대구광역시 달성군' },
  { category: '기간', data: '1개월' },
  { category: '예산', data: '4,300만원' },
  {
    category: '세부공사',
    data: '주방리모델링, 조명시공, 가벽&파티션',
  },
]

const StoryPostDetail = () => {
  // 스크롤 시 최상단으로부터의 offset을 계산하여 0이 아닐 때 FixedMenu가 보이도록 구현
  window.addEventListener('scroll', () => {
    const offset = document.querySelector('#container').getBoundingClientRect()
      .top
    if (offset === 0) $('#fixedMenu').hide()
    else $('#fixedMenu').show()
  })

  return (
    <Container id="container">
      <Main />
      <MainImage
        width="100%"
        height="500px"
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjhfMTEx%2FMDAxNjA2NTQ0MjUwMTUx.uIBm1wL-ju7ADAvnTc5dwCM1ZuAUF2M9DD5fnHhc9mYg.sErQnf3Qjk3pEWPEgINwAYu_ricFFBLIyyIqpYaYADsg.JPEG.wind380%2F%25BF%25A4%25BD%25C3%25C6%25BC%25BB%25F3%25B0%25A1%25B3%25BB%25BA%25CE.jpg&type=sc960_832"
      />
      <Wrap>
        <WhiteSpace />
        <ContentContainer>
          <Post>
            <p style={{ color: '#777777', fontSize: 18 }}>온라인 집들이</p>
            <Title>계획서만 50장! 내 머릿 속 인테리어, 그대로 실현하기</Title>
            <ProfileContainer>
              <Profile>
                <ProfileImg
                  width="60px"
                  height="60px"
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjhfMTEx%2FMDAxNjA2NTQ0MjUwMTUx.uIBm1wL-ju7ADAvnTc5dwCM1ZuAUF2M9DD5fnHhc9mYg.sErQnf3Qjk3pEWPEgINwAYu_ricFFBLIyyIqpYaYADsg.JPEG.wind380%2F%25BF%25A4%25BD%25C3%25C6%25BC%25BB%25F3%25B0%25A1%25B3%25BB%25BA%25CE.jpg&type=sc960_832"
                />
                <Nickname>
                  <b>to-mohome</b>
                  <h6 style={{ color: '#777777' }}>2021년 10월 06일</h6>
                </Nickname>
              </Profile>
              <FollowButton>+ 팔로우</FollowButton>
            </ProfileContainer>
            <div>
              <SummaryContainer>
                <Simple>
                  <SimpleInfo>
                    <img
                      width="30px"
                      height="30px"
                      src="https://img.icons8.com/ios/50/000000/apartment.png"
                    />
                    <span style={{ marginLeft: 10 }}>원룸&오피스텔</span>
                  </SimpleInfo>
                  <SimpleInfo>
                    <img
                      width="30px"
                      height="30px"
                      src="https://img.icons8.com/ios-glyphs/30/000000/structural.png"
                    />
                    <span style={{ marginLeft: 10 }}>33평</span>
                  </SimpleInfo>
                  <SimpleInfo>
                    <img
                      width="30px"
                      height="30px"
                      src="https://img.icons8.com/ios/50/000000/maintenance.png"
                    />
                    <span style={{ marginLeft: 10 }}>리모델링</span>
                  </SimpleInfo>
                  <SimpleInfo style={{ borderRight: 'none' }}>
                    <img
                      width="30px"
                      height="30px"
                      src="https://img.icons8.com/ios/50/000000/couple-man-woman.png"
                    />
                    <span style={{ marginLeft: 10 }}>신혼부부</span>
                  </SimpleInfo>
                </Simple>
                <Detail>
                  {sample.map((e) => {
                    return (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: 14,
                          padding: '0px 4px',
                        }}
                      >
                        <dt style={{ color: '#777777', marginRight: 4 }}>
                          {e.category}
                        </dt>
                        <dd>{e.data}</dd>
                      </div>
                    )
                  })}
                </Detail>
              </SummaryContainer>
              <div
                style={{
                  marginTop: 50,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <p>
                  안녕하세요. 오늘의 집에 첫 집들이를 소개하게 된 "투모"입니다.
                  얼마 전 새로 이사 온 현재 집에 무한 애정을 갖고 매일 이리저리
                  들고 옮기는 재미에 빠져있습니다.
                </p>
              </div>
              <Footer />
            </div>
          </Post>
        </ContentContainer>
        <Sidebar />
      </Wrap>
      <FixedMenu />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  align-items: center;
`
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  //position: relative;
`
const MainImage = styled.img``
const Post = styled.div`
  width: 100%;
  margin-top: 50px;
`
const Title = styled.h1`
  font-weight: bold;
`
const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`
const Profile = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`
const ProfileImg = styled.img`
  border-radius: 60px;
`
const Nickname = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`
const FollowButton = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 20px;
  background-color: #35c4ef;
  border: none;
  border-radius: 4px;
  color: white;
  &:hover {
    background-color: #74a9d4;
    cursor: pointer;
  }
`
const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  height: 200px;
  background-color: #eeeeee;
  border-radius: 4px;
`
const Simple = styled.div`
  display: flex;
  width: 95%;
  height: 50%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccccc;
`
const Detail = styled.dl`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  height: 50%;
  align-items: center;
`
const SimpleInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  border-right: 1px solid #cccccc;
  font-size: 14px;
`
const ContentContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
`
const WhiteSpace = styled.div`
  width: 25%;
`
export default StoryPostDetail
