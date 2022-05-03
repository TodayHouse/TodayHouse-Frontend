import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
    ProductSimpleView,
    ProductNavigation,
    UserStylingView,
    ProductInfo,
    ProductSidebar,
    Review,
    Ask,
    Delivery,
    Recommend,
} from "../Product/components";
import axios from "axios";
import theme from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { changeImg, dispatchSetForm } from "../../redux/reducer/product";

const Product = () => {
    // 상품 상세정보 불러오는 api 호출할 때 productId 넣어서 보내면 해당 id에 맞는 정보를 서버에서 받아옴
    const productId = useParams().id;
    const url = theme.apiUrl;
    const dispatch = useDispatch();
    const categoryPath = useSelector(
        (state) => state.product.form.categoryPath
    );

    const onScroll = () => {
        const offset = document
            .getElementById("container")
            ?.getBoundingClientRect().top;
        if (offset === 0)
            document.getElementById("scrollToTop").style.display = "none";
        else document.getElementById("scrollToTop").style.display = "block";
    };

    window.onload = function () {
        window.addEventListener("scroll", onScroll);
    };

    useEffect(() => {
        //해당 상품 정보를 불러와서 리덕스에 저장
        axios
            .get(url + `products/${productId}`)
            .then((response) => {
                if (response.data.isSuccess) {
                    const { result } = response.data;
                    console.log(result);
                    dispatch(dispatchSetForm(result));

                    // 최초 메인 이미지 설정
                    dispatch(changeImg(result.imageUrls[0]));
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <Container id="container">
            <CategoryContainer>
                {categoryPath?.map((data, idx) =>
                    idx === 0 ? (
                        <Category key={idx}>{data}</Category>
                    ) : (
                        <div key={idx}>
                            <span style={{ margin: "0px 8px" }}> &gt;</span>
                            <Category>{data}</Category>
                        </div>
                    )
                )}
            </CategoryContainer>
            <ProductSimpleView />
            <ProductNavigation />
            <Wrap>
                <ProductContents>
                    <UserStylingView />
                    <ProductInfo id="productInfo" />
                    <Review id="review" />
                    <Ask id="ask" />
                    <Delivery id="delivery" />
                    <Recommend id="recommend" />
                </ProductContents>
                <ProductSidebar />
            </Wrap>
            <WhiteButton
                id="scrollToTop"
                onClick={() => {
                    window.scrollTo(0, 0);
                }}>
                <img
                    alt="top"
                    width="25px"
                    height="25px"
                    src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-up-arrow-arrows-dreamstale-lineal-dreamstale.png"
                />
            </WhiteButton>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
`;
const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
const ProductContents = styled.div`
    width: 850px;
    display: flex;
    flex-direction: column;
    padding: 0px 50px;
`;
const WhiteButton = styled.button`
    position: fixed;
    bottom: 30px;
    right: 50px;
    border: 1px solid #eeeeee;
    border-radius: 30px;
    width: 60px;
    height: 60px;
    background: white;
    &:hover {
        background-color: #eeeeee;
    }
`;
const CategoryContainer = styled.div`
    width: 100%;
    font-size: 16px;
    color: #777777;
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
`;
const Category = styled.span`
    &:hover {
        cursor: pointer;
        color: #aaaaaa;
    }
`;
export default Product;
