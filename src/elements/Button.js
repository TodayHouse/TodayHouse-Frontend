import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { children, onClick, type } = props;
    return (
        <Btn {...props} onClick={onClick}>
            {children}
        </Btn>
    );
};

const Btn = styled.button`
    min-width: 120px;
    width: ${(props) => props.width};
    background-color: ${(props) => props.theme.mainColor};
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding: 8px 16px;
    margin: ${(props) => props.margin};
    &:hover {
        background-color: ${(props) => props.theme.hoverMainColor};
    }
`;
export default Button;
