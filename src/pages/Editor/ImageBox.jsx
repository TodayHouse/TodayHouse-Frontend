import React, { useState } from 'react';
import styled from "styled-components";
import GuideBar_1 from "./GuideBar1";
const ImageBox = () => {

    return (
        <AllCover>
            <form method="post" encType="multipart/form-data">
            <div class="button">
                <CoverBox for = "chooseFile">박스 클릭이나 하단 추가하기 버튼으로
                <p/> 커버 사진을 업로드해주세요.
                <BoldAlert>*권장 사이즈 : 1920 x 1920, 최소 1400 x 1400(1:1비율)</BoldAlert>
                </CoverBox>
            </div>

            <AlignCompCenter>
                <ImageUploadButton type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange="loadFile(this)"/>
            </AlignCompCenter>
            </form>
        </AllCover>
    );
}

export default ImageBox
const AllCover = styled.div`
    margin : auto;
`
const EditorTop=styled.a` 
    padding-left : 420px;
    margin : 50px;
`;


const CoverBox = styled.label`
    background-color : #f7f8fa;
    display: table;
    vertical-align: middle;
    border : 1px solid;
    text-align : center;
    border-color : #bdbebd;
    border-radius : 15px;
    height : 400px;
    width :400px;
    padding-top  : 150px;
    margin : auto;
`;

const BoldAlert = styled.p`
    padding-top : 15px;
    text-align : center;
    font-weight : bold;
    font-size : 13px;
`;

const AlignCompCenter = styled.div`
    position:absolute;
    padding-left :500px;
`;


const ImageUploadButton = styled.input`
    margin-top : 10px;
    display : table-cell;
    vertical-align : middle;
`;