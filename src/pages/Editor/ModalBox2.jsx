import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import GuideBar_2 from './GuideBar2';

const ModalBox2 = ({isOpen, onSubmit, onCancel}) => {
    const handleClickSubmit = () => {
        onSubmit();
    };
    const customStyles = {
      content: {
        top: '10%',
        left: '10%',
        right: 'auto',
        bottom: 'auto',
        marginLeft : '20%',
        paddingLeft : '0%',
        width: '40%',
        
      },
    };
    return (
      <ReactModal isOpen = {isOpen} onSubmit = {onSubmit} style = {customStyles}>
        <GuideBar_2></GuideBar_2>
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
  border-color : skyblue;
  padding-left : 43px;
  padding-top : 5px;
`
const CenterArranger = styled.div`
  margin-left: 45%;
  margin-right : auto;
  align-items : center;
`

export default ModalBox2;