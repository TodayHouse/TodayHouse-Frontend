import styled from 'styled-components';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import Button from './Button';
import Icon from './Icon';
import React, {useState} from 'react';
import {useCookies} from "react-cookie";

import axios from "axios";
axios.defaults.withCredentails = true;
const headers = {withCredentails : true};

const Login = () => {
   const [cookies, setCookie, removeCookie] = useCookies(['cookie-name'])

   
    const [user, setUser] = useState({uid : "", password : ""});
    const [error, setError] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        login(user);
    }
    const login = user => {
        console.log(user.uid);
     
        if(user.uid === "" || user.uid === undefined){
            alert("올바른 아이디를 입력해주세요");
            return;
        }
        else if(user.password === "" || user.password === undefined)
        {
            alert("비밀번호가 틀렸습니다.");
            return;
        }

        const send_param = {
            email : user.uid,//email로 수정
            password : user.password
        };
 
        axios
        .post("http://localhost:8080/users/login", send_param)
        .then(function(response) {    
            const isSuccess = response.data.isSuccess;
            if(isSuccess !== true)
            {
                console.log(response.data.message);
                return;
            }
            const accessToken = response.data.result.accessToken;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
            console.log(accessToken);
            if(accessToken){
                setCookie('login_id', accessToken, { path : "/"});
                alert("login success");
            }
            else{
                alert("login failed");
                //로그인 실패
            }
        })
        .catch(err => {    
            setError(err);
            console.log(error);
        })
    };
    //임시 저장 아이디 및 패스워드
    const testUser = {
        headers,
        id : "sortinghyeok",
        password : "sorting123"
    };


    return (
        <form onSubmit = {submitHandler}>
        <MainContainer>
            <LogoImage src = "https://img.etnews.com/photonews/2104/1403026_20210419140535_358_0003.jpg" />
           <InputContainer>
                <Input type = "text" placeholder = "아이디" id = "uid"
                onChange = {e => setUser({...user, uid : e.target.value})}
                value = {user.id} 
                />
           </InputContainer>   
           <InputContainer>
                <Input type = "password" placeholder = "비밀번호" id = "password"
                onChange = {e => setUser({...user, password : e.target.value})}
                value = {user.password}
                />
           </InputContainer>  
           <ButtonContainer>
               <Button content = "로그인" type = "submit"></Button>
            </ButtonContainer> 
            <LoginWith>or login with</LoginWith>
            <HorizontalRule />
            <IconsContainer>
                <StyledIcon src = {require("./img/NaverIcon.png")}/>
                <StyledIcon src = {require("./img/KakaoIcon.png")}/>
            </IconsContainer>
            
            <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
        </MainContainer>
        </form>
        
    );
}

const Input =  styled.input`
background : rgba(255, 255, 255, 0.15);
    box-shadow : 0 8px 32px 0 rgba(0, 0, 0, 0.2);
    border-radius : 2rem;
    width : 80%;
    height : 3rem;
    padding : 1rem;
    border : none;
    outline : none;
    right : 30;
    color : #3c354e;
    font-size : 14px;
    font-weight : bold;
    &: focus {
        display : inline-block;
        box-shadow : 0 0 0 0.2rem #4f4f4f;
        backdrop-filter : blur(12rem);
        border-radius : 2rem;
    }
`;

const StyledIcon = styled.img`
    height : 3.5rem;
    width : 3.5rem;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 4rem;
    color : white;
    cursor : pointer;
`;

const AllCover = styled.div`
    background-size : cover;/*cover : 배경 크기가 항상 요소보다 크거나 같다*/
    display : flex;
    justify-content: center;
    align-items: center;
    height : 100vh;
    width : 100vw;
`;
const MainContainer = styled.div`
   position : absolute;
   left : 40%;
    display: flex;
    align-items : center;
    flex-direction: column;
    height : 70vh;
    width : 30vw;
    background : rgba(255, 255, 255, 0.15);
    box-shadow : 0 8px 32px 0 rgba(31, 38, 135, 0);
    backdrop-filter : blur(1.5px);
    border-radius : 10px;
    text-transform : uppercase;
    letter-spacing : 0.25rem;
    @media only screen and (max-width:320px){
        width : 40vw;
        height : 70vh;
        hr{
            margi-bottom : 0.3rem;
        }
        h4 {
            font-size : small;
        }
    }
    @media only screen and (min-width:360px){
        width : 40vw;
        height : 70vh;
        
        h4 {
            font-size : small;
        }
    }
    @media only screen and (min-width:411px){
        width : 30vw;
        height : 70vh;;
    }
    @media only screen and (min-width: 768px){
        width : 30vw;
        height : 70vh;
    }
    @media only screen and (min-width: 1024px){
        width : 30vw;
        height : 70vh;
    }
    @media only screen and (min-width: 1280px){
        width : 20vw;
        height : 70vh;
    }
`;

const WelcomeText = styled.h2`
    margin : 3rem 0 2rem 0;
    height : 300px;
    width: 300px;
    align-items : center;
`;

const InputContainer = styled.h2`
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    align-items : center;
    height : 10%;
    width : 70%;
`;

const ButtonContainer = styled.div`
    margin : 1rem 0 2rem 0;
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
`;

const LoginWith = styled.h5`
    cursor: pointer;
    font-size : 5px;
    text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;"
`;

const HorizontalRule = styled.hr`
    width : 35%;
    height : 0.2rem;
    border-radius : 0.8rem;
    border:none;
    margin : 10px;
    background : linear-gradient(to left, #ffffff 0%, #878787 1%);
    backdrop-filter : blur(25px)
`;

const IconsContainer = styled.div`
    display : flex;
    justify-content : space-evenly;
    margin : 2rem 0 3rem 0;
    width : 80%;
`;


const ForgotPassword = styled.h4`
    cursor : pointer;
    text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;"
`;

const LogoImage = styled.img`
    width : 400px;
    height : 300px;
    margin : 30px;
`;


export default Login