import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from '../../elements';
import axios from 'axios';
import theme from '../../theme';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../App';

const Seller = () => {
  const accessToken = getCookie('login_id');
  const navigate = useNavigate();
  const url = theme.apiUrl;
  const [form, setForm] = useState({
    brand: '',
    companyName: '',
    customerCenter: '',
    email: '',
    registrationNum: '',
    representative: '',
    businessAddress: '',
  });

  const handleChange = (e) => {
    const changed = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(changed);
  };

  const onClick = () => {
    if (
      form.brand === '' ||
      form.companyName === '' ||
      form.customerCenter === '' ||
      form.email === '' ||
      form.registrationNum === '' ||
      form.representative === '' ||
      form.businessAddress === ''
    )
      alert('입력되지 않은 정보가 있습니다.');
    else {
      axios
        .post(
          url + 'sellers',
          {
            brand: form.brand,
            companyName: form.companyName,
            customerCenter: form.customerCenter,
            email: form.email,
            registrationNum: parseInt(form.registrationNum),
            representative: form.representative,
            businessAddress: form.businessAddress,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);
          if (response.data.isSuccess) {
            alert('판매자 등록이 완료되었습니다.');
            navigate('/');
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Container>
      <Header>
        <h1>판매자 등록</h1>
        <Ul>
          <li>별도의 검토 없이 바로 판매자 등록이 가능합니다.</li>
          <li>
            판매자 등록이 완료되면 상품 판매 페이지에 상품을 등록할 수 있습니다.
          </li>
        </Ul>
      </Header>
      <Content>
        <Input
          label="회사 이름"
          placeholder="오늘의집"
          width="300px"
          margin="20px 60px"
          name="companyName"
          onChange={handleChange}
        />
        <Input
          label="대표자 이름"
          placeholder="집냥이"
          width="300px"
          margin="20px 60px"
          name="representative"
          onChange={handleChange}
        />
        <Input
          label="브랜드 이름"
          placeholder="오늘의집 가구"
          width="300px"
          margin="20px 60px"
          name="brand"
          onChange={handleChange}
        />
        <Input
          label="고객센터"
          placeholder="xxx-xxx-xxxx"
          width="300px"
          margin="20px 60px"
          name="customerCenter"
          onChange={handleChange}
        />
        <Input
          label="이메일"
          placeholder="abc@ohou.se"
          width="300px"
          margin="20px 60px"
          name="email"
          onChange={handleChange}
        />
        <Input
          label="사업자 등록번호"
          placeholder="123"
          width="300px"
          margin="20px 60px"
          name="registrationNum"
          onChange={handleChange}
          type="number"
        />
        <Input
          label="사업장소재지"
          width="300px"
          margin="20px 60px"
          name="businessAddress"
          onChange={handleChange}
        />
      </Content>
      <Footer>
        <Button width="150px" onClick={onClick}>
          등록하기
        </Button>
      </Footer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 60px;
  background-color: white;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  padding: 50px;
`;
const Ul = styled.ul`
  font-size: 18px;
  margin-top: 30px;
  padding: 0px;
  margin: 0px;
  margin-top: 20px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
export default Seller;
