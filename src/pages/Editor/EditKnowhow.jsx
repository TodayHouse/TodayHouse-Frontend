import TextEditor from "./TextEditor";
import ImageBox from "./ImageBox";
import React, {useEffect, useState} from 'react';
import ModalBox1 from "./ModalBox1";
import ModalBox2 from "./ModalBox2";
import ReactModal from 'react-modal';
import { ReactDOM } from 'react-dom';
import styled from 'styled-components';
import icon1 from "./img/view.png";
import backImage from "./img/o_back.jpeg";
import axios from "axios";
import {Link} from 'react-router-dom';
//import { useSelector } from "react-redux";
import { getCookie } from '../../App';

const EditKnowhow = () => {
  const [contentImages, setCImages] = useState([]);
  const [cookie, setCookie] = useState("");
  const [titleText, setTitle] = useState("");
  const [contentText, setContent] = useState("");
  const [Images, setImage] = useState([icon1]);
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  //const cookieState= useSelector((state) => state.login.cookieState);
  const accessToken = getCookie('login_id');

  useEffect(() => {
    console.log("쿠키 로딩");
    setCookie(accessToken);
    console.log(accessToken);
  }, []);
  
  const contentSetter = (e) => {
    setContent(e.target.value);
    console.log("콘텐츠 : " + e.target.value);
  }

  const handleTitle = (e) => {
    setTitle(e.target.value);
    console.log("타이틀 : " + e.target.value);
  };
  const handleContent = (e) =>{
    setContent(e.target.value);
    console.log(e.target.value);
  };

  const handleClick1 = () => {
    setOpen1(true);
  };
  const handleClick2 = () => {
    setOpen2(true);
  };
  const handleSubmit1 = () => {
    setOpen1(false);
  };
  const handleSubmit2 = () => {
    setOpen2(false);
  };
  
  const upload = () => {
    const formData = new FormData();
    const file = document.getElementById("file");
    console.log("쿠키 상태" + cookie);
    for(var i = 0; i <file.files.length; i++)
    {
      formData.append("file", file.files[i]);
    }
    

    console.log(file.files[0]);
    console.log(formData);
    const param = {
      category : "KNOWHOW",
      content : contentText,
      title : titleText,
    }//`Bearer ${accessToken}`
    formData.append("request", new Blob([JSON.stringify(param)], {type : "application/json"}))
    //formData를 넣어야하는데 어떻게 줄지
    try{
      axios.post("http://localhost:8080/stories", formData, {
        headers : {
          'Content-Type' : 'multipart/form-data', 
           'Authorization': `Bearer ${accessToken}`,
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
        window.location.href = "/advices";
       
      });
    }
    catch(e){
      console.log(e);
    }
  };

  return (
    <>
    <Link to = "/advices">
       <ConfirmButton className = 'EditConfirm' id = 'EditConfirm' onClick = {upload}>글 발행</ConfirmButton>
    </Link>
    <EditorTop href = "/">
                    <LogoImage src = "https://img.etnews.com/photonews/2104/1403026_20210419140535_358_0003.jpg"/>               
    </EditorTop>  

    <BackgroundImage>
      <ModalContainer>    
      <ModalButton1 onClick = {handleClick1} >
      <IconImage src = "https://w7.pngwing.com/pngs/842/66/png-transparent-checklist-art-computer-icons-scalable-graphics-files-free-schedule-miscellaneous-angle-text-thumbnail.png" alt = "viewIcon" />
          <ModalText>
            노하우 작성 기본 가이드
          </ModalText>
          <GrayText>
            원활한 글 발행을 위해 꼭 읽어주세요.
          </GrayText>
      </ModalButton1>
      <ModalButton2 onClick = {handleClick2} >
      <IconImage src = "https://w7.pngwing.com/pngs/842/66/png-transparent-checklist-art-computer-icons-scalable-graphics-files-free-schedule-miscellaneous-angle-text-thumbnail.png" alt = "viewIcon" />
          <ModalText>
            기본 정보 입력
          </ModalText>
          <GrayText>
            어디에 이용되는 지 알 수 없어, 일단 스켈레톤만 만든 부분입니다.
          </GrayText>
      </ModalButton2>
      <ModalBox1 isOpen = {isOpen1} onSubmit = {handleSubmit1}/>
      <ModalBox2 isOpen = {isOpen2} onSubmit = {handleSubmit2}/>
      </ModalContainer>
     
      <MarginMaker>
      <ImageBox></ImageBox>
      </MarginMaker>
      </BackgroundImage>

   
      <TitleText placeholder="제목을 입력해주세요" type = "text" id ="title" onChange = {handleTitle} value={titleText}>
      
      </TitleText>

      <Editor type = 'text' onChange = {contentSetter}></Editor>
     
      </>
    );
}

const Editor = styled.input`
  border-radius : 4px;
  border : 2px solid skyblue;
  height : 200px;
  width : 800px; 
  vertical-align: top;
  text-align: left;
  
`

const TitleText = styled.input`
  display : flex;
  margin-top : 15px;
  padding-left :20px;
  border-color : #d3d3d3;
  border-radius : 4px;
  margin-bottom :15px;
  width : 800px;
  height : 100px;
  font-size : 40px;
  font-weight : 100;
  position : relative;
  left : 0%;
  text-align: center;
`
const ConfirmButton = styled.button`
  width : 200px;
  height : 50px;
  border-color : skyblue;
  border-radius : 4px;
  background-color : white;
  position : fixed;
  top : 5%;
  right : 0;
  z-index: 3;
`

const BackgroundImage = styled.div`
    border-radius : 12px;
    border: 1px solid #000;
    background-image: url(${backImage});
    background-color : #aae2f3;
    border-color : black;
    background-repeat : no-repeat;
    background-position : center center;
`

const MarginMaker = styled.div`
  margin-top : auto;
  margin-bottom : 100px;
  position : relative;
  text-align : center;
`
const EditorTop=styled.a` 
    display: flex;
    position : relative;
    left : 0%;
    background-color: white;
    border-radius: 15px;
    height : 100px;
    width : 225px;
    padding-top :10px;
    padding-left : 10px;
    margin-top:15px;
    margin-bottom : 30px;
`;

const ModalContainer = styled.div`
  width : 1200px;
  padding-left: 0;
  margin-left : 0%;
  margin-bottom : 50px;
  position : relative;
  left : 0%;
  @media only screen and (min-width : 375px){
    left : 0%;
}
@media only screen and (min-width : 768px){
  left : 3%;
}
@media only screen and (min-width : 1024px){
  left: 9%;
}

`
const LogoImage = styled.img`
    width : 200px;
    height : 80px;
`;

const IconImage = styled.img`
    width : 40px;
    height : 50px;
    margin-top : 13px;
    margin-left : 15px;
    margin-right : 0px;
`;

const ModalText = styled.div`
padding : 25px 20px;
`;

const GrayText = styled.div`
  font-weight : 400;
  font-size : 13px;
  color : #a4acb3;
  padding-top : 30px;
`;

const ModalButton1 = styled.button`
  background-color : white;
  display : flex;
  height : 80px;
  width : 650px;
  margin-top : 20px;
  margin-bottom : 15px;
  border-radius : 4px;
  border-color : #d3d3d3;
  margin-left : 160px;
`;

const ModalButton2 = styled.button`
background-color : white;
  display : flex;
  height : 80px;
  width : 650px;
  margin-top : 10px;
  margin-bottom : 15px;
  border-radius : 4px;
  border-color : #d3d3d3;
  margin-left : 160px;
`;


export default EditKnowhow;
