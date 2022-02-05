import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeNum, removeOption } from '../../../reducer/product'

const SelectedOption = (props) => {
  const [num, setNum] = useState([])
  const [selectedNum, setSelectedNum] = useState(1)
  const dispatch = useDispatch()
  const id = props.id

  const onChange = (e) => {
    setSelectedNum(e.target.value)
  }

  useEffect(() => {
    //수량 변경 후 스토어에 저장
    dispatch(changeNum({ id, num: selectedNum }))
  }, [selectedNum])

  useEffect(() => {
    let arr = []
    for (let i = 1; i <= 100; i++) {
      arr.push(i)
    }
    setNum(arr)
  }, [])

  return (
    <Container>
      <Name>
        <span>{props.name}</span>
        <Close
          src={require('../../../img/x.png')}
          onClick={() => {
            dispatch(removeOption(id))
          }}
        />
      </Name>
      <Price>
        <div>
          <Num id="select" onChange={onChange}>
            {num.map((data, idx) => (
              <option key={idx} value={data}>
                {data}
              </option>
            ))}
          </Num>
        </div>
        <span>{parseInt(props.price * selectedNum).toLocaleString()}원</span>
      </Price>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #eeeeee;
  padding: 10px;
  font-size: 16px;
`
const Name = styled.div`
  display: flex;
  justify-content: space-between;
`
const Close = styled.img`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`
const Num = styled.select`
  width: 100px;
  height: 30px;
`
const Price = styled(Name)`
  margin-top: 20px;
  font-weight: bold;
`
export default SelectedOption
