import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import SelectBoxElement from './SelectBoxElement'

const mockOptions = [
  {
    idx: 1,
    img:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMTZfOTcg%2FMDAxNTM5NjUxNDA1MjQ2.cuYLfg63fR2cC2aRZNFFMolQdCZcex5GAt8wg230rzQg.nPJKQPUIwJf5c1X8h3xN3i-RcR5sq0vnMg3-J_FV9dsg.JPEG.spadegagu%2F997a36db8472a5e9f86ebe4c2cd0ad0e.jpg&type=a340',
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1400(직각)',
    price: 188000,
  },
  {
    idx: 2,
    img:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMTZfOTcg%2FMDAxNTM5NjUxNDA1MjQ2.cuYLfg63fR2cC2aRZNFFMolQdCZcex5GAt8wg230rzQg.nPJKQPUIwJf5c1X8h3xN3i-RcR5sq0vnMg3-J_FV9dsg.JPEG.spadegagu%2F997a36db8472a5e9f86ebe4c2cd0ad0e.jpg&type=a340',
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1400(타원)',
    price: 188000,
  },
  {
    idx: 3,
    img:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMTZfOTcg%2FMDAxNTM5NjUxNDA1MjQ2.cuYLfg63fR2cC2aRZNFFMolQdCZcex5GAt8wg230rzQg.nPJKQPUIwJf5c1X8h3xN3i-RcR5sq0vnMg3-J_FV9dsg.JPEG.spadegagu%2F997a36db8472a5e9f86ebe4c2cd0ad0e.jpg&type=a340',
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1600(직각)',
    price: 188000,
  },
  {
    idx: 4,
    img:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMTZfOTcg%2FMDAxNTM5NjUxNDA1MjQ2.cuYLfg63fR2cC2aRZNFFMolQdCZcex5GAt8wg230rzQg.nPJKQPUIwJf5c1X8h3xN3i-RcR5sq0vnMg3-J_FV9dsg.JPEG.spadegagu%2F997a36db8472a5e9f86ebe4c2cd0ad0e.jpg&type=a340',
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1600(타원)',
    price: 188000,
  },
  {
    idx: 5,
    img:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMTZfOTcg%2FMDAxNTM5NjUxNDA1MjQ2.cuYLfg63fR2cC2aRZNFFMolQdCZcex5GAt8wg230rzQg.nPJKQPUIwJf5c1X8h3xN3i-RcR5sq0vnMg3-J_FV9dsg.JPEG.spadegagu%2F997a36db8472a5e9f86ebe4c2cd0ad0e.jpg&type=a340',
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1800(직각)',
    price: 188000,
  },
  {
    idx: 6,
    img:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMTZfOTcg%2FMDAxNTM5NjUxNDA1MjQ2.cuYLfg63fR2cC2aRZNFFMolQdCZcex5GAt8wg230rzQg.nPJKQPUIwJf5c1X8h3xN3i-RcR5sq0vnMg3-J_FV9dsg.JPEG.spadegagu%2F997a36db8472a5e9f86ebe4c2cd0ad0e.jpg&type=a340',
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1800(타원)',
    price: 188000,
  },
  {
    idx: 7,
    img:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMTZfOTcg%2FMDAxNTM5NjUxNDA1MjQ2.cuYLfg63fR2cC2aRZNFFMolQdCZcex5GAt8wg230rzQg.nPJKQPUIwJf5c1X8h3xN3i-RcR5sq0vnMg3-J_FV9dsg.JPEG.spadegagu%2F997a36db8472a5e9f86ebe4c2cd0ad0e.jpg&type=a340',
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1400(직각)',
    price: 188000,
  },
  {
    idx: 8,
    img:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMTZfOTcg%2FMDAxNTM5NjUxNDA1MjQ2.cuYLfg63fR2cC2aRZNFFMolQdCZcex5GAt8wg230rzQg.nPJKQPUIwJf5c1X8h3xN3i-RcR5sq0vnMg3-J_FV9dsg.JPEG.spadegagu%2F997a36db8472a5e9f86ebe4c2cd0ad0e.jpg&type=a340',
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1400(타원)',
    price: 188000,
  },
  {
    idx: 9,
    img:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMTZfOTcg%2FMDAxNTM5NjUxNDA1MjQ2.cuYLfg63fR2cC2aRZNFFMolQdCZcex5GAt8wg230rzQg.nPJKQPUIwJf5c1X8h3xN3i-RcR5sq0vnMg3-J_FV9dsg.JPEG.spadegagu%2F997a36db8472a5e9f86ebe4c2cd0ad0e.jpg&type=a340',
    name: '베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1600(직각)',
    price: 188000,
  },
]

const Option = () => {
  const [selected, setSelected] = useState('상품을 선택하세요.')
  const [show, setShow] = useState(false)

  const showSelectBox = () => {
    setShow(!show)
  }

  useEffect(() => {
    console.log(show)
    if (show) $('#selectBox').show()
    else $('#selectBox').hide()
  }, [show])

  return (
    <Container>
      <NamePrice>
        <Company>폴인퍼니</Company>
        <Name>[연휴특가] 감성으로 채운 세라믹식탁/식탁의자 모음전</Name>
        <Review>1093개 리뷰</Review>
        <Price>188,000원</Price>
      </NamePrice>
      <SelectOption onClick={showSelectBox}>
        <span>{selected}</span>
        <img
          width="30px"
          height="30px"
          src={require('../../../img/ExpandArrow.png')}
        />
      </SelectOption>
      <SelectBox id="selectBox">
        {mockOptions.map((data, idx) => (
          <SelectBoxElement
            onClick={() => {
              setSelected(data.name)
              showSelectBox()
            }}
            idx={data.idx}
            img={data.img}
            name={data.name}
            price={data.price}
          />
        ))}
      </SelectBox>
      <PurchaseContainer>
        <InnerContainer>
          <PriceLabel>주문금액</PriceLabel>
          <PurchasePrice>0원</PurchasePrice>
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
const SelectOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`
const SelectBox = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid lightgray;
  border-radius: 4px;
  margin-top: 5px;
  overflow: auto;
`
const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
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
