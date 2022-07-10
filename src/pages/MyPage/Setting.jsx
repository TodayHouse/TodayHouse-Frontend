import Title from 'antd/lib/skeleton/Title';
import styled from'styled-components';
import { useEffect, useState } from 'react';
import { getCookie } from '../../App';
import axios from 'axios'
const Setting = () => {
    const [info, setInfo]= useState(null);
    const [send, setSend] = useState({});
    const oid = getCookie('original_id');
    const jwt = getCookie('login_id');
    const formData = new FormData();
    useEffect(() => {
        axios.get('http://44.206.171.242:8080/users/emails/' + oid, {
            headers : {
                'Authorization' : `Bearer ${jwt}`,
            },
        }).then(function(res) {
            console.log(res.data.result);
            setInfo(res.data.result);
            setSend(res.data.result);
        }).catch(function(error) {
            console.log(error);
        })
    }, [])

    const loadFile = () => {
       let image = document.getElementById('profileImage')
       console.log(image.files[0]);
       //이미지 폼데이터 형태 취할건지 선택 대기
      
       formData.append("file", image.files[0]);
     
    }

    const Submit = () => {

        const params = {
            email  : send.email == null ? "" : send.email,
            nickname : send.nickname == null ? "" : send.nickname,
            gender : send.gender == null ? "" :send.gender,
            birth : send.birth == null ? "" : send.birth,
            introduction : send.introduction == null ? "" : send.introduction
        }


        formData.append("request", new Blob([JSON.stringify(params)], {type : "application/json"}));
        console.log( params);
        try{
            axios.post("http://44.206.171.242:8080/users/info", formData, {
              headers : {
                'Content-Type' : 'multipart/form-data', 
                 'Authorization': `Bearer ${jwt}`,
                 }, 
                 withCredentials:true,
                })
            .then(function(res){
              const isSuccess = res.data.isSuccess;
              if(isSuccess !== true)
              {
                  console.log(res.data.message);
                  return;
              }
              alert('업로드 완료!')
              window.location.href = "/";
             
            });
          }
          catch(e){
            console.log(e);
          }
    }
    return (
        <AllCover>
            <TitleText>
                회원정보수정
                
            </TitleText>
            <TotalInfo>
            <InfoBox></InfoBox>
            <InfoBox>
                <TagText id = "email">
                    이메일
                    <hr></hr>
                </TagText>
                <CellBox>
                <EmailInput type = "text" >{oid}</EmailInput>   
                  
               
              <Description>이메일을 변경하시려면 운영자에게 이메일을 보내주세요.  </Description>
                </CellBox>
            </InfoBox>
         
          
            <InfoBox>
                <TagText id = "nickname" >
                    별명
                    <hr></hr>
                </TagText>
                <InfoInput type = "ntext" placeholder={info != null ? info.nickname :  ''}
                onChange = {
                    (event) => 
                    {
                        console.log(event.target.value);
                        let tempJson = send;
                        tempJson.nickname = event.target.value;
                        setSend(tempJson);
                        console.log(send)
                    }
                }></InfoInput>              
            </InfoBox>
            
            <InfoBox>
                <TagText id = "gender">
                    성별
                    <hr></hr>
                </TagText>
              
                <RadioInput type = "radio" name = "gender" checked onClick={() => {
                    let tempJson = send;
                    tempJson.gender = 'm'
                    setSend(tempJson);
                    console.log(send)
                }}></RadioInput>  
                남성   
                <RadioInput type = "radio" name = "gender" onClick={() => {
                    let tempJson = send;
                    tempJson.gender = 'f'
                    setSend(tempJson);
                    console.log(send)
                }}></RadioInput>  
                여성         
            </InfoBox>

            <InfoBox>
                <TagText id = "birth">
                    생년월일
                    <hr></hr>
                </TagText>
                <InfoInput type = "text" id = "birth" placeholder = {info != null ? info.birth :  "여덟자리 입력 / ex)19950101"}
             onChange = {
                (event) => 
                {
                    console.log(event.target.value);
                    let tempJson = send;
                    tempJson.birth = event.target.value;
                    setSend(tempJson);
                    console.log(send)
                }
            }
                ></InfoInput>              
            </InfoBox>
           
           <InfoBox>
            <CellBox>
                <ProfileImage>프로필 이미지</ProfileImage>
                <ImageInput type = "file" id = "profileImage" onChange = {loadFile}></ImageInput>
            </CellBox>
            </InfoBox>

            <InfoBox>
                <TagText id = "introduction">
                    한줄 소개
                    <hr></hr>
                </TagText>
                <InfoInput type = "introduction" id = "introtext" placeholder= {info != null ? info.introduction :  '어서오세요 오늘의 집'}
                
                onChange = {
                    (event) => 
                    {
                        console.log(event.target.value);
                        let tempJson = send;
                        tempJson.introduction = event.target.value;
                        setSend(tempJson);
                        console.log(send)
                    }
                }
                
                ></InfoInput>              
            </InfoBox>

            <ConfirmButton onClick = {Submit}>회원 정보 수정</ConfirmButton>
            </TotalInfo>
        </AllCover>
    )
}

const AllCover = styled.div`
    display : block;
    height : 850px;
    padding-top : 30px;
    border : 1px solid #ededed;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);
    background-color: white;
`
const TitleText =  styled.div`
    font-weight : 700;
    font-size : 24px;
    position :absolute;
    width : 800px;
    left : 30%;
`

const TotalInfo = styled.div`
    position :absolute;
    left : 27%;
    margin-top : 20px;
`

const InfoBox = styled.div`
    display : flex;
    margin-top : 30px;
    margin-bottom :30px;
    margin-left : 4%;
    width : 800px;
`
const CellBox = styled.div`
    display : table-cell;
    width : 500px;
`
const TagText = styled.div`
    font-size : 15px;
    width : 80px;
    padding-top :5px;
    text-align: center ;
`
const Alpha = styled.div`
    display : inline;
    color : #dfdfdf;
    font-size :17px;
    margin-left: 15px;
`

const EmailInput = styled.div`
    display: inline;
    font-size : 17px;
    margin-left : 17px;

    border : 1px solid #dfdfdf;
    box-shadow: 0 1px 3px 0 rgb(53 197 240 / 20%);
    border-radius : 6px;
    height : 40px;
    width: 152px;
    padding : 8px;
    &:hover{
        border-color : skyblue;
    }
`
const RadioInput = styled.input`
    font-size : 17px;
    margin-left : 2%;
    width : 30px;
    height : 30px;
    padding-left :10px;
    &:hover{
        border-color : skyblue;
    }
    margin-right : 10px;
`
const InfoInput = styled.input`
    font-size : 17px;
    margin-left : 2%;
    border : 1px solid #dfdfdf;
    box-shadow: 0 1px 3px 0 rgb(53 197 240 / 20%);
    border-radius : 6px;
    height : 40px;
    padding-left :10px;
    width : 325px;
    &:hover{
        border-color : skyblue;
    }
`

const ImageInput = styled.input`
    font-size : 17px;
    margin-left : 2%;
    border : 1px solid #dfdfdf;
    border-radius : 4px;

    height : 200px;
    padding-left :10px;
    width : 200px;
    &:hover{
        border-color : skyblue;
    }
`

const EmailPlatform = styled.select`
    display : inline;
    text-align : left;
    margin-left : 2%;
    font-size:17px;
    border : 1px solid #dfdfdf;
    box-shadow: 0 1px 3px 0 rgb(53 197 240 / 20%);
    border-radius : 6px;
    height : 40px;
    &:hover{
        border-color : skyblue;
    }
`
const ProfileImage = styled.div`
    display : block;
    font-size:17px;
    height : 40px;
`
const ConfirmButton = styled.button`
    width : 300px;
    height : 50px;
    background-color : #35c5f0;
    border : 1px solid #35c5f0;
    border-radius : 4px;
    color : white;
    position : absolute;
    margin-left :300px;
    font-size : 17px;
    font-weight : 700;
    margin-top : 30px;
`

const Description = styled.div`
    margin-top: 8px;
    font-weight : 700;
    font-size : 12px;
    color : #dbdbdb;
    margin-left : 20px;
`
export default Setting