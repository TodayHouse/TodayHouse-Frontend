import React from "react";
import styled from "styled-components";

const Input = (props) => {
    const { label, onChange, name, id } = props;
    return (
        <Container>
            <LabelContainer>
                <Label>{label}</Label>
            </LabelContainer>
            <InputBox id={id} name={name} onChange={onChange} />
        </Container>
    );
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
    color: gray;
`;
const InputBox = styled.input`
    width: 300px;
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 10px 0px;
`;
export default Input;
