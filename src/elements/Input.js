import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const { label, center } = props;

  return (
    <Container center={center}>
      <LabelContainer label={label}>
        <Label>{label}</Label>
      </LabelContainer>
      <InputBox {...props} />
    </Container>
  );
};

Input.defaultProps = {
  width: '',
  fontSize: '18px',
  margin: '',
  label: '',
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.center ? 'center' : '')};
`;
const LabelContainer = styled.div`
  min-width: ${(props) => (props.label === '' ? '' : '120px')};
`;
const Label = styled.span`
  font-size: 18px;
  color: #555;
`;
const InputBox = styled.input`
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  padding: 8px 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin: ${(props) => props.margin};
`;
export default Input;
