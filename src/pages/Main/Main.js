import React, { useState } from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import SubNavbar from "./SubNavbar"
import { Outlet, Route, Routes } from "react-router-dom"
import Advices from "../Advices/Advices"
import { connect } from "react-redux"

const Main = ({ selPage }) => {
  return (
    <Container>
      <NavBarContainer>
        <Navbar />
        <SubNavbar />
      </NavBarContainer>
      <Outlet />
    </Container>
  )
}
function mapStateToProps(state, ownProps) {
  return {
    selPage: state.selPage,
  }
}
export default connect(mapStateToProps)(Main)
const Container = styled.div`
  width: 80%;
  background-color: pink;
  display: flex;
  flex-direction: column;
  //align-items: center;
`
const NavBarContainer = styled.div`
  background-color: lightyellow;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`
