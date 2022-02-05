import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import { SelectedOption } from '.'
import { useDispatch, useSelector } from 'react-redux'
import { addOption, removeOption } from '../../../reducer/product'

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

const Option = () => {
  const [price, setPrice] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const dispatch = useDispatch()
  const selectedOption = useSelector((state) => state.product.selectedOption)

  const onOptionSelected = (e) => {
    const value = e.target.value
    const id = $('#select').val(`${value}`)[0].selectedIndex
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
    //상품 가격을 따로 배열에 저장
    let arr = []
    mockOptions.map((data) => {
      arr.push(data.price)
    })
    setPrice(arr)
  }, [])

  useEffect(() => {
    console.log(selectedOption)
    console.log(typeof selectedOption)
    let total = 0
    selectedOption &&
      selectedOption.map((data) => {
        total += data.price * data.num
      })
    setTotalPrice(total)
  }, [selectedOption])

  return (
    <Container>
      <NamePrice>
        <Company>폴인퍼니</Company>
        <Name>[연휴특가] 감성으로 채운 세라믹식탁/식탁의자 모음전</Name>
        <Review>1093개 리뷰</Review>
        <Price>188,000원</Price>
      </NamePrice>
      <SelectedView>
        <Selected id="select" onChange={onOptionSelected}>
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
  display: flex;
  flex-direction: column;
`
const NamePrice = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid #eeeeee;
`
const Company = styled.span`
  color: gray;
  margin-bottom: 5px;
`
const Name = styled.h3``
const Review = styled.span`
  font-weight: bold;
  font-size: 15px;
  color: ${(props) => props.theme.mainColor};
`
const Price = styled.span`
  font-weight: bold;
  font-size: 30px;
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
  margin-top: ${(props) =>
    props.isShowed ? '-400px' : ''}; //임시로 상품 선택창 열렸을 때 마진 부여
`
const PriceLabel = styled.span`
position
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
export default Option
