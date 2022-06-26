import React from "react";
import styled from "styled-components";
import { Star } from "../../../components";
import axios from "axios";
import theme from "../../../theme";
import { getCookie } from "../../../App";
import { useSelector } from "react-redux";

//프로필사진, 닉네임, 총 평점, 각 평점 4개, 상품옵션, 상품사진, 리뷰 내용, 도움된 사람 수 -> props로 받아야함
const ReviewDetail = (props) => {
    const { info, getReviews } = props;
    const reviewId = info.id;
    const url = theme.apiUrl;
    const accessToken = getCookie("login_id");
    const canLikeList = useSelector((state) => state.product.canLike);
    const canLike = canLikeList.filter((data) => data.id === reviewId);
    // console.log("info :>> ", info);
    const doLike = () => {
        if (!canLike[0].canLike) {
            axios
                .delete(url + `reviews/like/${reviewId}`, {
                    headers: { Authorization: `Bearer ${accessToken}` },
                    withCredentials: true,
                })
                .then((response) => {
                    if (response.data.isSuccess) {
                        getReviews();
                    }
                })
                .catch((e) => {
                    alert(e.response.data.message);
                });
        } else {
            axios
                .post(
                    url + `reviews/like/${reviewId}`,
                    {},
                    {
                        headers: { Authorization: `Bearer ${accessToken}` },
                        withCredentials: true,
                    }
                )
                .then((response) => {
                    if (response.data.isSuccess) {
                        getReviews();
                    }
                })
                .catch((e) => {
                    alert(e.response.data.message);
                });
        }
    };

    return (
        <Container>
            <ProfileContainer>
                <ProfileImg src={info.profileImage} />
                <NicknameStar>
                    <Nickname>{info.nickname}</Nickname>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Star rating={info.rating} size="20px" />
                        <Date>2022.01.16</Date>
                    </div>
                </NicknameStar>
            </ProfileContainer>
            <ReviewContentContainer>
                <ProductTitle>{info.productResponse.title}</ProductTitle>
                <Option>
                    {info.productResponse.option1}:&nbsp;
                    {info.productResponse.parentOptions[0].content}&nbsp;/&nbsp;
                    {info.productResponse.option2}:&nbsp;
                    {
                        info.productResponse.parentOptions[0].childOptions[0]
                            .content
                    }
                </Option>
                <ProductImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMzBfMTE4%2FMDAxNTg1NTQ5Mzc3NjE4.K1vxULmVndgOKUn2J0-Mign95AWVrzEKZs-yGTYlwFMg.sOHgdMOq8lVX_o0eSssK9VaodVAiRVopM3-nTTrl-O0g.JPEG.norano4353%2FKakaoTalk_20200324_174057960.jpg&type=a340" />
                <Content>{info.content}</Content>
            </ReviewContentContainer>
            <Footer>
                <RecommendBtn onClick={doLike} canLike={canLike[0].canLike}>
                    {canLike[0].canLike ? "도움이 돼요" : "도움됨"}
                </RecommendBtn>
                <NumOfRecommend>
                    <span style={{ fontWeight: "bold" }}>{info.like}</span>
                    명에게 도움이 되었습니다.
                </NumOfRecommend>
            </Footer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 0px;
    border-top: 1px solid #eeeeee;
`;
const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ProfileImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 15px;
`;
const NicknameStar = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
`;
const Nickname = styled.span``;
const Date = styled.span`
    margin-left: 10px;
    color: gray;
`;
const Rating = styled.div`
    display: flex;
    margin-top: 10px;
`;
const ReviewContentContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;
const ProductTitle = styled.span`
    font-size: 16px;
    font-weight: bold;
`;
const Option = styled.span`
    color: gray;
    font-size: 16px;
`;
const ProductImg = styled.img`
    margin-top: 15px;
    width: 150px;
    height: 150px;
    border-radius: 4px;
`;
const Content = styled.p`
    margin-top: 20px;
    font-size: 18px;
`;
const Footer = styled.div`
    display: flex;
    align-items: center;
`;
const RecommendBtn = styled.button`
    all: unset;
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => (props.canLike ? props.theme.mainColor : "white")};
    background-color: ${(props) =>
        props.canLike ? "white" : props.theme.mainColor};
    text-align: center;
    padding: 5px 0px;
    width: 130px;
    border: 1px solid ${(props) => props.theme.mainColor};
    border-radius: 4px;
`;
const NumOfRecommend = styled.span`
    margin-left: 10px;
    font-size: 16px;
`;
export default ReviewDetail;
