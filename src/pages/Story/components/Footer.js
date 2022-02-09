import React, { useState } from 'react'
import styled from 'styled-components'
import Comment from '../elements/Comment'
import Pagination from '../../../components/Pagination'

//집들이 게시글 상세 페이지의 가장 아래 부분에 있는 글쓴이 프로필 및 댓글창 컴포넌트
const mockComment = [
  {
    src:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTRfMjE0%2FMDAxNTk0NzMwNzI4Mzc3.UJfQB5Z2Fq16jWvVQ3yNnOpH2LVnFIOK5YezAGgFYwQg.wC4Q-p_bTYEkF2gEA1eZZtvbts30wm4T82CVybV9toEg.JPEG.dbsgns2011%2F%25C0%25E8%25BD%25BA.jpg&type=sc960_832',
    nickname: '진주키얀',
    comment: '너무 이뻐요',
    time: '31분',
  },
  {
    src:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTRfMjE0%2FMDAxNTk0NzMwNzI4Mzc3.UJfQB5Z2Fq16jWvVQ3yNnOpH2LVnFIOK5YezAGgFYwQg.wC4Q-p_bTYEkF2gEA1eZZtvbts30wm4T82CVybV9toEg.JPEG.dbsgns2011%2F%25C0%25E8%25BD%25BA.jpg&type=sc960_832',
    nickname: '준둥',
    comment: '잘 꾸미셨네요',
    time: '1시간',
  },
  {
    src:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTRfMjE0%2FMDAxNTk0NzMwNzI4Mzc3.UJfQB5Z2Fq16jWvVQ3yNnOpH2LVnFIOK5YezAGgFYwQg.wC4Q-p_bTYEkF2gEA1eZZtvbts30wm4T82CVybV9toEg.JPEG.dbsgns2011%2F%25C0%25E8%25BD%25BA.jpg&type=sc960_832',
    nickname: 'asdf1234',
    comment: '소파 가격 알려주세요',
    time: '2시간',
  },
  {
    src:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTRfMjE0%2FMDAxNTk0NzMwNzI4Mzc3.UJfQB5Z2Fq16jWvVQ3yNnOpH2LVnFIOK5YezAGgFYwQg.wC4Q-p_bTYEkF2gEA1eZZtvbts30wm4T82CVybV9toEg.JPEG.dbsgns2011%2F%25C0%25E8%25BD%25BA.jpg&type=sc960_832',
    nickname: '아로마',
    comment: '집이 너무 예뻐요',
    time: '2시간',
  },
  {
    src:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTRfMjE0%2FMDAxNTk0NzMwNzI4Mzc3.UJfQB5Z2Fq16jWvVQ3yNnOpH2LVnFIOK5YezAGgFYwQg.wC4Q-p_bTYEkF2gEA1eZZtvbts30wm4T82CVybV9toEg.JPEG.dbsgns2011%2F%25C0%25E8%25BD%25BA.jpg&type=sc960_832',
    nickname: '곱막대',
    comment: '맘에 들어요',
    time: '3시간',
  },
  {
    src:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTRfMjE0%2FMDAxNTk0NzMwNzI4Mzc3.UJfQB5Z2Fq16jWvVQ3yNnOpH2LVnFIOK5YezAGgFYwQg.wC4Q-p_bTYEkF2gEA1eZZtvbts30wm4T82CVybV9toEg.JPEG.dbsgns2011%2F%25C0%25E8%25BD%25BA.jpg&type=sc960_832',
    nickname: '집갖고싶다',
    comment: '너무 좋아요',
    time: '3시간',
  },
]

const Footer = () => {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(text)
    setText('')
  }
  return (
    <Container>
      <LikeContainer>
        <LikeDetail>좋아요 54</LikeDetail>
        <LikeDetail>스크랩 54</LikeDetail>
        <LikeDetail>댓글 54</LikeDetail>
        <LikeDetail>조회 54</LikeDetail>
      </LikeContainer>
      <Profile>
        <User>
          <ProfileImg
            width="80px"
            height="80px"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MTFfMjEy%2FMDAxNjI2MDA1ODgzODM5.HmYZGldiMudAiUFuU9MWO-BgE7zY7gaRbeSHVQXHkMEg.EKgu58sMQsOHAVTT5U-J-wb0ZtzkYhLU6v7a1Oz4ZlEg.JPEG.yhn2297%2FCB62AC49-461A-4258-8E28-210570937650.jpeg&type=sc960_832"
          />
          <Name>준둥</Name>
        </User>
        <FollowBtn>팔로우</FollowBtn>
      </Profile>
      <CommentContainer>
        <span style={{ fontSize: 20, fontWeight: 'bold' }}>댓글 10</span>
        <UploadComment>
          <CommentProfile
            width="30px"
            height="30px"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MTFfMjEy%2FMDAxNjI2MDA1ODgzODM5.HmYZGldiMudAiUFuU9MWO-BgE7zY7gaRbeSHVQXHkMEg.EKgu58sMQsOHAVTT5U-J-wb0ZtzkYhLU6v7a1Oz4ZlEg.JPEG.yhn2297%2FCB62AC49-461A-4258-8E28-210570937650.jpeg&type=sc960_832"
          />
          <form
            style={{ width: '100%', padding: '20px 0px' }}
            onSubmit={onSubmit}
          >
            <CommentInput
              type="text"
              placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
              value={text}
              onChange={onChange}
            />
          </form>
        </UploadComment>
        {mockComment.map((e, idx) => (
          <Comment
            key={idx}
            src={e.src}
            nickname={e.nickname}
            comment={e.comment}
            time={e.time}
          />
        ))}
        <Pagination />
      </CommentContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`
const LikeContainer = styled.div`
  display: flex;
`
const LikeDetail = styled.span`
  margin-right: 16px;
  color: #999999;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0px;
  border-bottom: 1px solid #dddddd;
`
const User = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`
const ProfileImg = styled.img`
  border-radius: 50px;
`
const Name = styled.span`
  font-weight: bold;
  font-size: 24px;
  margin-left: 20px;
`
const FollowBtn = styled.button`
  border: none;
  background-color: white;
  font-weight: bold;
  font-size: 24px;
  margin-left: 20px;
  color: ${(props) => props.theme.mainColor};
`
const CommentContainer = styled.div`
  padding: 20px 0px;
`
const UploadComment = styled.div`
  display: flex;
  align-items: center;
`
const CommentProfile = styled.img`
  border-radius: 15px;
`
const CommentInput = styled.input`
  margin-left: 10px;
  width: 100%;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 10px;
  ::placeholder {
    color: #cccccc;
  }
`
export default Footer
