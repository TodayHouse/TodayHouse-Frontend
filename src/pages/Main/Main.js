import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar'
import { Outlet } from 'react-router-dom'
import { connect } from 'react-redux'

const Main = ({ selPage }) => {
  return (
    <Container>
      <Navbar></Navbar>
      <SubNavbar></SubNavbar>
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
const Container = styled.div``
