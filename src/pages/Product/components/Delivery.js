import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { dispatchSellerInfo } from "../../../redux/reducer/product";
import axios from "axios";
import theme from "../../../theme";

const Delivery = (props) => {
    const dispatch = useDispatch();
    const deliveryFee = useSelector((state) => state.product.form.deliveryFee);
    const sellerId = useSelector((state) => state.product.form.sellerId);
    const url = theme.apiUrl;
    const [sellerInfo, setSellerInfo] = useState({});

    useEffect(() => {
        if (sellerId !== undefined)
            axios
                .get(url + `sellers/${sellerId}`)
                .then((response) => {
                    setSellerInfo(response.data.result);
                })
                .catch((e) => {
                    console.log(e);
                });
    }, [sellerId]);

    useEffect(() => {
        dispatch(dispatchSellerInfo(sellerInfo));
    }, [sellerInfo]);

    return (
        <Container id={props.id}>
            <DeliveryContainer>
                <Header>배송</Header>
                <Content>
                    <ElementContainer>
                        <Title>배송비</Title>
                        <Element>
                            {deliveryFee === 0 ? "무료배송" : deliveryFee}
                        </Element>
                    </ElementContainer>
                </Content>
            </DeliveryContainer>
            <SellerContainer>
                <Header>판매자 정보</Header>
                <Content>
                    <ElementContainer>
                        <Title>상호</Title>
                        <Element>{sellerInfo.companyName}</Element>
                    </ElementContainer>
                    <ElementContainer>
                        <Title>대표자</Title>
                        <Element>{sellerInfo.representative}</Element>
                    </ElementContainer>
                    <ElementContainer>
                        <Title>사업장소재지</Title>
                        <Element>{sellerInfo.businessAddress}</Element>
                    </ElementContainer>
                    <ElementContainer>
                        <Title>고객센터 전화번호</Title>
                        <Element>{sellerInfo.customerCenter}</Element>
                    </ElementContainer>
                    <ElementContainer>
                        <Title>E-mail</Title>
                        <Element>{sellerInfo.email}</Element>
                    </ElementContainer>
                    <ElementContainer>
                        <Title>사업자 등록번호</Title>
                        <Element>{sellerInfo.registrationNum}</Element>
                    </ElementContainer>
                </Content>
            </SellerContainer>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const Header = styled.span`
    font-size: 20px;
    font-weight: bold;
`;
const DeliveryContainer = styled.div`
    width: 100%;
`;
const Content = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    font-size: 16px;
`;
const ElementContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
    padding: 15px 0px;
`;
const Title = styled.span`
    color: gray;
`;
const Element = styled(Title)`
    position: absolute;
    left: 400px;
    color: black;
`;
const ExchangeContainer = styled(DeliveryContainer)`
    margin-top: 100px;
`;
const SellerContainer = styled(ExchangeContainer)``;
export default Delivery;
