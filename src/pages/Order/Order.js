import React from "react";
import styled from "styled-components";
import {
    OrderPersonContainer,
    OrderStickyContainer,
    DestinationContainer,
    OrderProduct,
    CouponContainer,
    PointContainer,
    PaymentContainer,
} from "./components";
import { Title } from "./elements";
import { useSelector } from "react-redux";

const Order = () => {
    const productInfo = useSelector((state) => state.product.selectedOption);
    return (
        <Wrap>
            <Container>
                <ContentContainer>
                    <HeaderTitle>주문/결제</HeaderTitle>
                    <OrderPersonContainer />
                    <DestinationContainer />
                    <OrderProductWrap>
                        <Title>주문상품</Title>
                        {productInfo.map((data, idx) => (
                            <OrderProduct key={idx} data={data} />
                        ))}
                    </OrderProductWrap>
                    <CouponContainer />
                    <PointContainer />
                    <PaymentContainer />
                </ContentContainer>
                <StickyContainer>
                    <OrderStickyContainer />
                </StickyContainer>
            </Container>
        </Wrap>
    );
};

const Wrap = styled.div`
    padding: 30px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
`;
const Container = styled.div`
    width: 1150px;
    display: flex;
`;
const HeaderTitle = styled.span`
    font-size: 32px;
    font-weight: bold;
`;
const ContentContainer = styled.div`
    width: 65%;
    //background-color: pink;
`;
const StickyContainer = styled.div`
    width: 35%;
    // background-color: skyblue;
`;
const OrderProductWrap = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
`;
export default Order;
