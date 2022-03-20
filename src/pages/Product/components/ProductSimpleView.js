import React from 'react';
import styled from 'styled-components';
import { SidePhoto, MainPhoto } from '../elements';
import { Option } from './index';
import { useSelector } from 'react-redux';

const ProductSimpleView = () => {
  // 상품 등록 시 등록한 이미지 불러와서 뿌려줌
  const images = useSelector((state) => state.product.form.images);

  return (
    <Container>
      <SidePhotoView>
        {images &&
          images.map((data, idx) => (
            <SidePhoto
              key={idx}
              src={`https://today-house-bucket.s3.ap-northeast-2.amazonaws.com/${data.fileName}`}
            />
          ))}
      </SidePhotoView>
      <MainPhotoView>
        <MainPhoto />
      </MainPhotoView>
      <OptionView>
        <Option />
      </OptionView>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
`;
const SidePhotoView = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
`;
const MainPhotoView = styled.div`
  display: flex;
  width: 500px;
  margin: 0px 10px;
`;
const OptionView = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0px 50px;
`;
export default ProductSimpleView;
