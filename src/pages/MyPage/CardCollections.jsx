import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import IconButtons from './IconButtons'

const CardCollections = () => {
    return (
        <AllCover id = "CardCover">
            <InfoContainer id = "InfoContainer">
                <PrivateProfile id = "PrivateInfo">
                    <ProfileBox id = "ProfileBox">
                        <ProfileBorder>
                        <ProfileImage src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMzBfNDkg%2FMDAxNjM4MjYzMTI1MTQy.t-8nBOZtDXhzQmEC7Q1YWOy69cug0GFpCHOo3jKd-iUg.uIRJv_cdK6-a94c8PdU22_ejS-8Z-srKMemJIk5WNL4g.PNG.urbandigital%2F%25C4%25BF%25B9%25C2%25B4%25CF%25C6%25BC_%25C4%25BF%25B8%25D3%25BD%25BA_%25BF%25C0%25B4%25C3%25C0%25C7%25C1%25FD2.PNG&type=a340"></ProfileImage>
                        </ProfileBorder>               
                        <UserName>UserID</UserName>
                        <Follower>팔로워 | 팔로잉</Follower>
                        <Link to = "/mypage/setting">
                            <SettingButton>설정</SettingButton>            
                        </Link>
                        <Line></Line>
                        <IconButtons></IconButtons>
                    
                    </ProfileBox>
                </PrivateProfile>
            </InfoContainer>
            &nbsp;
            <Statistics>
                
                <PrivateInfo>d</PrivateInfo>
                <PrivateInfo>dd</PrivateInfo>
                <PrivateInfo>ddd</PrivateInfo>
            </Statistics>
        </AllCover>
    )
}

const AllCover = styled.div`
    width : 1200px;
    padding : 0px 60px;
    background-color: white;
    display : inline-block;
    @media only screen and (min-width: 1256px){
        padding : 0 60px;
    }
    @media only screen and (min-width: 1024px){
        padding : 0 60px;
    }
    @media only screen and (min-width: 768px){
        padding : 0 60px;
    }
    @media only screen and (min-width: 375px){
        padding : 0 60px;
}
`
const InfoContainer = styled.div`
    width : 300px;
    height : 500px;
    display : inline-block;
    margin-right : 20px;
    @media only screen and (min-width : 1256px){
        margin : 0px -10px;
    }
    @media only screen and (min-width : 1024px){
        margin : 0px -10px;
    }
    @media only screen and (min-width : 768px){
        margin : 0px -7.5px;
    }
    @media only screen and (min-width : 375px){
        margin : 0px -5px;
    }
`

const PrivateProfile = styled.div`
    display : inline-block;
    width : 260px;
    padding : 30px 25px 18px;
    border-radius : 4px;
    border : 2px solid #63c8e7;
    position : absolute;
    top: 25%;
    background-color: white;
`

const PrivateInfo = styled.div`
    display : inline-block;
    width : 240px;
    height : 300px;
    padding : 30px 25px 18px;
    border-radius : 4px;
    border : 2px solid #63c8e7;
    position : relative;
    top: 15%;
    margin-right : 12px;
    margin-left : 12px;
    background-color: white;
`

const ProfileBox = styled.div`
    position :relative;
    margin : 0 auto 24px;
    height : 350px;
`
const ProfileBorder = styled.div`
    margin : 5px 5px;
`
const ProfileImage = styled.img`
    position : absolute;
    top : 20%;
    left : 50%;
    width : 70%;
    transform : translate(-50%, -50%);
    border-radius :50%;
    margin-bottom :5px;
`
const UserName = styled.div`
    font-weight : 700;
    font-size: 27px;
    text-align : center;
    padding-top : 150px;
    margin-bottom : 1px;
`
const Follower = styled.div`
    font-size : 13px;
    text-align : center;
`
const SettingButton = styled.button`
    border-color :  #dadce0;
    border-radius : 4px;
    background-color :white;
    margin-left : 37%;
    margin-top : 10px;
    width : 50px;
    color : black;
`

const Line = styled.div`
    margin-top : 10px;
    border-bottom : 1px solid #dadce0;
`

const Statistics = styled.div`
    position : absolute;
    top : 25%;
    width : 800px;
    height : 430px;
    border : 2px solid #63c8e7;
    display : inline-block;
    border-radius: 5px;

`
export default CardCollections