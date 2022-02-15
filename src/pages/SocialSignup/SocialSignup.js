import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Button } from "../../elements"
import { AgreeView } from "../Signup/components"
import axios from "axios"
import theme from "../../theme"
import { useDispatch, useSelector } from "react-redux"
import { changeAgree } from "../../reducer/signup"

const SocialSignup = () => {
  const dispatch = useDispatch()
  const url = theme.apiUrl
  const agree = useSelector((state) => state.signup.agree)

  const [form, setForm] = useState({
    email: "",
    nickname: "",
  })
  const [emailMsg, setEmailMsg] = useState("")
  const [nickMsg, setNickMsg] = useState("")

  const [emailColor, setEmailColor] = useState("#cccccc")
  const [nickColor, setNickColor] = useState("#cccccc")

  const handleChange = (e) => {
    const changed = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(changed)
  }

  // 이메일 형식 체크 정규식
  const emailRegExp = (str) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    return regExp.test(str) ? true : false
  }

  // 2자 이상 15자 이하의 영문, 숫자, 한글로 이루어진 닉네임 형식 체크 정규식
  const nicknameRegExp = (str) => {
    var regExp = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,14}$/
    return regExp.test(str) ? true : false
  }

  const checkEmail = (email) => {
    if (emailRegExp(email) || email.length === 0) {
      setEmailMsg("")
      setEmailColor("#cccccc")

      if (emailRegExp(email)) {
        //이메일 중복 체크
        axios.get(url + `users/emails/${email}/exist`).then((response) => {
          if (response.data.result) setEmailMsg("이미 가입된 이메일입니다.")
        })
      }
    } else {
      setEmailMsg("이메일 형식이 올바르지 않습니다.")
      setEmailColor("red")
    }
  }

  const checkNickname = (nick) => {
    if (nicknameRegExp(nick) || nick.length === 0) {
      axios.get(url + `users/nicknames/${nick}/exist`).then((response) => {
        console.log(response)
        if (response.data.result) {
          //닉네임 중복
          setNickMsg("사용 중인 닉네임입니다.")
          setNickColor("red")
        } else {
          setNickMsg("")
          setNickColor("#cccccc")
        }
      })
    } else if (nick.length < 2) {
      setNickMsg("2자 이상 입력해주세요.")
      setNickColor("red")
    } else if (nick.length > 15) {
      setNickMsg("15자 이하로 입력해주세요.")
      setNickColor("red")
    }
  }

  const onSubmit = () => {
    axios
      .put(
        url + "oauth2/signup",
        {
          agreeAge: agree[0],
          agreeTOS: agree[1],
          agreePICU: agree[2],
          agreePromotion: agree[3],
          email: form.email,
          nickname: form.nickname,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.isSuccess) {
          alert("회원가입이 완료되었습니다.")
          dispatch(changeAgree([false, false, false, false]))
        }
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    checkEmail(form.email)
  }, [form.email])

  useEffect(() => {
    checkNickname(form.nickname)
  }, [form.nickname])

  return (
    <Container>
      <SignupContainer>
        <Label>추가 정보 입력</Label>
        <InputContainer>
          <EmailContainer>
            <EmailInput
              placeholder="이메일을 입력해주세요"
              name="email"
              onChange={handleChange}
              color={emailColor}
            />
            <Msg>{emailMsg}</Msg>
          </EmailContainer>
          <NicknameContainer>
            <NicknameInput
              placeholder="닉네임을 입력해주세요"
              name="nickname"
              onChange={handleChange}
              color={nickColor}
            />
            <Msg>{nickMsg}</Msg>
          </NicknameContainer>
        </InputContainer>
        <AgreeView />
        <Button onClick={onSubmit}>회원가입 완료</Button>
      </SignupContainer>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  //background-color: pink;
`
const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  //background-color: skyblue;
`
const Label = styled.span`
  font-size: 28px;
  font-weight: bold;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
const EmailInput = styled.input`
  width: 400px;
  font-size: 18px;
  padding: 8px 16px;
  border: 1px solid ${(props) => props.color};
  border-radius: 4px;
`
const NicknameInput = styled(EmailInput)``
const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
`
const NicknameContainer = styled(EmailContainer)``
const Msg = styled.span`
  margin-top: 10px;
  color: red;
`
export default SocialSignup
