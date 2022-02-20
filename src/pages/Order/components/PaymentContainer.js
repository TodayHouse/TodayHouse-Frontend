import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Title } from '../elements'
import { SelectedPayOption } from '../components'
import $ from 'jquery'
import theme from '../../../theme'

const payment = [
  {
    img:
      'https://image.ohou.se/i/bucketplace-v2-development/pg/img_card.png?w=144&h=144&c=c&webp=1',
    name: '카드',
    bonus: '',
  },
  {
    img:
      'https://image.ohou.se/i/bucketplace-v2-development/pg/img_vbank.png?w=144&h=144&c=c&webp=1',
    name: '무통장입금',
    bonus: '',
  },
  {
    img:
      'https://image.ohou.se/i/bucketplace-v2-development/pg/img_kakaopay.png?w=144&h=144&c=c&webp=1',
    name: '카카오페이',
    bonus: '최대 1만원할인',
  },
  {
    img:
      'https://image.ohou.se/i/bucketplace-v2-development/pg/img_chai.png?w=144&h=144&c=c&webp=1',
    name: '차이',
    bonus: '최대 7천원적립',
  },
  {
    img:
      'https://image.ohou.se/i/bucketplace-v2-development/pg/img_payco.png?w=144&h=144&c=c&webp=1',
    name: '페이코',
    bonus: '최대 2천원적립',
  },
  {
    img:
      'https://image.ohou.se/i/bucketplace-v2-development/pg/img_naver.png?w=144&h=144&c=c&webp=1',
    name: '네이버페이',
    bonus: '최대2.5%적립',
  },
  {
    img:
      'https://image.ohou.se/i/bucketplace-v2-development/pg/img_toss.png?w=144&h=144&c=c&webp=1',
    name: '토스',
    bonus: '최대 1천원적립',
  },
  {
    img:
      'https://image.ohou.se/i/bucketplace-v2-development/pg/img_phone.png?w=144&h=144&c=c&webp=1',
    name: '핸드폰',
    bonus: '',
  },
]
const PaymentContainer = () => {
  //결제 수단이 선택되었는지 여부
  const [paySelected, setPaySelected] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  const [selectedIdx, setSelectedIdx] = useState(0)

  const onPaySelect = (idx) => {
    setSelectedIdx(idx)
    let list = [false, false, false, false, false, false, false, false]
    list[idx] = true
    setPaySelected(list)
  }

  useEffect(() => {
    //결제수단이 선택되면 색이 바뀜
    paySelected.forEach((data, idx) => {
      if (data) {
        $(`#pay${idx}`).css('border', `2px solid ${theme.mainColor}`)
        $(`#pay${idx}`).css('background-color', '#e6f4ff')
      } else {
        $(`#pay${idx}`).css('border', '1px solid #eeeeee')
        $(`#pay${idx}`).css('background-color', '')
      }
    })
  }, [paySelected])

  return (
    <Container>
      <Title>결제 수단</Title>
      <ContentContainer>
        <SelectBox>
          {payment.map((data, idx) => (
            <SelectCard
              id={'pay' + idx}
              onClick={() => {
                onPaySelect(idx)
              }}
            >
              <Image src={data.img} />
              <Name>{data.name}</Name>
              <Bonus>{data.bonus}</Bonus>
            </SelectCard>
          ))}
        </SelectBox>
        <SelectedPayOption selected={selectedIdx} />
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`
const ContentContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`
const SelectBox = styled.div`
  display: flex;
`
const SelectCard = styled.div`
  width: 12.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #dddddd;
  &:hover {
    cursor: pointer;
  }
`
const Image = styled.img`
  width: 70px;
  height: 70px;
`
const Name = styled.span`
  font-size: 16px;
`
const Bonus = styled.span`
  min-height: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.mainColor};
`
export default PaymentContainer
