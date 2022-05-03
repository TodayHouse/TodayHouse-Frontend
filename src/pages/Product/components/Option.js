import React from "react";
import styled from "styled-components";
import { OptionSelectView } from ".";
import { Star } from "../../../components";
import { useSelector } from "react-redux";

const Option = () => {
    const form = useSelector((state) => state.product.form);
    const { brand, title, price, discountRate, specialPrice } = form;
    return (
        <Container>
            <TitlePrice>
                <Brand>{brand}</Brand>
                <Title>{title}</Title>
                <ReviewContainer>
                    <Star rating={4.5} size="20px" />
                    <Review>1093개 리뷰</Review>
                </ReviewContainer>
                {specialPrice ? (
                    <DiscountContainer>
                        <SpecialPriceContainer>
                            <Rate>{discountRate}%</Rate>
                            <OriginalPrice>
                                {price && price.toLocaleString()}원
                            </OriginalPrice>
                        </SpecialPriceContainer>
                        <Price>
                            {price &&
                                (
                                    price *
                                    ((100 - discountRate) / 100)
                                ).toLocaleString()}
                            원
                        </Price>
                    </DiscountContainer>
                ) : (
                    <Price>{price && price.toLocaleString()}원</Price>
                )}
            </TitlePrice>
            <OptionSelectView
                parentId="selectParentOption"
                childId="selectChildOption"
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const TitlePrice = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    border-bottom: 1px solid #eeeeee;
`;
const Brand = styled.span`
    color: gray;
    margin-bottom: 5px;
`;
const Title = styled.h3``;
const ReviewContainer = styled.div`
    display: flex;
    align-items: center;
`;
const Review = styled.span`
    font-weight: bold;
    font-size: 15px;
    color: ${(props) => props.theme.mainColor};
    margin-left: 10px;
`;
const Price = styled.span`
    font-weight: bold;
    font-size: 30px;
`;
const DiscountContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const SpecialPriceContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
`;
const Rate = styled.span`
    color: gray;
`;
const OriginalPrice = styled(Rate)`
    margin: 0px 8px;
    text-decoration: line-through;
`;
export default Option;
