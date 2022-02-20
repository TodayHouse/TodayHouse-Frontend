import React from "react"
import styled from "styled-components"
import Element from "../elements/SidebarElement"

//집들이 게시글 상세 페이지의 좋아요, 스크랩, 댓글, 공유 버튼이 있는 사이드바 컴포넌트
const Sidebar = () => {
  return (
    <Wrap>
      <SidebarWrap>
        <SidebarContainer>
          <LikeAndScrap>
            <Element
              alt="like"
              src="https://img.icons8.com/ios/50/000000/like--v1.png"
              num={1085}
              onClick={() => {
                alert("dd")
              }}
            />
            <Element
              alt="bookmark"
              src="https://img.icons8.com/pastel-glyph/64/000000/bookmark-ribbon.png"
              num={3844}
            />
          </LikeAndScrap>
          <CommentAndShare>
            <Element
              alt="topic"
              src="https://img.icons8.com/ios/50/000000/topic.png"
              num={226}
            />
            <Element
              alt="share"
              src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-share-interface-dreamstale-lineal-dreamstale.png"
              num={744}
            />
          </CommentAndShare>
        </SidebarContainer>
      </SidebarWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
  height: 500px;
  position: sticky;
  top: 100px;
`
const SidebarWrap = styled.div`
  display: flex;
  justify-content: center;
`
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const LikeAndScrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 50%;
  border-bottom: 1px solid #dddddd;
`
const CommentAndShare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 50%;
`

export default Sidebar
