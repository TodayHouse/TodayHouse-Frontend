import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Button } from "../../elements"
import { AgreeView } from "../Signup/components"
import axios from "axios"
import theme from "../../theme"
import { useDispatch, useSelector } from "react-redux"
import { changeAgree } from "../../redux/reducer/signup"

const SocialSignup = () => {
  const dispatch = useDispatch()
  const url = theme.apiUrl
  const agree = useSelector((state) => state.signup.agree)

  const [form, setForm] = useState({
    email: "",
    nickname: "",
  })

  const [nickMsg, setNickMsg] = useState("")

  const [nickColor, setNickColor] = useState("#cccccc")

  const handleChange = (e) => {
    const changed = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(changed)
  }

  // 2자 이상 15자 이하의 영문, 숫자, 한글로 이루어진 닉네임 형식 체크 정규식
  const nicknameRegExp = (str) => {
    var regExp = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,14}$/
    return regExp.test(str) ? true : false
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
          agreePICU: agree[2],
          agreePromotion: agree[3],
          agreeTOS: agree[1],
          email: form.email,
          nickname: form.nickname,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response)
        if (response.data.isSuccess) {
          alert("회원가입이 완료되었습니다.")
          dispatch(changeAgree([false, false, false, false]))
        }
      })
      .catch((e) => {
        alert("오류가 발생했습니다.")
        console.log(e)
      })
  }

  useEffect(() => {
    checkNickname(form.nickname)
  }, [form.nickname])

  useEffect(() => {
    console.log("dd")
    axios
      .get(url + "oauth2/email", { withCredentials: true })
      .then((response) => {
        console.log(response)
        if (response.data.isSuccess)
          setForm({ email: response.data.result.email })
      })
      .catch((e) => {
        alert("오류가 발생했습니다.")
        console.log(e)
      })
  }, [])

  return (
    <Container>
      <SignupContainer>
        <Label>추가 정보 입력</Label>
        <InputContainer>
          <EmailContainer>
            <EmailInput disabled value={form.email} />
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
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
  width: 100%;
  font-size: 18px;
  padding: 8px 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
`
const NicknameInput = styled(EmailInput)`
  border-color: ${(props) => props.color};
`
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
