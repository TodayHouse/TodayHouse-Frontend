import React from "react";
import styled from "styled-components";

//스토리 페이지 상단에 있는 필터바 element
const FilterButton = (props) => {
    const { onMouseOver, onMouseLeave, name, children } = props;
    return (
        <Container>
            <Select onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                {name}
                <img alt="arrow" src={require("../img/ExpandMoreArrow.png")} />
            </Select>
            {children}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: visible;
    margin: 0px 4px;
    position: relative;
`;
const Select = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eeeeee;
    height: 40px;
    border: none;
    color: #777777;
    font-weight: bold;
    font-size: 16px;
    padding: 0px 8px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #dddddd;
    }
`;
export default FilterButton;
