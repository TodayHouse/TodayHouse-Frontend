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
          <Link to="/mypage/myorder">
            <NavText>나의 주문목록</NavText>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/mypage/setting">
            <NavText>나의 정보 조회/수정</NavText>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/mypage/scrap">
            <NavText>나의 스크랩 목록</NavText>
          </Link>
        </NavItem>
      </NavListFront>

    </NavBar>
  )
}
export default MyNavbar

const NavListFront = styled.ul`
  width :800px;
  display: flex;
  position : relative;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left :35%;
  font-weight : 700;
  line-height : 30px;
`

const NavItem = styled.li`
  display: flex;

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

  display: flex;
  background-color: #fff;
  border-bottom: 1px solid skyblue;
  margin: 0 auto;
  text-align : center;
`
