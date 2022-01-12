import React,{useState} from 'react'
import styled from 'styled-components'
import banner1 from '../../img/house1.jpg'
import banner2 from '../../img/house2.jpg'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar'
import Advices from "../Advices/Advices"
import {
    Link
}from 'react-router-dom'


const Main = () =>{
    const [user,setUser] = useState(null)
    const authenticated = user!=null //로그인 여부
    const [selectedTab,setSelectedTab]=useState(0) //선택된 탭(서브navbar가 사용)
    const [selectedPage,setSelectedPage]=useState("Story") //선택된 페이지

    const logout = () =>{
        console.log("로그아웃");
    }

    const navbarSelect = (value) =>{
        setSelectedTab(value)
    }

    const subBarSelect = (value) =>{
        setSelectedPage(value)
    }
    let nowPage = null;
    switch(selectedPage){
        case "Story":
            nowPage=
            <h1>story</h1>
            break;
        case "Advices":
            nowPage=
            <Advices/>
            break;
        case "Event":
            nowPage=
            <h1>Event</h1>
            break;
        default:
            nowPage=
            <h1>Nothing</h1>
    }
    return (
        <Container>
                <Navbar authenticated ={authenticated} navBarSelect={navbarSelect}></Navbar>
                <SubNavbar selectedTab = {selectedTab} subBarSelect={subBarSelect}></SubNavbar>
                {nowPage}
        </Container>

        
        

    )
}

const Container = styled.div`
`

export default Main