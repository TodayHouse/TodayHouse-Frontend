import React from 'react';
import styled from 'styled-components';

const SelectedCategoryElement = (props) => {
  const { children, onClick, id } = props;
  return (
    <Element id={id} onClick={onClick}>
      {id.includes('allColor') || id === 'wallColor' || id === 'floorColor' ? (
        <ColorContainer>
          <Color bg={children} />
          {id.includes('allColor') ? '' : id === 'wallColor' ? '벽' : '바닥'}
        </ColorContainer>
      ) : (
        children
      )}
      <img
        alt="close"
        style={{ marginLeft: 8 }}
        width="15px"
        height="15px"
        src={require('../../../img/roundX.png')}
      />
    </Element>
  );
};

const Element = styled.button`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 8px;
  margin: 0px 2px;
  color: white;
  border-radius: 24px;
  border: none;
  background-color: ${(props) => props.theme.mainColor};
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.hoverMainColor};
  }
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Color = styled.div`
  background-color: ${(props) => props.bg};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin: 0px 5px;
`;
export default SelectedCategoryElement;
