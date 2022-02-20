import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Input, PhoneNumInput, Title } from '../elements'
import { Modal } from '../../../components'
import DaumPostCode from 'react-daum-postcode'
import $ from 'jquery'

const request = [
  '배송 시 요청 사항을 선택해주세요',
  '부재 시 문 앞에 놓아주세요',
  '배송 전에 미리 연락 주세요',
  '부재 시 경비실에 맡겨 주세요',
  '부재 시 전화 주시거나 문자 남겨 주세요',
  '직접입력',
]

const DestinationContainer = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [zonecode, setZoneCode] = useState('')
  const [address, setAdress] = useState('')

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  const onCompletePost = (data) => {
    //주소 찾기 완료했을 때
    closeModal()
    setZoneCode(data.zonecode)
    setAdress(data.address + ` (${data.bname}) ` + data.buildingName)
  }

  const onSelectRequest = (e) => {
    //배송 요청사항 직접 입력을 눌렀을 때 입력창을 띄움
    if (e.target.value === '5') $('#requestMsg').show()
    else {
      $('#requestMsg').hide()
      $('#requestMsg').val('')
    }
  }

  useEffect(() => {
    $('#requestMsg').hide()
  }, [])

  return (
    <Container>
      <Title>
        배송지
        <FillText>위와 동일하게 채우기</FillText>
      </Title>
      <ContentContainer>
        <Input label="받는 사람" />
        <PhoneNumInput label="연락처" button={false} />
        <AddressContainer>
          <LabelContainer>
            <Label>주소</Label>
          </LabelContainer>
          <AddressFindContainer>
            <div style={{ width: '100%', display: 'flex' }}>
              <AddressFindBtn onClick={openModal}>주소찾기</AddressFindBtn>
              <Zonecode>
                <ZonecodeText>{zonecode}</ZonecodeText>
              </Zonecode>
            </div>
            <Address>
              <AddressText>{address}</AddressText>
            </Address>
            <DetailAddress placeholder="상세주소 입력" />
            <DefaultPlace>
              <Checkbox type="checkbox" />
              <DefaultPlaceText>기본 배송지로 저장</DefaultPlaceText>
            </DefaultPlace>
          </AddressFindContainer>
        </AddressContainer>
        <Request onChange={onSelectRequest}>
          {request.map((data, idx) => (
            <option value={idx}>{data}</option>
          ))}
        </Request>
        <RequestMsg
          id="requestMsg"
          placeholder="배송 요청 사항을 입력해주세요."
        />
      </ContentContainer>
      <Modal
        width={600}
        height={600}
        modalOpen={modalOpen}
        closeModal={closeModal}
      >
        <DaumPostCode
          style={{ width: 600, height: 600 }}
          autoClose
          onComplete={onCompletePost}
        />
      </Modal>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`

const ContentContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
const FillText = styled.span`
  position: absolute;
  right: 0;
  color: ${(props) => props.theme.mainColor};
  font-size: 20px;
  font-weight: bold;
  &:hover {
    color: ${(props) => props.theme.hoverMainColor};
    cursor: pointer;
  }
`
const AddressContainer = styled.div`
  margin-top: 10px;
  display: flex;
`
const AddressFindContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const LabelContainer = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
`
const Label = styled.span`
  font-size: 16px;
  color: gray;
`
const AddressFindBtn = styled.button`
  font-size: 18px;
  font-weight: bold;
  width: 100px;
  padding: 8px;
  background-color: white;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.mainColor};
  border-radius: 4px;
  color: ${(props) => props.theme.mainColor};
  &:hover {
    background-color: #e6f4ff;
  }
`
const Zonecode = styled.div`
  margin: 0px 10px;
  padding: 10px 20px;
  width: 190px;
  min-height: 50px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #f4f4f4;
  font-size: 18px;
`
const ZonecodeText = styled.span``
const Address = styled.div`
  margin-top: 10px;
  padding: 10px 20px;
  width: 600px;
  min-height: 50px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #f4f4f4;
  font-size: 18px;
`
const AddressText = styled.span``
const DetailAddress = styled.input`
  margin-top: 10px;
  padding: 10px 20px;
  width: 600px;
  min-height: 50px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: white;
  font-size: 18px;
`
const RequestMsg = styled.textarea`
  margin-top: 10px;
  padding: 10px 20px;
  width: 700px;
  min-height: 50px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: white;
  font-size: 18px;
  word-break: break-all;
`
const DefaultPlace = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`
const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`
const DefaultPlaceText = styled.div`
  margin-left: 10px;
  font-size: 18px;
`
const Request = styled.select`
  width: 700px;
  margin-top: 30px;
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 18px;
`
export default DestinationContainer
