import React from "react";
import styled from "styled-components";

const OrderProduct = (props) => {
    const { data } = props;
    return (
        <OrderProductContainer>
            <ProductContainer>
                <ProductTopContainer>
                    <CompanyContainer>
                        <CompanyName>{data.company}</CompanyName>
                        <DeliveryFee>
                            배송비{" "}
                            <span
                                style={{
                                    color: "black",
                                    fontWeight: "normal",
                                }}>
                                착불 {data.deliveryFee.toLocaleString()}원
                            </span>
                        </DeliveryFee>
                    </CompanyContainer>
                    <DeliveryInfo>업체직접배달</DeliveryInfo>
                </ProductTopContainer>
                <ContentWrap>
                    <Image src={data.image} />
                    <ContentContainer>
                        <Name>{data.title}</Name>
                        <Option>{data.name}</Option>
                        <PriceContainer>
                            <Price>
                                {(data.price * data.num).toLocaleString()}원
                            </Price>
                            <Amount>{data.num.toLocaleString()}개</Amount>
                        </PriceContainer>
                    </ContentContainer>
                </ContentWrap>
            </ProductContainer>
        </OrderProductContainer>
    );
};

const OrderProductContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;
const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #dddddd;
    border-radius: 4px;
`;
const ProductTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f4f4;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 15px;
`;
const CompanyContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 15px;
`;
const CompanyName = styled.span`
    font-size: 16px;
    font-weight: bold;
`;
const DeliveryFee = styled.span`
    color: gray;
    font-size: 16px;
    font-weight: bold;
`;
const DeliveryInfo = styled.span`
    padding-top: 15px;
    font-size: 16px;
    font-weight: bold;
    color: gray;
`;
const ContentWrap = styled.div`
    display: flex;
    padding: 20px 15px;
    border-bottom: 1px solid #dddddd;
`;
const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 4px;
`;
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;
const Name = styled.span`
    font-size: 18px;
`;
const Option = styled.span`
    font-size: 16px;
    color: gray;
`;
const PriceContainer = styled.div`
    display: flex;
`;
const Price = styled.span`
    font-size: 16px;
    font-weight: bold;
    border-right: 1px solid #dddddd;
    padding-right: 10px;
`;
const Amount = styled.span`
    color: gray;
    font-size: 16px;
    padding-left: 10px;
`;
export default OrderProduct;
