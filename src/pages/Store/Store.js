import React, { useState, useEffect } from "react";
import Carousel from "./components/Carousel";
import Category from "./components/Category";
import styled from "styled-components";
import ProductCard from "./components/ProductCard";
import SideBar from "./components/SideBar";
import { Row } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import theme from '../../theme'
const url = theme.apiUrl;

const Store = () =>{
    const [items,setItems] = useState([
        { 
            url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162679699600663118.jpeg?gif=1&w=360&h=360&c=c&q=0.8",
            title: "노르빅 호텔식 차렵침구세트",
            discount: 59,
            price: 33900,
            star: 4.7,
            review: 2421,
            delivery: "free",
            leftTime: 6,
            company: "리뽐므",
        },
        {
            url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159797179944305943.jpg?gif=1&w=720&h=720&c=c&q=0.8",
            title: "멀티코팅 바지걸이",
            discount: 43,
            price: 9500,
            star: 4.7,
            review: 26402,
            delivery: "free",
            leftTime: 6,
            company: "홈앤하우스",
        },
        {
            url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163460876051361692.jpg?gif=1&w=720&h=720&c=c&q=0.8",
            title: "[해외]모닥불 불멍 분위기 대용량 무드 가습기",
            discount: 57,
            price: 27900,
            star: 4.2,
            review: 170,
            delivery: "overSea",
            leftTime: 6,
            company: "집드리",
        },
        {
            url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159797179944305943.jpg?gif=1&w=720&h=720&c=c&q=0.8",
            title: "고양이 베이직 원목 알루미늄 캣폴 캣타워",
            discount: 16,
            price: 104000,
            star: 4.7,
            review: 20,
            delivery: "",
            leftTime: 6,
            company: "오브바이포",
        },
    ]);
    const [dealList, setDealList] = useState(); //오늘의 딜 리스트
    const [productList, setProductList] = useState(); //인기상품 리스트
    const load = (id) => {
        console.log(id);
        var temp = [];
        try {
            axios
                .get(url + "products", {
                    params: {
                        categoryId: parseInt(id),
                    },
                })
                .then(function (res) {
                    console.log(res.data.result.content);
                    res.data.result.content.map((item) => {
                        temp = [
                            ...temp,
                            {
                                id: item.id,
                                url: item.imageUrls[0],
                                title: item.title,
                                discount: item.discountRate,
                                price: item.price,
                                star: 5,
                                review: 30,
                                delivery: item.deliveryFee,
                                leftTime: 6,
                                company: item.brand,
                            },
                        ];
                    });

    ])
    const [dealList,setDealList]=useState(); //오늘의 딜 리스트
    const [productList,setProductList]=useState(); //인기상품 리스트
    const load = (id) =>{
        console.log(id)
        var temp = []
        try{
        axios.get(url+"products",
        {
            params:
            {
                
                categoryId : parseInt(id),
                
            }
        }
        ).then(function(res){
            console.log(res.data.result.content)
            res.data.result.content.map((item)=>{
                temp=[...temp,
                    {
                        id:item.id,
                        url:item.imageUrls ? item.imageUrls[0]:"https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159797179944305943.jpg?gif=1&w=720&h=720&c=c&q=0.8" ,
                        title: item.title,
                        discount:item.discountRate,
                        price:item.price,
                        star:5,
                        review:30,
                        delivery:item.deliveryFee,
                        leftTime:6,
                        company:item.brand,
                    }]
            })
            
            setProductList(productList.concat(temp));
            console.log(productList)
        })
        
        
        }
        catch(e){}
    }
    const [category,setCategory]=useState(0);
    
    const handleCategory=(id,name)=>{
        console.log(id)
        var temp = []
        try{
        setCategory(
            {
                    id: id,
                    name:name,
            }
        )
        axios.get(url+"products",
        {
            params:
            {
                
                categoryId : parseInt(id),
                
            }
        }
        ).then(function(res){
            console.log(res.data.result.content)
            res.data.result.content.map((item)=>{
                temp=[...temp,
                    {
                        id:item.id,
                        url:item.imageUrls ? item.imageUrls[0]:"https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159797179944305943.jpg?gif=1&w=720&h=720&c=c&q=0.8" ,
                        title: item.title,
                        discount:item.discountRate,
                        price:item.price,
                        star:5,
                        review:30,
                        delivery:item.deliveryFee,
                        leftTime:6,
                        company:item.brand,
                    }]
            })
            setProductList(temp)
            setDealList(temp)
        })
        
        
        }
        catch(e){}

    }
    useEffect(()=>{
        try{
            axios.get(url+"categories")
            .then(function(res){
                console.log(res.data.result)
                handleCategory(res.data.result[0].id,res.data.result[0].name)
            })
            }
        catch(e){
            console.log(e);
        }
    }, []);
    return (
        <>
            <Container>
                <SideBar handleCategory={handleCategory}></SideBar>
                <ContentContainer>
                    <Carousel />
                    <TodayDeal>
                        <Title>{category.name}</Title>
                        <Row gutter={16}>
                            {dealList &&
                                dealList.map(
                                    (
                                        item //반복문
                                    ) => (
                                        <React.Fragment key={item.id}>
                                            <ProductCard
                                                item={item}
                                                id={item.id}></ProductCard>
                                        </React.Fragment>
                                    )
                                )}
                        </Row>
                    </TodayDeal>

                    <PopularKeywords>
                        <Title>인기 키워드</Title>
                        <KeywordLine>
                            <Keyword>
                                <KeywordImage src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/theme_category_covers/164396335856312685.png?gif=1&w=850"></KeywordImage>
                                <KeywordText style={{ left: "50%" }}>
                                    #봄이불준비
                                </KeywordText>
                            </Keyword>
                            <Keyword>
                                <KeywordImage src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/theme_category_covers/164396360513214303.png?gif=1&w=850"></KeywordImage>
                                <KeywordText style={{ left: "50%" }}>
                                    #조화인테리어
                                </KeywordText>
                            </Keyword>
                            <Keyword>
                                <KeywordImage src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/theme_category_covers/164396578113670263.png?gif=1&w=850"></KeywordImage>
                                <KeywordText style={{ left: "50%" }}>
                                    #유아동공부방
                                </KeywordText>
                            </Keyword>
                            <Keyword>
                                <KeywordImage src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/theme_category_covers/164067425153337899.PNG?gif=1&w=850"></KeywordImage>
                                <KeywordText style={{ left: "50%" }}>
                                    #오늘의집배송
                                </KeywordText>
                            </Keyword>
                        </KeywordLine>
                    </PopularKeywords>
                    <PopularProducts>
                        <Title>인기 상품</Title>
                        <Scroll>
                            <Row gutter={16} style={{ width: "100%" }}>
                                {productList &&
                                    productList.map(
                                        (
                                            item,
                                            index //반복문
                                        ) => (
                                            <React.Fragment key={index}>
                                                <ProductCard
                                                    item={item}
                                                    id={item.id}></ProductCard>
                                            </React.Fragment>
                                        )
                                    )}
                            </Row>
                            <LoadMore onClick={() => load(category.id)}>
                                Load
                            </LoadMore>
                        </Scroll>
                    </PopularProducts>
                </ContentContainer>
            </Container>
        </>
    );
};
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
`;
const Title = styled.h3`
    font-weight: bold;
`;
const TodayDeal = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    height: 100%;
    margin-right: 20px;
`;

const CategoryBlock = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    height: 100%;
`;

const PopularKeywords = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    height: 100%;
`;
const Keyword = styled.div`
    width: 25%;
    position: relative;
    margin-right: 20px;
`;

const KeywordLine = styled.div`
    display: flex;
`;
const KeywordImage = styled.img`
    height: 120px;
    width: 100%;
    object-fit: cover;
    margin-right: 20px;
    filter: brightness(50%);
    border-radius: 8px;
`;
const KeywordText = styled.h5`
    padding: 5px;
    color: white;
    font-weight: bold;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const PopularProducts = styled.div`
    display: flex;
    margin-top: 50px;
    margin-right: 20px;
    flex-direction: column;
    height: 100%;
`;
const Scroll = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    height: 100%;
    align-items: center;
`;
const LoadMore = styled.button`
    cursor: pointer;
    color: #198754;
    border-color: #198754;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    width: 10%;
`;
export default Store;
