import React, { useState } from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import SubNavbar from "./SubNavbar"
import { Outlet, Route, Routes } from "react-router-dom"
import Advices from "../Advices/Advices"
import { connect } from "react-redux"
import $ from "jquery"

const Main = ({ selPage }) => {
  const navOver = () =>{
    $(`#subNavBar`).css("display","flex")
    didScroll=false;
  }
  const navOut = () =>{
    $(`#subNavBar`).css("display","none")
  }
  var didScroll;
  window.onscroll = function(e) {
    didScroll = true;
  }

  setInterval(function(){
    if(didScroll){
        navOut();
        didScroll = false;
    }
}, 250);

  return (
    <Container>
      <NavBarContainer onMouseOver={navOver}>
        <Navbar />
        <SubNavbar/>
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
  position: sticky;
  top:0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`
