import React, { useState } from 'react';
import ReactModal from 'react-modal';

const ModalBox2 = ({isOpen, onSubmit, onCancel}) => {
    const handleClickSubmit = () => {
        onSubmit();
    };
   
    return (
      <ReactModal isOpen = {isOpen}>
        <div>추후 기능이 요구될 시 추가 구현할 부분입니다.</div>
        <div>
            <button onClick = {handleClickSubmit}>확인</button>
        </div>
      </ReactModal>
    );
  };


export default ModalBox2;