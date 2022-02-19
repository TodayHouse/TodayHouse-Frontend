import React from 'react'
import styled from 'styled-components'
import logo from '../../img/logo.jpg'
import { Link } from 'react-router-dom'
import {useDispatch} from'react-redux'

const MyNavbar = ({isLogin}) => {

  return (
    <NavBar id="navBar">
      <NavListFront>

        <NavItem>
          <Link to="/mypage/profile">
            <NavText>프로필</NavText>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/mypage/story">
            <NavText>나의 스토리</NavText>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/mypage/knowhow">
            <NavText>나의 노하우</NavText>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/mypage/setting">
            <NavText>설정</NavText>
          </Link>
        </NavItem>

      </NavListFront>

    </NavBar>
  )
}
export default MyNavbar

const NavListFront = styled.ul`
  display: flex;
  position : relative;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left :38%;
  font-weight : 700;
  font-color : black;
  line-height : 30px;
`

const NavItem = styled.li`
  display: flex;
  text-align: -webkit-match-parent;
`
const NavText = styled.div`
  position: relative;
  display: inline-block;
  margin: 6px 10px 0;
  padding: 10px 10px;
  font-size: 16px;
  line-height: 25px;
  font-weight: bold;
  color: #424242;
  cursor: pointer;
`
const NavBar = styled.nav`
  position: relative;
  width: 1620px;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid skyblue;
  margin: 0 auto;
  text-align : center;
`
