import React from 'react';
import styled from 'styled-components';
import MyNavbar from './MyNavbar';
import SubNavbar from './SubNavbar';
import { Outlet} from 'react-router-dom'
const MyPage = () => {
    return (
        <>
        <Container id = "MyPage">
            <MyNavbar />
            <SubNavbar />
        </Container>
        <Outlet />
        </>
    )
}

const Container = styled.div`
    font-size : 30px;
`
export default MyPage