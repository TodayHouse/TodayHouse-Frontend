import React from "react"
import styled from "styled-components"
import $ from "jquery"
import { useDispatch } from "react-redux"
import { changeCategoryList } from "../../../redux/reducer/story"

//필터바 상세 옵션 박스
const DetailBox = (props) => {
  const dispatch = useDispatch()
  const { id, onMouseOver, onMouseLeave, options, selected } = props
  return (
    <Container
      num={options.length}
      id={id}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div style={{ overflow: "auto" }}>
        {options.map((data, idx) => (
          <Detail
            onClick={() => {
              dispatch(changeCategoryList({ name: id, data }))
              $(`#${selected}`).show()
            }}
          >
            {data}
          </Detail>
        ))}
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 200px;
  height: ${(props) => props.num * 50 - 1}px;
  max-height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
  position: absolute;
  top: 40px;
`
const Detail = styled.div`
  width: 200px;
  height: 50px;
  padding: 16px;
  color: #555555;
  &:hover {
    background-color: #dbf2ff;
  }
`
export default DetailBox
