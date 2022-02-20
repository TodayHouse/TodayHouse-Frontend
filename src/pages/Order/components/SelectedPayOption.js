import React from "react"
import styled from "styled-components"

const cardType = [
  "우리카드",
  "KB국민카드",
  "현대카드",
  "롯데카드",
  "신한카드",
  "씨티카드",
  "비씨카드",
  "삼성카드",
  "하나카드",
  "NH농협카드",
  "카카오뱅크카드",
]
const payMonth = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const bonus = [
  {
    title: "카드 결제 혜택",
    content:
      "- 삼성 갤럭시탭 S8 사전판매, 우리카드/롯데카드 결제 시 5% 즉시할인(최대 3만원), 2/10~15",
  },
  {
    title: "",
    content:
      "- 현금으로 결제한 모든 금액은 우리은행과 채무지급보증계약을 체결하여 고객님의 안전거래를 보장하고 있습니다.",
  },
  {
    title: "카카오페이 결제 혜택",
    content:
      "- 카카오페이 내 KB국민카드로 20만원/10만원 이상 결제 시 1만원/5천원 즉시할인, 기간 내 각 1회 사용가능",
    content2: "- 2/1~2/20",
  },
  {
    title: "차이 결제 혜택",
    content: "- 차이 부스트 혜택 : 8만원 이상 결제 시 7,000원 캐시백, 2/1~2/28",
    content2:
      "- 차이 신용카드 전용 부스트 : 10만원 이상 결제 시 1만원 캐시백, 2/9~2/28",
  },
  {
    title: "페이코 결제 혜택",
    content: "- 페이코포인트로 결제 시 5% 적립 (건당 최대 2천원)",
    content2: "- 2/1~2/13",
  },
  {
    title: "네이버페이 결제 혜택",
    content:
      "- 네이버쇼핑을 통해 방문 시 1%적립(그 외 0.2%) / 네이버페이포인트로 결제 시 1.5%적립 + 소득공제",
    content2: "- 2/1~2/28",
  },
  {
    title: "토스페이 결제 혜택",
    content: "- 토스 생애 첫결제 시 1,000원 캐시백 (1만원 이상 결제 시)",
    content2: "- 2/1~2/28",
  },
  { title: "", content: "", content2: "" },
]

const SelectedPayOption = (props) => {
  const selected = props.selected

  return (
    <div>
      {/* 결제수단으로 카드를 선택했을 때 selectbox 보이게 함 */}
      {selected === 0 ? (
        <Container>
          <SelectCard defaultValue="default">
            <option value="default" disabled>
              카드를 선택해주세요.
            </option>
            {cardType.map((data, idx) => (
              <option value={idx}>{data}</option>
            ))}
          </SelectCard>
          <SelectCard defaultValue="default">
            <option value="default">일시불</option>
            {payMonth.map((data, idx) => (
              <option value={idx}>{data}개월</option>
            ))}
          </SelectCard>
        </Container>
      ) : (
        ""
      )}
      {selected === 7 ? (
        ""
      ) : (
        <ContentContainer>
          <Title>{bonus[selected].title}</Title>
          <Content>{bonus[selected].content}</Content>
          <Content2>{bonus[selected].content2}</Content2>
        </ContentContainer>
      )}
    </div>
  )
}
const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
const SelectCard = styled.select`
  margin-top: 10px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #cccccc;
  border-radius: 4px;
`
const ContentContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  background-color: #f4f4f4;
  border-radius: 4px;
`
const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`
const Content = styled.span``
const Content2 = styled.span``
export default SelectedPayOption
