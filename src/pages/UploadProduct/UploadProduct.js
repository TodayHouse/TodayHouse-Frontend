import React from 'react';
import styled from 'styled-components';
import { Input, Button } from '../../elements';

const UploadProduct = () => {
  return (
    <Container>
      <Header>상품 등록</Header>
      <Content>
        <Input label="상품 이름" placeholder="상품 이름" />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: pink;
`;
const Header = styled.h1`
  margin: 20px 0px;
`;
const Content = styled.div`
  padding: 30px 0px;
`;
export default UploadProduct;
