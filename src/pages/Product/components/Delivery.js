import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import axios from 'axios';
import theme from '../../../theme';

const sellerMock = [
  { title: '상호', element: '준수 컴퍼니' },
  { title: '대표자', element: '이준수' },
  {
    title: '사업장소재지',
    element: '서울 강남구 테헤란로8길 42 퍼스트역삼 3층',
  },
  { title: '고객센터 전화번호', element: '02-1577-7247' },
  { title: 'E-mail', element: 'cs001@corporhez.us' },
  { title: '사업자 등록번호', element: '233-81-04610' },
];

const Delivery = (props) => {
  const deliveryFee = useSelector((state) => state.product.form.deliveryFee);
  const sellerId = useSelector((state) => state.product.form.sellerId);
  const url = theme.apiUrl;
  const [sellerInfo, setSellerInfo] = useState({});

  useEffect(() => {
    //판매자 id 관련 도현님 질문
    axios
      .get(url + `sellers/${sellerId}`)
      .then((response) => {
        console.log(response);
        setSellerInfo(response.data.result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [sellerId]);

  return (
    <Container id={props.id}>
      <DeliveryContainer>
        <Header>배송</Header>
        <Content>
          <ElementContainer>
            <Title>배송비</Title>
            <Element>{deliveryFee === 0 ? '무료배송' : deliveryFee}</Element>
          </ElementContainer>
        </Content>
      </DeliveryContainer>
      <SellerContainer>
        <Header>판매자 정보</Header>
        <Content>
          <ElementContainer>
            <Title>상호</Title>
            <Element>{sellerInfo.companyName}</Element>
          </ElementContainer>
          <ElementContainer>
            <Title>대표자</Title>
            <Element>{sellerInfo.representative}</Element>
          </ElementContainer>
          <ElementContainer>
            <Title>사업장소재지</Title>
            <Element>{sellerInfo.businessAddress}</Element>
          </ElementContainer>
          <ElementContainer>
            <Title>고객센터 전화번호</Title>
            <Element>{sellerInfo.customerCenter}</Element>
          </ElementContainer>
          <ElementContainer>
            <Title>E-mail</Title>
            <Element>{sellerInfo.email}</Element>
          </ElementContainer>
          <ElementContainer>
            <Title>사업자 등록번호</Title>
            <Element>{sellerInfo.registrationNum}</Element>
          </ElementContainer>
        </Content>
      </SellerContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
const DeliveryContainer = styled.div`
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;
const ElementContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  padding: 15px 0px;
`;
const Title = styled.span`
  color: gray;
`;
const Element = styled(Title)`
  position: absolute;
  left: 400px;
  color: black;
`;
const ExchangeContainer = styled(DeliveryContainer)`
  margin-top: 100px;
`;
const SellerContainer = styled(ExchangeContainer)``;
export default Delivery;
