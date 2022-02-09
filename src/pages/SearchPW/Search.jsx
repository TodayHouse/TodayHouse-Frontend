import React from 'react';
import styled from 'styled-components';

const Search = () => {
    return (
        <div class = "allCover" style={{marginTop : "30px"}}>
            <Info>가입한 이메일 주소를 입력해주세요</Info>
            <BoxContainer>
            <MailInput class = "email_input" placeholder='이메일'></MailInput>
            <CheckButton>확인</CheckButton>
            </BoxContainer>
            <ConfirmButton><TextBox>이메일로 인증 코드 받기</TextBox></ConfirmButton>

            <CustomerGuide>회원가입 시 입력한 정보가 기억나지 않는다면?
                <NoLine class="tel">고객센터 문의하기(1670-0876)</NoLine>
            </CustomerGuide>
        </div>
    )
}

const Info = styled.div`
    margin-bottom: 12px;
    font-size: 15px;
    line-height: 20px;
`;
const BoxContainer = styled.div`
    border: 1px solid #dbdbdb;
    padding: 6px 16px;
    margin: 12px 0 28px 0;
`
const MailInput = styled.input`
    adding: 0;
    box-shadow: none;
    border: none;
    font-size: 15px;
    margin-right:45px;
`
const CheckButton = styled.button`
    white-space: pre;
    height: 31px;
    font-size: 14px;
    line-height: 17px;
    padding: 10px -10px;
    width : 50px;
    box-sizing: border-box;
    background-color: #a3e4f8;
    border-color: #a3e4f8;
    color: #e5f9ff;
    border-radius : 4px;
`
const ConfirmButton = styled.button`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 1px solid transparent;
    background: none;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    font-color : white;
    transition: color .1s,background-color .1s,border-color .1s;
    border-radius: 4px;
    cursor: pointer;
    background-color : #a3e4f8;
`

const TextBox = styled.div`
    color : white;
    width : 300px;
    height : 40px;
    padding-top : 7px;
`
const CustomerGuide = styled.div`
    width: 100%;
    height: 72px;
    line-height: 20px;
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    background: #f7f8fa;
`

const NoLine = styled.a`
    href : "1111-1111";
    text-decoration : none;
    cursor : pointer;
`
export default Search;