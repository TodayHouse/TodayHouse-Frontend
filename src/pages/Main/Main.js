import React, { useState } from 'react'
import styled from 'styled-components'
import banner1 from '../../img/house1.jpg'
import banner2 from '../../img/house2.jpg'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar'
import { Link } from 'react-router-dom'

const Main = () => {
  const [user, setUser] = useState(null)
  const authenticated = user != null //로그인 여부
  const [selectedTab, setSelectedTab] = useState(0) //선택된 탭(서브navbar가 사용)
  const [selectedPage, setSelectedPage] = useState(0) //선택된 페이지

  const logout = () => {
    console.log('로그아웃')
  }

  const navbarSelect = (value) => {
    setSelectedTab(value)
  }

  const subBarSelect = (value) => {
    setSelectedPage(value)
  }

  return (
    <Container>
      <Navbar
        authenticated={authenticated}
        navBarSelect={navbarSelect}
      ></Navbar>
      <SubNavbar
        selectedTab={selectedTab}
        subBarSelect={subBarSelect}
      ></SubNavbar>
      <h1>{selectedPage}</h1>
    </Container>
  )
}

const Container = styled.div``

export default Main
