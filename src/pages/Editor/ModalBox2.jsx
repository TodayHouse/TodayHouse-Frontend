import React, { useState } from 'react';
import ReactModal from 'react-modal';

const ModalBox2 = ({isOpen, onSubmit, onCancel}) => {
    const handleClickSubmit = () => {
        onSubmit();
    };
   
    return (
      <ReactModal isOpen = {isOpen}>
        <div>모달 입니다.</div>
        <div>
            <button onClick = {handleClickSubmit}>확인</button>
        </div>
      </ReactModal>
    );
  };


export default ModalBox2;