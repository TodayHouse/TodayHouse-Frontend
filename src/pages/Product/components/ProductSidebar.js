import React from "react";
import styled from "styled-components";
import { OptionSelectView } from ".";
const ProductSidebar = () => {
    return (
        <Container>
            <OptionSelectView
                parentId="selectStickyParentOption"
                childId="selectStickyChildOption"
            />
        </Container>
    );
};

const Container = styled.div`
    width: 300px;
    height: calc(100vh - 50px);
    position: sticky;
    top: 120px;
`;

export default ProductSidebar;
