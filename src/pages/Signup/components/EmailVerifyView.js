import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import theme from "../../../theme";
import { useSelector, useDispatch } from "react-redux";
import { handleVerify, setIsVerified } from "../../../redux/reducer/signup";

const EmailVerifyView = (props) => {
    const dispatch = useDispatch();
    const showVerify = useSelector((state) => state.signup.showVerify);

    const { email } = props;
    const [inputValue, setInputValue] = useState("");
    const url = theme.apiUrl;

    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    const data = { email, token: inputValue };
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8080/" + "emails/token/verify", data, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.isSuccess) {
                    alert("이메일 인증이 완료되었습니다.");
                    dispatch(handleVerify(false));
                    dispatch(setIsVerified());
                }
            })
            .catch((e) => {
                alert("인증에 실패했습니다.");
                console.log("error log : " + e);
            });
    };

    return (
        showVerify && (
            <Container>
                <span>이메일로 전송된 인증코드를 입력해주세요.</span>
                <InputContainer onSubmit={onSubmit}>
                    <Input
                        onChange={onChange}
                        placeholder="인증코드 6자리 입력"
                    />
                    <Button onClick={onSubmit}>확인</Button>
                </InputContainer>
                <p style={{ marginTop: 5 }}>
                    이메일을 받지 못하셨나요?{" "}
                    <span
                        style={{
                            fontWeight: "bold",
                            textDecoration: "underline",
                        }}>
                        이메일 재전송하기
                    </span>
                </p>
            </Container>
        )
    );
};

const Container = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 20px 15px;
    background-color: #f4f4f4;
    border-radius: 4px;
`;
const InputContainer = styled.form`
    display: flex;
    margin-top: 10px;
`;
const Input = styled.input`
    width: 80%;
    border: 1px solid lightgray;
    padding: 10px;
`;
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    background-color: ${(props) => props.theme.mainColor};
    color: white;
    font-weight: bold;
`;
export default EmailVerifyView;
