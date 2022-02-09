import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { SelectedOption } from '.'
import $ from 'jquery'
import { useDispatch, useSelector } from 'react-redux'
import { addOption } from '../../../redux/reducer/product'

const mockOptions = [
  {
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1400(직각)',
    price: 118000,
  },
  {
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1400(타원)',
    price: 128000,
  },
  {
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1600(직각)',
    price: 138000,
  },
  {
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1600(타원)',
    price: 148000,
  },
  {
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1800(직각)',
    price: 158000,
  },
  {
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1800(타원)',
    price: 168000,
  },
  {
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 2000(직각)',
    price: 178000,
  },
  {
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 2000(타원)',
    price: 188000,
  },
  {
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 2200(직각)',
    price: 198000,
  },
]

const OptionSelectView = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [price, setPrice] = useState([])
  const selectedOption = useSelector((state) => state.product.selectedOption)
  const dispatch = useDispatch()

  const onOptionSelected = (e) => {
    const value = e.target.value
    const id = $('#selectOption').val(`${value}`)[0].selectedIndex
    dispatch(
      addOption({
        name: e.target.value,
        price: price[id - 1],
        id: id,
        num: 1,
      }),
    )
  }

  useEffect(() => {
    let total = 0
    selectedOption &&
      selectedOption.map((data) => {
        total += data.price * data.num
      })
    setTotalPrice(total)
  }, [selectedOption])

  useEffect(() => {
    //상품 가격을 따로 배열에 저장
    let arr = []
    mockOptions.map((data) => {
      arr.push(data.price)
    })
    setPrice(arr)
  }, [])

  return (
    <Container>
      <div style={{ overflow: 'auto' }}>
        <SelectedView>
          <Selected id="selectOption" onChange={onOptionSelected}>
            <option disabled selected>
              옵션을 선택하세요.
            </option>
            {mockOptions.map((data, idx) => (
              <option id={'option' + idx} value={data.name}>
                {data.name + '(' + data.price.toLocaleString() + '원)'}
              </option>
            ))}
          </Selected>
        </SelectedView>
        <SelectedOptionView id="selectView">
          {selectedOption &&
            selectedOption.map((data, idx) => (
              <SelectedOption
                key={idx}
                name={data.name}
                price={data.price}
                id={data.id}
              />
            ))}
        </SelectedOptionView>
      </div>
      <PurchaseContainer>
        <InnerContainer>
          <PriceLabel>주문금액</PriceLabel>
          <PurchasePrice>{totalPrice.toLocaleString()}원</PurchasePrice>
        </InnerContainer>
        <InnerContainer>
          <MyBucketBtn>장바구니</MyBucketBtn>
          <PurchaseBtn>바로구매</PurchaseBtn>
        </InnerContainer>
      </PurchaseContainer>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Selected = styled.select`
  width: 100%;
  height: 50px;
  border: none;
  font-size: 16px;
`
const SelectedView = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  margin-top: 20px;
  width: 100%;
`
const SelectedOptionView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const PriceLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
`
const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`
const PurchasePrice = styled.span`
  font-size: 20px;
  font-weight: bold;
`
const MyBucketBtn = styled.button`
  width: 49%;
  padding: 15px 0px;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 4px;
  background-color: white;
  color: ${(props) => props.theme.mainColor};
  font-size: 20px;
`
const PurchaseBtn = styled(MyBucketBtn)`
  background-color: ${(props) => props.theme.mainColor};
  color: white;
  &:hover {
    background-color: ${(props) => props.theme.hoverMainColor};
  }
`

export default OptionSelectView
