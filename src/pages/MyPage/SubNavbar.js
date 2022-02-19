import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const SubNavbar = () => {
  let now = null
  const navSelect = useSelector((state)=>state.mpagebar.navSelect)
  console.log(navSelect);

  if (navSelect === 'profile') {
    //0번탭
    now = (
      <NavBar id="subNavBar">
        <NavList>
          <NavItem>
            <Link to="/story">
              <NavText>모두 보기</NavText>
            </Link>
          </NavItem>
          <Link to="/advices">
            <NavText>사진</NavText>
          </Link>
          <Link to="/event">
            <NavText>노하우</NavText>
          </Link>
        </NavList>
      </NavBar>
    )
  } else if (navSelect === 'shopping'){
    //1번 탭
    now = (
      <NavBar id="subNavBar">
        <NavList>
          <NavItem>
            <NavText>주문 내역 조회</NavText>
          </NavItem>
        </NavList>
      </NavBar>
    )
  } else if (navSelect === 'setting'){
    //1번 탭
    now = (
      <NavBar id="subNavBar">
        <NavList>
          <NavItem>
            <Link to = "/mypage/setting">
             <NavText>회원 정보 수정</NavText>
            </Link>           
          </NavItem>
        </NavList>
      </NavBar>
    )
  }

  return <div>{now}</div>
}


export default SubNavbar
const NavItem = styled.li`
  display: flex;
  text-align : center;
`
const NavText = styled.div`
  position: relative;
  margin: 0px 10px 0;
  padding: 6px 6px;
  font-size: 12px;
  line-height: 30px;
  font-weight: 700;
  color: #424242;
  cursor: pointer;
`
const NavList = styled.ul`
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left : 40%;
`
const NavBar = styled.nav`
height : 40px;
width : 1256px;
display: flex;
background-color: #fff;
border-bottom: 1px solid #ededed;
margin:0;
}
`
