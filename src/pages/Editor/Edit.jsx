import TextEditor from "./TextEditor";
import ImageBox from "./ImageBox";
import React, {useState} from 'react';
import ModalBox1 from "./ModalBox1";
import ModalBox2 from "./ModalBox2";
import ReactModal from 'react-modal';
import { ReactDOM } from 'react-dom';
import styled from 'styled-components';
const Edit = () => {
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
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
  return (
    <>
    <EditorTop href = "/">
                    <LogoImage src = "https://img.etnews.com/photonews/2104/1403026_20210419140535_358_0003.jpg"/>               
            </EditorTop>
      <ModalButton1 onClick = {handleClick1} >
          노하우 작성 기본 가이드
      <GrayText>
        원활한 글 발행을 위해 꼭 읽어주세요.
      </GrayText>
      </ModalButton1>
      <ModalButton2 onClick = {handleClick2} >
      기본 정보 입력
      <GrayText>
        글 발행 시 노출되는 기본 정보입니다.
      </GrayText>
      </ModalButton2>
      <ImageBox></ImageBox>
      
      <ModalBox1 isOpen = {isOpen1} onSubmit = {handleSubmit1}/>
      <ModalBox2 isOpen = {isOpen2} onSubmit = {handleSubmit2}/>
      <TextEditor></TextEditor>
    </>
    );
}
// 
const EditorTop=styled.a` 
    padding-left : 420px;
    margin : 50px;
`;
const LogoImage = styled.img`
    width : 200px;
    height : 100px;
    margin : 30px;
`;
const ModalButton1 = styled.button`
  display : flex;
  height : 80px;
  width : 650px;
  margin-top : 20px;
  margin-bottom : 15px;
  margin-left : 280px;
  padding : 25px 28px;
  border-radius : 4px;
  border-color : #d3d3d3;
`;
const ModalButton2 = styled.button`
  display : flex;
  height : 80px;
  width : 650px;
  margin-top : 10px;
  margin-left : 280px;
  margin-bottom : 15px;
  padding : 25px 28px;
  border-radius : 4px;
  border-color : #d3d3d3;
`;
const GrayText = styled.div`
  font-weight : 400;
  font-size : 13px;
  color : #a4acb3;
  padding : 3px 15px;
`

export default Edit;
