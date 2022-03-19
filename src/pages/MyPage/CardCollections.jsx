import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import IconButtons from './IconButtons'
import { Cookies } from 'react-cookie'
import { getCookie } from '../../App';
import ContentLoader from './ContentLoader'

const CardCollections = () => {
    const [uid, setUid] = useState(getCookie('original_id'));
    const [i_id, setIid] = useState(getCookie('index_id'));
    const accessToken = getCookie('login_id');

    const [follow, setFollow] = useState(1);
    const [following, setFollowing] = useState(1);

    const send_param = {
        fromId : i_id,
        toId : i_id
    };
    useEffect(() => {
        console.log(uid + " " + i_id);
        //getFollow number
        axios
        .get("http://localhost:8080/follows/followers/count/" + i_id, send_param, {
            headers : {
                'Authorization' : `Bearer ${accessToken}`,
            },
            withCredentials : true,
        })
        .then(function(response) {    
            const isSuccess = response.data.isSuccess;
            if(isSuccess === true)
            {
                console.log(response.data.message);
                console.log(response.data.result);
                setFollow(response.data.result);

                console.log("팔로우 " + follow);
                
                return;
            }
            else{
                alert("해당 아이디가 존재하지 않거나 통신이 잘못 되었습니다.");
                //로그인 실패
            }
        })
        .catch(err => {   
            console.log(err);
        })

        //getFollowing number
        axios
        .get("http://localhost:8080/follows/followings/count/" + i_id, send_param, {
            headers : {
                'Authorization' : `Bearer ${accessToken}`,
            },
            withCredentials : true,
        })
        .then(function(response) {    
            const isSuccess = response.data.isSuccess;
            if(isSuccess === true)
            {
                console.log(response.data.message);
                console.log(response.data.result);
                setFollowing(response.data.result);
                
                console.log("팔로잉 수 " + following);
                
                return;
            }
            else{
                alert("해당 아이디가 존재하지 않거나 통신이 잘못 되었습니다.");
                //로그인 실패
            }
        })
        .catch(err => {   
            console.log(err);
        })
    }, []);


    return (
        <>
        <AllCover id = "CardCover">
            <InfoContainer id = "InfoContainer">
                <PrivateProfile id = "PrivateInfo">
                    <ProfileBox id = "ProfileBox">
                        <ProfileBorder>
                        <ProfileImage src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMzBfNDkg%2FMDAxNjM4MjYzMTI1MTQy.t-8nBOZtDXhzQmEC7Q1YWOy69cug0GFpCHOo3jKd-iUg.uIRJv_cdK6-a94c8PdU22_ejS-8Z-srKMemJIk5WNL4g.PNG.urbandigital%2F%25C4%25BF%25B9%25C2%25B4%25CF%25C6%25BC_%25C4%25BF%25B8%25D3%25BD%25BA_%25BF%25C0%25B4%25C3%25C0%25C7%25C1%25FD2.PNG&type=a340"></ProfileImage>
                        </ProfileBorder>               
                        <UserName>UserID</UserName>
                        <Follower id = "follow">팔로워 수 : {follow} | 팔로잉 수 : {following}</Follower>
                        
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
                <ContentTable>
                    <tr>
                        <td>
                        <PrivateInfo>
                            <InnerCategoryButton>
                        최근 스토리
                                <ContentLoader idx = {0} kind = "story"></ContentLoader>
                            </InnerCategoryButton>
                        </PrivateInfo>
                        </td>
                        <td>
                        <PrivateInfo>
                            <InnerCategoryButton>
                        최근 노하우
                            <ContentLoader idx = {0} kind = "knowhow"></ContentLoader>
                            </InnerCategoryButton>
                        </PrivateInfo>
                        </td>
                    </tr>
                    
                </ContentTable>
                
               
            </Statistics>
        </AllCover>
        <Footer></Footer>
        </>
    )
}

const ContentTable = styled.table`
    position: relative;
    left : 2%;
    top : 13%;
`

const InnerCategoryButton = styled.div`
    border : solid 1px skyblue;
    width : 100px;
    height : 50px;
    position : relative;
    top : 5%;
    left : 33%;
    padding-top : 12px;
    border-radius : 4px;
    font-weight: bold;
    color : white;
    background-color: skyblue;
`

const AllCover = styled.div`
    width : auto;
    height : 620px;
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
    position : absolute;
    left : 20%;
    top : 10%;
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
    top : 22%;
    background-color: white;
`
const PrivateInfo = styled.div`
    display : inline-block;
    width : 360px;
    height : 300px;
 
    border-radius : 4px;
    border : 2px solid #63c8e7;
    position : relative;
    top: 15%;
    margin-right : 12px;
    margin-left : 12px;
    background-color: white;
    text-align: center;
`
const ProfileBox = styled.div`
    position :relative;
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
    top : 21%;
    left :35%;
    width : 800px;
    height : 430px;
    border : 2px solid #63c8e7;
    display : inline-block;
    border-radius: 5px;
    text-align : center;
    background-color : skyblue;
`
const Footer = styled.div`
    width : auto;
    height : 300px;
    border : 1px solid skyblue;
    background-color: skyblue;
`
export default CardCollections