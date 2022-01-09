import styled from 'styled-components';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import Input from './Input';
import Button from './Button';
import Icon from './Icon';
import React, {useState} from 'react';


const Login = () => {
    const testUser = {
        id : "sortinghyeok",
        password : "sorting123"
    }

    const [user, setUser] = useState({id : "", password : ""});
    const [n_user, set_nUser] = useState({id : "", password : ""});
    const [error, setError] = useState("");

    const tryLogin = n_users => {
     
        console.log(n_users);
        if(n_user.id === testUser.id && n_user.password === testUser.password)
        {
          console.log("테스트 로그인 성공");
          setUser({
            id : user.id,
            password : user.password
          });
        }
        else{
          console.log("로그인 실패")
          setError("로그인 실패")
          alert(error)
        }
    }

    const submitHandler = e => {
        e.preventDefault();
        tryLogin(n_user);
    }

    const FaceBookBackground = "linear-gradient(to right, #0546A0 0%, #663FB6 100%)";
    const InstagramBackground = "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
    const TwitterBackground = "linear-gradient(to right, #56C1E1 0%, #35A0CE 50%)";
    return (
        <form onSubmit = {submitHandler}>
        <MainContainer>
           <WelcomeText>
                어서오세요!
           </WelcomeText>

           <InputContainer>
                <Input type = "text" placeholder = "아이디" 
                onChange = {e => set_nUser({...n_user, id : e.target.value})}
                value = {n_user.id}/>
                <Input type = "password" placeholder = "비밀번호"
                onChange = {e => set_nUser({...n_user, password : e.target.value})}
                value = {n_user.password}/>
           </InputContainer>     
           <ButtonContainer>
               <Button content = "로그인" type = "submit"></Button>
            </ButtonContainer> 
            <LoginWith>or login with</LoginWith>
            <HorizontalRule />
            <IconsContainer>
                <Icon color = { FaceBookBackground }>
                    <FaFacebookF />
                </Icon>
                <Icon color = { InstagramBackground }>
                    <FaInstagram />
                </Icon>
                <Icon color = { TwitterBackground }>
                    <FaTwitter />
                </Icon>
            </IconsContainer>
            
            <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
        </MainContainer>
        </form>
        
    );
}
const AllCover = styled.div`
    background-size : cover;/*cover : 배경 크기가 항상 요소보다 크거나 같다*/
    display : flex;
    justify-content: center;
    align-items: center;
    height : 100vh;
    width : 100vw;
`;
const MainContainer = styled.div`
   
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
`;

const InputContainer = styled.h2`
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    align-items : center;
    height : 20%;
    width : 100%;
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



export default Login