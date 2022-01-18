import React from 'react'
import styled from 'styled-components'
import Element from '../elements/SidebarElement'

const Sidebar = () => {
  return (
    <Wrap>
      <SidebarWrap>
        <SidebarContainer>
          <LikeAndScrap>
            <Element
              src="https://img.icons8.com/ios/50/000000/like--v1.png"
              num={1085}
              onClick={() => {
                alert('dd')
              }}
            />
            <Element
              src="https://img.icons8.com/pastel-glyph/64/000000/bookmark-ribbon.png"
              num={3844}
            />
          </LikeAndScrap>
          <CommentAndShare>
            <Element
              src="https://img.icons8.com/ios/50/000000/topic.png"
              num={226}
            />
            <Element
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
