import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    OrderPersonContainer,
    OrderStickyContainer,
    OrderProduct,
    CouponContainer,
    PointContainer,
    PaymentContainer,
} from "./components";
import { Title } from "./elements";

const Order = () => {
    const productInfo = JSON.parse(localStorage.getItem("selectedOption"));
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(0);

    useEffect(() => {
        console.log(productInfo);
        let total = 0;
        let delivery = 0;
        productInfo.forEach((data) => {
            total += data.price * data.num;
            delivery += data.deliveryFee;
        });
        console.log(total);
        setTotalPrice(total);
        setDeliveryFee(delivery);
    }, []);

    return (
        <Wrap>
            <Container>
                <ContentContainer>
                    <HeaderTitle>주문/결제</HeaderTitle>
                    <OrderPersonContainer />
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
                    <OrderStickyContainer
                        totalPrice={totalPrice}
                        deliveryFee={deliveryFee}
                    />
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
    width: 100%;
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
