import React from 'react'
import styled from 'styled-components'
import logo from '../../img/logo.jpg'
import { Link } from 'react-router-dom'
import {useDispatch} from'react-redux'
import { navChange } from '../../redux/reducer/mNavBar'

const MyNavbar = ({isLogin}) => {
  const buttonLogout = () => {
    console.log('로그아웃')
  }
  const dispatch= useDispatch();
  const changeNavSelect =(value)=>{
    dispatch(navChange(value))
  }

  return (
    <NavBar id="navBar">
      <NavListFront>

        <NavItem>
          <Link to="/mypage/photo" onMouseOver={() => changeNavSelect('profile')}>
            <NavText>프로필</NavText>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/shopping" onMouseOver={() => changeNavSelect('shopping')}>
            <NavText>나의 쇼핑</NavText>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/mypage/setting" onMouseOver={() => changeNavSelect('setting')}>
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
  font-size: 19px;
  line-height: 25px;
  font-weight: bold;
  color: #424242;
  cursor: pointer;
`
const NavBar = styled.nav`
  position: relative;
  width: 1256px;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  margin: 0 auto;
  text-align : center;
`
