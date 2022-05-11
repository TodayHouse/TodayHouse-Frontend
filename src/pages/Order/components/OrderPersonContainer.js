import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { EmailInput, Input, PhoneNumInput, Title } from "../elements";
import { useDispatch } from "react-redux";
import { dispatchSetOrderForm } from "../../../redux/reducer/order";
import { Modal } from "../../../components";
import DaumPostCode from "react-daum-postcode";
import {
    dispatchSetDestForm,
    dispatchSetMemo,
} from "../../../redux/reducer/order";

const OrderPersonContainer = () => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const [destForm, setDestForm] = useState({
        receiver: "",
        phoneNumPrefix: "010",
        phoneNumSuffix: "",
        address1: "",
        address2: "",
        zipCode: "",
    });
    const [memo, setMemo] = useState("");

    const [orderForm, setOrderForm] = useState({
        name: "",
        email: "",
        emailSuffix: "",
        phoneNumPrefix: "010",
        phoneNumSuffix: "",
    });

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const onCompletePost = (data) => {
        //주소 찾기 완료했을 때
        closeModal();
        setDestForm({
            ...destForm,
            address1: data.address + ` (${data.bname}) ` + data.buildingName,
            zipCode: data.zonecode,
        });
    };

    const handleDestChange = (e) => {
        const changed = {
            ...destForm,
            [e.target.name]: e.target.value,
        };
        setDestForm(changed);
    };

    // form값을 불러오고 바뀐 값만 form에 새로 대체해줌
    const handleOrderChange = (e) => {
        const changed = {
            ...orderForm,
            [e.target.name]: e.target.value,
        };
        setOrderForm(changed);
    };

    const handleMemo = (e) => {
        setMemo(e.target.value);
    };

    const fillText = () => {
        document.getElementById("destName").value = orderForm.name;
        document.getElementById("prefixNum").value = orderForm.phoneNumPrefix;
        document.getElementById("suffixNum").value = orderForm.phoneNumSuffix;
    };

    useEffect(() => {
        const form = {
            receiver: destForm.receiver,
            receiverPhoneNumber:
                destForm.phoneNumPrefix + destForm.phoneNumSuffix,
            address1: destForm.address1,
            address2: destForm.address2,
            zipCode: destForm.zipCode,
        };
        dispatch(dispatchSetDestForm(form));
    }, [destForm]);

    useEffect(() => {
        dispatch(dispatchSetMemo(memo));
    }, [memo]);

    useEffect(() => {
        console.log(orderForm);
        const form = {
            sender: orderForm.name,
            senderPhoneNumber:
                orderForm.phoneNumPrefix + orderForm.phoneNumSuffix,
        };
        dispatch(dispatchSetOrderForm(form));
    }, [orderForm]);

    return (
        <Fragment>
            <Container>
                <Title>주문자</Title>
                <ContentContainer>
                    <Input
                        label="이름"
                        name="name"
                        onChange={handleOrderChange}
                    />
                    <EmailInput
                        onChange={handleOrderChange}
                        namePrefix="email"
                        nameSuffix="emailSuffix"
                    />
                    <PhoneNumInput
                        label="휴대전화"
                        namePrefix="phoneNumPrefix"
                        nameSuffix="phoneNumSuffix"
                        onChange={handleOrderChange}
                    />
                </ContentContainer>
            </Container>
            <DestContainer>
                <Title>
                    배송지
                    <FillText onClick={fillText}>위와 동일하게 채우기</FillText>
                </Title>
                <ContentContainer>
                    <Input
                        id="destName"
                        onChange={handleDestChange}
                        name="receiver"
                        label="받는 사람"
                    />
                    <PhoneNumInput
                        id1="prefixNum"
                        id2="suffixNum"
                        label="연락처"
                        namePrefix="phoneNumPrefix"
                        nameSuffix="phoneNumSuffix"
                        onChange={handleDestChange}
                    />
                    <AddressContainer>
                        <LabelContainer>
                            <Label>주소</Label>
                        </LabelContainer>
                        <AddressFindContainer>
                            <div style={{ width: "100%", display: "flex" }}>
                                <AddressFindBtn onClick={openModal}>
                                    주소찾기
                                </AddressFindBtn>
                                <Zonecode>
                                    <ZonecodeText>
                                        {destForm.zipCode}
                                    </ZonecodeText>
                                </Zonecode>
                            </div>
                            <Address>
                                <AddressText>{destForm.address1}</AddressText>
                            </Address>
                            <DetailAddress
                                name="address2"
                                onChange={handleDestChange}
                                placeholder="상세주소 입력"
                            />
                            <DefaultPlace>
                                <Checkbox type="checkbox" />
                                <DefaultPlaceText>
                                    기본 배송지로 저장
                                </DefaultPlaceText>
                            </DefaultPlace>
                        </AddressFindContainer>
                    </AddressContainer>
                    <RequestMsg
                        onChange={handleMemo}
                        placeholder="배송 요청 사항을 입력해주세요."
                    />
                </ContentContainer>
                <Modal
                    width={600}
                    height={600}
                    modalOpen={modalOpen}
                    closeModal={closeModal}>
                    <DaumPostCode
                        style={{ width: 600, height: 600 }}
                        autoClose
                        onComplete={onCompletePost}
                    />
                </Modal>
            </DestContainer>
        </Fragment>
    );
};
const Container = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`;
const DestContainer = styled(Container)`
    margin-top: 80px;
`;
const ContentContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;
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
`;
const AddressContainer = styled.div`
    margin-top: 10px;
    display: flex;
`;
const AddressFindContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const LabelContainer = styled.div`
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
`;
const Label = styled.span`
    font-size: 16px;
    color: gray;
`;
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
`;
const Zonecode = styled.div`
    margin: 0px 10px;
    padding: 10px 20px;
    width: 190px;
    min-height: 50px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    background-color: #f4f4f4;
    font-size: 18px;
`;
const ZonecodeText = styled.span``;
const Address = styled.div`
    margin-top: 10px;
    padding: 10px 20px;
    width: 600px;
    min-height: 50px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    background-color: #f4f4f4;
    font-size: 18px;
`;
const AddressText = styled.span``;
const DetailAddress = styled.input`
    margin-top: 10px;
    padding: 10px 20px;
    width: 600px;
    min-height: 50px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    background-color: white;
    font-size: 18px;
`;
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
`;
const DefaultPlace = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
`;
const Checkbox = styled.input`
    width: 20px;
    height: 20px;
`;
const DefaultPlaceText = styled.div`
    margin-left: 10px;
    font-size: 18px;
`;
const Request = styled.select`
    width: 700px;
    margin-top: 30px;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    font-size: 18px;
`;
export default OrderPersonContainer;
