import React from 'react'
import styled from 'styled-components'

const UserStylingPhoto = (props) => {
  console.log(props)
  return (
    <Container>
      <Image src={props.src} />
      <UserInfo>
        <Profile>
          <ProfileImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150723_158%2Fdbsdlakqjqtk_1437657113111Pg1B1_JPEG%2Fblog_daum_net_20150723_221113.jpg&type=a340" />
          <Nickname>태평강냥</Nickname>
        </Profile>
        <Count>
          {props.count + 1}/{props.total}
        </Count>
      </UserInfo>
    </Container>
  )
}

const Container = styled.div`
  width: 500px;
  height: 500px;
`
const Image = styled.img`
  width: 500px;
  height: 500px;
  padding: 0px 5px;
  border-radius: 8px;
`
const UserInfo = styled.div`
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
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 5px;
`
const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`
const Nickname = styled.div`
  margin-left: 10px;
  font-size: 18px;
  color: white;
  font-weight: bold;
`
const Count = styled.span`
  font-size: 18px;
  color: white;
`
export default UserStylingPhoto
