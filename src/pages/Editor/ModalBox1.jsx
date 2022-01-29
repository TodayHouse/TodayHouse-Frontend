import React, { useState } from 'react';
import ReactModal from 'react-modal';
import GuideBar_1 from './GuideBar1';
import styled from "styled-components";
const ModalBox1 = ({isOpen, onSubmit}) => {
    const handleClickSubmit = () => {
        onSubmit();
    };
    const customStyles = {
      content: {
        top: '10%',
        left: '10%',
        right: 'auto',
        bottom: 'auto',
        marginLeft : '5%',
        paddingLeft : '0%',
        width: '75%',
        
      },
    };
    return (
      <ReactModal isOpen = {isOpen} onSubmit = {onSubmit} style = {customStyles}>
        
        <GuideBar_1></GuideBar_1>
        <CenterArranger>
            <SubmitButton onClick = {handleClickSubmit}>확인</SubmitButton>
        </CenterArranger>
       
      </ReactModal>
    );
  };

const SubmitButton = styled.button`
  display : flex;
  width : 120px;
  height : 40px;
  border-radius : 10px;
  padding-left : 43px;
  padding-top : 5px;
`
const CenterArranger = styled.div`
  margin-left: 45%;
  margin-right : auto;
  align-items : center;
`


export default ModalBox1;