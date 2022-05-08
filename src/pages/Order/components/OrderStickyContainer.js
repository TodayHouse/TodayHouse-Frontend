import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../../elements";
import { useSelector } from "react-redux";
import axios from "axios";
import theme from "../../../theme";
import { getCookie } from "../../../App";

const OrderStickyContainer = (props) => {
    const { totalPrice, deliveryFee } = props;
    const url = theme.apiUrl;
    const accessToken = getCookie("login_id");

    const [toggle1Open, setToggle1Open] = useState(false);
    const [toggle2Open, setToggle2Open] = useState(false);

    const productInfo = JSON.parse(localStorage.getItem("selectedOption2"));
    const orderForm = useSelector((state) => state.order.orderForm);
    const destForm = useSelector((state) => state.order.destForm);
    const memo = useSelector((state) => state.order.memo);

    useEffect(() => {
        if (toggle1Open)
            document.getElementById("agreeToggle1").style.display = "flex";
        else document.getElementById("agreeToggle1").style.display = "none";
    }, [toggle1Open]);

    useEffect(() => {
        if (toggle2Open)
            document.getElementById("agreeToggle2").style.display = "flex";
        else document.getElementById("agreeToggle2").style.display = "none";
    }, [toggle2Open]);

    const submitOrder = () => {
        console.log(orderForm);
        console.log(destForm);
        console.log(memo);
        console.log(productInfo);
        const deliverySaveRequest = { ...orderForm, ...destForm };

        let list = [];
        productInfo.forEach((data) => {
            list.push({
                childOptionId: data.childOptionId,
                deliverySaveRequest,
                memo,
                parentOptionId: data.parentOptionId,
                productId: data.productId,
                productQuantity: data.num,
            });
        });
        console.log(list);
        console.log(accessToken);
        axios
            .post(url + "orders", list, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <Container>
            <PriceContainer>
                <TempPriceContainer>
                    <Title>결제금액</Title>
                    <ContentContainer>
                        <Content>총 상품 금액</Content>
                        <TempPrice>{totalPrice.toLocaleString()}원</TempPrice>
                    </ContentContainer>
                    <ContentContainer>
                        <Content>배송비</Content>
                        <TempPrice>{deliveryFee.toLocaleString()}원</TempPrice>
                    </ContentContainer>
                    <ContentContainer>
                        <Content>쿠폰 사용</Content>
                        <TempPrice>0원</TempPrice>
                    </ContentContainer>
                    <ContentContainer>
                        <Content>포인트 사용</Content>
                        <TempPrice>0원</TempPrice>
                    </ContentContainer>
                </TempPriceContainer>
                <TotalPriceContainer>
                    <TotalPriceText>최종 결제 금액</TotalPriceText>
                    <PricePoint>
                        <span style={{ fontSize: 24, fontWeight: "bold" }}>
                            <TotalPrice>
                                {(totalPrice + deliveryFee).toLocaleString()}
                            </TotalPrice>{" "}
                            원
                        </span>
                        <Point>
                            <span style={{ fontWeight: "bold" }}>
                                {(
                                    (totalPrice + deliveryFee) *
                                    0.03
                                ).toLocaleString()}{" "}
                                P
                            </span>{" "}
                            적립 예정
                        </Point>
                    </PricePoint>
                </TotalPriceContainer>
            </PriceContainer>
            <AgreeContainer>
                <AllAgree>
                    <Checkbox type="checkbox" />
                    <AllAgreeText>
                        아래 내용에 모두 동의합니다. (필수)
                    </AllAgreeText>
                </AllAgree>
                <AgreeDetailContainer>
                    <ToggleTextContainer
                        onClick={() => {
                            setToggle1Open(!toggle1Open);
                        }}>
                        <ToggleText>
                            개인정보 수집 이용 및 제 3자 제공 동의
                        </ToggleText>
                        <ToggleArrow
                            src={require(toggle1Open
                                ? "../../../img/ExpandLessArrow.png"
                                : "../../../img/ExpandMoreArrow.png")}
                        />
                    </ToggleTextContainer>
                    <ToggleDetailContainer id="agreeToggle1">
                        <ToggleDetailText>
                            개인정보 제 3자 제공
                        </ToggleDetailText>
                        <ToggleDetailText>
                            개인정보 수집 및 이용
                        </ToggleDetailText>
                    </ToggleDetailContainer>
                    <ToggleTextContainer
                        onClick={() => {
                            setToggle2Open(!toggle2Open);
                        }}>
                        <ToggleText>결제대행 서비스 이용약관 동의</ToggleText>
                        <ToggleArrow
                            src={require(toggle2Open
                                ? "../../../img/ExpandLessArrow.png"
                                : "../../../img/ExpandMoreArrow.png")}
                        />
                    </ToggleTextContainer>
                    <ToggleDetailContainer id="agreeToggle2">
                        <ToggleDetailText>토스페이먼츠(주)</ToggleDetailText>
                        <ToggleDetailText>
                            엔에이치엔한국사이버결제(주)
                        </ToggleDetailText>
                        <ToggleDetailText>NICE페이먼츠(주)</ToggleDetailText>
                    </ToggleDetailContainer>
                    <ConfirmContainer>
                        <ConfirmText>
                            본인은 만 14세 이상이며, 주문 내용을 확인하였습니다.
                        </ConfirmText>
                    </ConfirmContainer>
                </AgreeDetailContainer>
            </AgreeContainer>
            <Button onClick={submitOrder} margin="20px 0px">
                582,900원 결제하기
            </Button>
        </Container>
    );
};

const Container = styled.div`
    margin-left: 50px;
    position: sticky;
    top: 110px;
    display: flex;
    flex-direction: column;
`;
const PriceContainer = styled.div`
    border: 1px solid #dddddd;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 20px;
`;
const TempPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 20px;
`;
const Title = styled.span`
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: bold;
`;
const ContentContainer = styled.div`
    margin: 3px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Content = styled.span`
    font-size: 18px;
    color: gray;
`;
const TempPrice = styled(Content)`
    font-weight: bold;
    color: black;
`;
const TotalPriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 20px 0px;
`;
const TotalPriceText = styled.span`
    font-size: 20px;
    font-weight: bold;
    height: 50px;
`;
const TotalPrice = styled.span`
    color: ${(props) => props.theme.mainColor};
`;
const Point = styled.span`
    font-size: 15px;
`;
const PricePoint = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
const AgreeContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #dddddd;
    border-top: none;
`;
const AllAgree = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;
const Checkbox = styled.input`
    width: 25px;
    height: 25px;
`;
const AllAgreeText = styled.span`
    margin-left: 10px;
    font-size: 15px;
`;
const AgreeDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f4f4f4;
    padding: 0px 20px;
`;
const ToggleTextContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 10px;
    color: gray;
    font-size: 18px;
    &:hover {
        cursor: pointer;
    }
`;
const ToggleText = styled.span`
    font-size: 15px;
`;
const ToggleArrow = styled.img`
    width: 30px;
    height: 30px;
`;
const ToggleDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dddddd;
    color: gray;
    padding: 10px 0px;
`;
const ToggleDetailText = styled.li``;
const ConfirmContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    color: gray;
`;
const ConfirmText = styled.span``;
export default OrderStickyContainer;
