import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../elements";
import theme from "../theme";
import axios from "axios";
import { getCookie } from "../App";

const MyOrderItem = (props) => {
    const {
        id,
        brandName,
        orderedDate,
        img,
        productName,
        productOption,
        price,
        stock,
        status,
    } = props;

    const [orderStatus, setOrderStatus] = useState();
    const url = theme.apiUrl;
    const accessToken = getCookie("login_id");

    const completeOrder = () => {
        axios
            .put(
                url + `orders/complete/${id}`,
                {},
                {
                    headers: { Authorization: `Bearer ${accessToken}` },
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log(res);
                if (res.data.isSuccess) {
                    alert("구매가 확정되었습니다.");
                    window.location.reload();
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const cancelOrder = () => {
        axios
            .put(
                url + `orders/cancel/${id}`,
                {},
                {
                    headers: { Authorization: `Bearer ${accessToken}` },
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log(res);
                if (res.data.isSuccess) {
                    alert("주문이 취소되었습니다.");
                    window.location.reload();
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (status === "PROCESSING") setOrderStatus("주문 처리 중");
        else if (status === "COMPLETED") setOrderStatus("배송 완료");
        else if (status === "CANCELED") setOrderStatus("주문 취소");
    }, [status]);

    return (
        <ItemWrap>
            <ItemHeader>
                <ItemHeaderText>
                    {brandName}
                    &nbsp;|&nbsp;주문일자 : {orderedDate}
                </ItemHeaderText>
            </ItemHeader>
            <hr style={{ margin: "8px 0px" }} />
            <ItemContainer>
                <ItemImgContainer>
                    <ItemImg src={img} alt="img" />
                </ItemImgContainer>
                <ItemContentContainer>
                    <ItemTitle>{productName}</ItemTitle>
                    <ItemOption>{productOption}</ItemOption>
                    <div>
                        <ItemPrice>{price}원</ItemPrice>
                        <ItemStock>
                            &nbsp;|&nbsp;
                            {stock}개
                        </ItemStock>
                    </div>
                    <ItemStatus>{orderStatus}</ItemStatus>
                </ItemContentContainer>
            </ItemContainer>
            <ItemBtnContainer>
                <Button onClick={completeOrder} margin="0px 8px 0px 0px">
                    구매확정
                </Button>
                <Button onClick={cancelOrder} margin="0px 0px 0px 8px">
                    주문취소
                </Button>
            </ItemBtnContainer>
        </ItemWrap>
    );
};

const ItemWrap = styled.article`
    display: flex;
    flex-direction: column;
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 16px;
    margin: 32px 0px;
    width: 400px;
`;
const ItemContainer = styled.div`
    display: flex;
    margin-top: 8px;
    &:hover {
        cursor: pointer;
    }
`;
const ItemHeader = styled.div`
    display: flex;
    align-items: center;
`;
const ItemImgContainer = styled.div``;
const ItemContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;
`;
const ItemImg = styled.img`
    border-radius: 4px;
    width: 80px;
    height: 80px;
`;
const ItemTitle = styled.strong`
    font-size: 18px;
    &:hover {
        text-decoration: underline;
    }
`;
const ItemOption = styled.span`
    font-size: 16px;
    color: #aaaaaa;
`;
const ItemPrice = styled.strong`
    font-size: 16px;
`;
const ItemStock = styled(ItemOption)``;
const ItemStatus = styled.strong`
    font-size: 16px;
    color: ${(props) => props.theme.mainColor};
`;
const ItemHeaderText = styled(ItemOption)``;
const ItemBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8px;
`;
export default MyOrderItem;
