import axios from 'axios';
import React, { useState } from 'react';
import { useLinkClickHandler } from 'react-router-dom';
import styled from "styled-components";
import GuideBar_1 from "./GuideBar1";
import { setCookie } from '../../App';
const Cover = () => {
    const [showImages, setShowImages] = useState([]);
    const [productImages, setProducts] = useState([]);

    const handleImageChange = e => {
        const ProductImg = e.target.files
        setProducts(productImages);
    }

    const handleProductSubmit = (event) => {
        event.preventDefault();
        this.props.addNewProduct(
            this.state.ProductImg
        );
    }

    // 이미지 상대경로 저장
    const handleAddImages = (event) => {
      const imageLists = event.target.files;
      let imageUrlLists = [...showImages];
  
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
        console.log(currentImageUrl);
      }
  
      if (imageUrlLists.length > 10) {
        imageUrlLists = imageUrlLists.slice(0, 10);
      }
      setCookie('CoverUploaded', 'yes', {path : "/"})
      setShowImages(imageUrlLists);
    };
  
    // X버튼 클릭 시 이미지 삭제
    const handleDeleteImage = (id) => {
      setShowImages(showImages.filter((_, index) => index !== id));
    };

     return ( 
    <>
         <CoverBox >
     하단 파일 선택을 눌러, 커버 이미지를 업로드해주세요. <br></br>
     *권장 사이즈 : 1920 x 1920, 최소 1400 x 1400(1:1 비율)
     <hr></hr>
     <div className= 'addPicture'>
      <label htmlFor="input-file" className='inputFlie' onChange={handleAddImages}>
        <input type="file" id="file" className='addButton'/>
        <Plus fill="#646F7C" />
      </label>


      {showImages.map((image, id) => (
        <IconContainer className='imgContainer' key={id}>
          <ResizedImage src={image} alt={`${image}-${id}`} />
          <Delete onClick={() => handleDeleteImage(id)} >사진 삭제</Delete>
        </IconContainer>
      ))}
    </div>
        </CoverBox>
       
    </>
    );  
}
/*
 <AlignCompCenter>
            <ImageUploadButton type="file" id ="file" accept="image/*" onChange = {processImage}/>        
        </AlignCompCenter>
*/
export default Cover

const IconContainer = styled.div`
height : 430px;
width : 400px;
border-radius : 4px;
margin : 5px;
`

const ResizedImage = styled.img`
height : 400px;
width : 400px;
border-radius : 4px;
`

const Plus = styled.div`

`
const Delete = styled.div`
    height : 30px;
    width : 100px;
    border : 1px solid skyblue;
    border-radius : 4px;
    padding-top : 4px;
`
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
    padding-top  : 15px;
    font-weight : bold; 
    font-size : 13px;
`;

const ImgBox = styled.img`

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

