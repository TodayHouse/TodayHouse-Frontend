import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const { width, fontSize, margin, placeholder, name, onChange, label, type } =
    props;
  return (
    <Container>
      <LabelContainer>
        <Label>{label}</Label>
      </LabelContainer>
      <InputBox
        {...props}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        type={type}
      />
    </Container>
  );
};

Input.defaultProps = {
  width: '',
  fontSize: '18px',
  margin: '',
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const LabelContainer = styled.div`
  width: 100px;
`;
const Label = styled.span`
  font-size: 16px;
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
