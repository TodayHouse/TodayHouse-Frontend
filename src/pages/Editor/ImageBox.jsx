import axios from 'axios';
import React, { useState } from 'react';
import { useLinkClickHandler } from 'react-router-dom';
import styled from "styled-components";
import GuideBar_1 from "./GuideBar1";

const ImageBox = () => {
    //파일 미리볼 url을 저장해줄 state 
    //업로드시 파일 추가
   
    const [fileImage, setFileImage] = useState(""); // 파일 저장 
    const saveFileImage = (e) => { setFileImage(URL.createObjectURL(e.target.files[0])); }; // 파일 저장
    const deleteFileImage = () => 
    { URL.revokeObjectURL(fileImage); setFileImage(""); }; //삭제 기능. 그러나 아직 필요없을듯
     return ( 
    <>
     <CoverBox>
     하단 파일 선택을 눌러, 커버 이미지를 업로드해주세요.
         <BoldAlert>
             *권장 사이즈 : 1920 x 1920, 최소 1400 x 1400(1:1 비율)
         </BoldAlert>
         <table> 
             <tbody> 
                 <tr> 
                    <td>    
                     <div> {fileImage && 
                     ( <img alt="sample"
                      src={fileImage} 
                      style={{ margin: "auto" }} ></img>
                       )} 
                    <div style={{ alignItems: "center", justifyContent: "center", }} > 
                     
                    </div> 
                    </div>  
                    </td> 
                </tr> 
            </tbody> 
        </table> 
        </CoverBox>
        <AlignCompCenter>
            <ImageUploadButton type="file" id ="file" accept="image/*" onChange={saveFileImage} />        
        </AlignCompCenter>
    </>
    );  
}

export default ImageBox


const CoverBox = styled.div`
background-color : white;
    display: table;
    vertical-align: middle;
    border : 1px solid;
    text-align : center;
    border-color : #bdbebd;
    border-radius : 15px;
    position :relative;
    left : 33%;
    height : 400px;
    width :400px;
    padding-top  : 170px;

`;

const BoldAlert = styled.p`
    padding-top : 15px;
    text-align : center;
    font-weight : bold;
    font-size : 13px;
`;

const AlignCompCenter = styled.div`
    position:absolute;
    left :38%;
`;

const ImageUploadButton = styled.input`
    background-color : white;
    opacity : 0.7;
    margin-top : 10px;
    display : flex;
    vertical-align : middle;
`;

