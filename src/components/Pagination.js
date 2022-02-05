import React, { useState } from 'react'
import styled from 'styled-components'
import Page from 'react-js-pagination'
import '../css/pagination.css'

const Pagination = () => {
  const [page, setPage] = useState(1)

  const handlePageChange = (page) => {
    setPage(page)
  }
  return (
    <PaginationContainer>
      <Page
        innerClass="paginationBtn"
        activeClass="active"
        itemClass="item"
        itemClassPrev="prev"
        itemClassNext="next"
        activePage={page}
        totalItemsCount={51}
        itemsCountPerPage={5}
        pageRangeDisplayed={9}
        firstPageText={''}
        lastPageText={''}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={handlePageChange}
      />
    </PaginationContainer>
  )
}

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
export default Pagination
