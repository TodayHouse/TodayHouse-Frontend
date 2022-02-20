import React from 'react'
import styled from 'styled-components'
import logo from '../../img/logo.jpg'
import { Link } from 'react-router-dom'
import {useDispatch} from'react-redux'
import { navChange } from '../../redux/reducer/navBar'

const Navbar = ({isLogin}) => {
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
        <NavBrand>
          <Link to="/">
            <img src={logo} alt="" width="150" height="50" />
          </Link>
        </NavBrand>

        <NavItem>
          <Link to="community" onMouseOver={() => changeNavSelect('community')}>
            <NavText>커뮤니티</NavText>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="store" onMouseOver={() => changeNavSelect('store')}>
            <NavText>스토어</NavText>
          </Link>
        </NavItem>
      </NavListFront>

      <NavListBack>
        <NavItem>
          <Form>
            <Input/>
            <Search>
              검색
            </Search>
          </Form>
        </NavItem>

        {isLogin? ( //로그인 여부에 따른 조건부 렌더링
          <NavItem>
            <Logout onClick={buttonLogout}>
              로그아웃
            </Logout>
          </NavItem>
        ) : (
          <>
            <span style={{ width: 300 }}></span>
            <NavItem>
              <NavItem>
                <Link to="/login">
                  <NavText>로그인</NavText>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/signup">
                  <NavText>회원가입</NavText>
                </Link>
              </NavItem>
            </NavItem>
          </>
        )}
      </NavListBack>
    </NavBar>
  )
}
export default Navbar
const NavBrand = styled.div`
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
`
const NavListFront = styled.div`
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`
const NavListBack = styled.div`
  display: flex;
  margin-left: 0;
  margin-bottom: 0;
  list-style: none;
`
const NavItem = styled.div`
  display: flex;
  text-align: -webkit-match-parent;
`
const NavText = styled.div`
  position: relative;
  display: inline-block;
  margin: 6px 10px 0;
  padding: 14px 6px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
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
`
const Search=styled.button`
  background-color: white;
  &:hover {
    background-color: lightgrey;
  }
  border: 1px solid lightgrey;
  border-radius: 4px;
  width: 60px;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left:10px;
`

const Input = styled.input`
  font-size: 15px;
  font-weight: 500;
  width: 200px;
  margin:10px;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-sizing: border-box;
`
const Form = styled.form`
  display: flex;
`

const Logout=styled.button`
  background-color: red;
  color:white;
  &:hover {
    background-color: coral;
  }
  border: 1px solid coral;
  border-radius: 4px;
  width: 100px;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left:10px;
`
