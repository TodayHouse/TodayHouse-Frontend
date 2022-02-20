import styled from "styled-components";

const Icon = ({color, children}) => {
    return (
        <StyledIcon background-image = {color}>{children}</StyledIcon>
    )
}

const StyledIcon = styled.div`
    height : 3.5rem;
    width : 3.5rem;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 4rem;
    color : white;
    cursor : pointer;
    background-image : ${(props) => props.background};
    svg {
        width : 1.5rem;
        height : 1.5rem;
    }
`;
//svg : Scalable Vector Graphics. 확대시에도 품질 떨어지지 않음
export default Icon;