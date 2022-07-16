import React,{useEffect, useState} from "react"
import styled from "styled-components"
import logo from "../../img/logo.jpg"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { navChange } from "../../redux/reducer/navBar"
import $ from "jquery"
import { Cookies, useCookies } from "react-cookie"


const Navbar = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["editorType"]);
 
  const updateCookie = (props) => {
    removeCookie("editorType");
    setCookie("editorType", props, {path : "/"});
    console.log(props);
  }
  const buttonLogout = () => {
    if(window.confirm("로그아웃 하시겠어요?")){
      removeCookie("login_id");
      setCookie(false);
      window.location.reload();
    }
  }
  const dispatch = useDispatch()
  const changeNavSelect = (value) => {
    dispatch(navChange(value))
  }

  const dropDownOver = (id) => {
    $(`#${id}`).css("display","flex")

  }
  const dropDownOut = (id) => {
    $(`#${id}`).css("display","none")

  }
  const writingDropDownOver = (id) => {
    $(`#${id}`).css("display","flex")

  }
  const writingDropDownOut = (id) => {
    $(`#${id}`).css("display","none")

  }
  const cookies = new Cookies()
  const getCookie=(name)=>{
    return cookies.get(name)

  }
  const [isLogin, setLogin] = useState(getCookie("login_id") ? true: false);
  
 

  return (
    <NavBar id="navBar" >
      <NavbarContent>
      <NavListFront>
        <NavBrand>
          <Link to="/">
            <img src={logo} alt="" width="150" height="50" />
          </Link>
        </NavBrand>

        <NavItem>
          <Link to="community" onMouseOver={() => changeNavSelect("community")}>
            <NavText>커뮤니티</NavText>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="store" onMouseOver={() => changeNavSelect("store")}>
            <NavText>스토어</NavText>
          </Link>
        </NavItem>
      </NavListFront>

      <NavListBack>
        <NavItem>
          <Form>
            <Input />
            <Search>검색</Search>
          </Form>
        </NavItem>

        {isLogin ? ( //로그인 여부에 따른 조건부 렌더링
          <NavItem>
            <Menu onClick={()=>dropDownOver("menuDropDown")} onMouseLeave={()=>dropDownOut("menuDropDown")}>
              <MenuIcon 
                src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/7r5X/image/9djEiPBPMLu_IvCYyvRPwmZkM1g.jpg"
                />
            
              <DropDown id="menuDropDown">
                <Link to="/cart">
                  <Item>장바구니</Item>
                </Link>
                <Link to="/mypage/setting">
                  <Item>마이페이지</Item>
                </Link>
                <Item onClick={buttonLogout}>로그아웃</Item>
              </DropDown>
            </Menu>
            
            <Menu onClick={()=>dropDownOver("writingDropDown")} onMouseLeave={()=>dropDownOut("writingDropDown")}>
              <Writing>글쓰기</Writing>
            
              <DropDown id="writingDropDown">
              <Link to="/editor" state={{ etype: "KNOWHOW" }}>
                  <Item>노하우</Item>
                </Link>
                <Link to="/editor" state={{ etype: "STORY" }}>
                  <Item>스토리</Item>
                </Link>
                <Link to="/upload-product">
                  <Item>상품</Item>
                </Link>
              </DropDown>
            </Menu>
            
          </NavItem>
        ) : (
          <>
            
            <NavItem>
              <NavItem>
                <Link to="/login">
                  <NavText style={{color:"grey",fontSize:"15px"}}>로그인</NavText>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/signup">
                  <NavText style={{color:"grey",fontSize:"15px"}}>회원가입</NavText>
                </Link>
              </NavItem>
            </NavItem>
          </>
        )}
      </NavListBack>
    </NavbarContent>
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
  
  
`
const NavListBack = styled.div`
  display: flex;
  margin-left:auto;
  
`
const NavItem = styled.div`
  display: flex;
  white-space:nowrap ;
`
const NavText = styled.div`
  display: inline-block;
  margin: 6px 10px 0;
  padding: 14px 6px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  color: #424242;
  cursor: pointer;
  &:hover{
    color: ${(props) => props.theme.mainColor};
  }
`
const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ededed;
  height:70px;
  width:100%;
  
  
`
const NavbarContent = styled.div`
  display: flex;
  width:80%;

`
const Search = styled.button`
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
  margin-left: 10px;
`

const Input = styled.input`
  font-size: 15px;
  font-weight: 500;
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-sizing: border-box;
`
const Form = styled.form`
  display: flex;
`

const MenuIcon=styled.img`
width:50px;
height:50px;
margin:10px;
border-radius: 100%;
cursor: pointer;
`

const Menu=styled.div`
display:flex;
flex-direction: column;
margin-left: 10px;
position:relative;
z-index:2;
`
const Item=styled.div`
  padding:10px;
  color: black;
  cursor: pointer;
  font-size: medium;
  &:hover{
    background-color: lightgrey;
  }
`
const DropDown=styled.div`
display:none;
position:absolute;
z-index:3;
flex-direction: column;
border-radius: 5px;
box-shadow: 5px 5px 8px #aaaaaa;
width:200px;
background-color: white;
padding:10px;
top:60px;

`
const Writing=styled.button`
  background-color: ${(props) => props.theme.mainColor};
  color: white;
  z-index:2;
  &:hover {
    background-color: ${(props) => props.theme.hoverMainColor};
  }
  
  padding: 10px 30px;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  margin:10px;
`