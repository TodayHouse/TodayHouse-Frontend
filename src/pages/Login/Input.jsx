import styled from "styled-components";

const Input =  ({type, placeholder}) => {
    return (
        <StyledInput type = {type} placeholder={placeholder} />
    )
}

const StyledInput = styled.input`
    background : rgba(255, 255, 255, 0.15);
    box-shadow : 0 8px 32px 0 rgba(0, 0, 0, 0.2);
    border-radius : 2rem;
    width : 80%;
    height : 3rem;
    padding : 1rem;
    border : none;
    outline : none;
    right : 30;
    color : #3c354e;
    font-size : 14px;
    font-weight : bold;

   
`;
export default Input;