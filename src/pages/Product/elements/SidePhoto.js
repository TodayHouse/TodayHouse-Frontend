import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeImg } from '../../../redux/reducer/product';

const SidePhoto = (props) => {
  const { src } = props;
  const dispatch = useDispatch();

  const onMouseOver = () => {
    dispatch(changeImg(src)); //현재 커서가 위치한 이미지의 주소를 redux store에 저장
  };
  return <Image src={src} onMouseOver={onMouseOver} />;
};

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin: 5px 0px;
  &:hover {
    border: 2px solid ${(props) => props.theme.mainColor};
    cursor: pointer;
  }
`;

export default SidePhoto;
