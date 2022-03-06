import styled from "styled-components";

const Button = ({content}) => {
    return (
        <StyledButton>
            {content}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    background : white;
    box-shadow : 0 8px 32px 0 rgba(0, 0, 0, 0.25);
    text-transform : uppercase;
    letter-spacing : 0.2rem;
    width : 80%;
    height : 3rem;
    border : none;
    color : #3c354e;
    border : 2px solid;
    border-color : #9accf5;
    border-radius : 2rem;
    cursor : pointer;
    font-size : 15px;
    font-weight : bold;
    &:focus {
        display : inline-block;
        box-shadow : 0 0 0 0.2rem #4f4f4f;
        backdrop-filter : blur(12rem);
        border-radius : 2rem;
    }
`;


export default Button;