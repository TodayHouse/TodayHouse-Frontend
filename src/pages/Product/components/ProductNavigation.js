import React, { useState } from 'react';
import styled from 'styled-components';
import { NavbarElement } from '../elements';
import { Link } from 'react-scroll';

const element = ['상품정보', '리뷰', '문의', '배송/환불', '추천'];
const num = ['', '59,781', '56,354', '', ''];
const linkTo = ['productInfo', 'review', 'ask', 'delivery', 'recommend'];

const ProductNavigation = () => {
  const [selectedElem, setSelectedElem] = useState(null); //선택된 navbar element의 id

  const onNavbarSelect = (idx) => {
    //선택된 navbar element의 id 저장 후 props로 하위 컴포넌트에 넘겨줌
    setSelectedElem(idx);
  };

  return (
    <Container>
      <Nav>
        {element.map((data, idx) => (
          //해당 id를 가진 컴포넌트로 이동 후 -70만큼 padding(navbar에 가려짐)
          <Link
            key={idx}
            style={{ width: '20%' }}
            to={linkTo[idx]}
            offset={-150}
          >
            <NavbarElement
              id={idx}
              text={data + '  ' + num[idx]}
              onClick={() => {
                onNavbarSelect(idx);
              }}
              selectedElem={selectedElem}
            />
          </Link>
        ))}
      </Nav>
    </Container>
  );
};
const Container = styled.nav`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border: 1px solid #dddddd;
  width: 100%;
  position: sticky;
  top: 70px;
  z-index: 1;
`;
const Nav = styled.ol`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 767px;
  font-size: 16px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
`;
export default ProductNavigation;
