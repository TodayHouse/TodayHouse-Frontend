import React from "react";
import styled from "styled-components";
import Page from "react-js-pagination";
import "../css/pagination.css";

//totalItems를 props로 받을 예정
const Pagination = ({ callApi, page, setPage, totalItemsCount }) => {
    const handlePageChange = (page) => {
        setPage(page);
        callApi(page);
    };

    return (
        <PaginationContainer>
            <Page
                innerClass="paginationBtn"
                activeClass="active"
                itemClass="item"
                itemClassPrev="prev"
                itemClassNext="next"
                activePage={page}
                totalItemsCount={totalItemsCount}
                itemsCountPerPage={1}
                pageRangeDisplayed={9}
                firstPageText={""}
                lastPageText={""}
                prevPageText={"<"}
                nextPageText={">"}
                onChange={handlePageChange}
            />
        </PaginationContainer>
    );
};

const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;
export default Pagination;
