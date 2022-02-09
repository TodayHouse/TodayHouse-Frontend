import React,{useState} from "react";
import Carousel from "./components/Carousel";
import Category from"./components/Category";
import styled from "styled-components";
import ProductCard from "./components/ProductCard";
import SideBar from "./components/SideBar";
import {Row} from 'antd'

const Store = () =>{
    const [items,setItems] = useState([
        { 
            url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162679699600663118.jpeg?gif=1&w=360&h=360&c=c&q=0.8",
            title: "노르빅 호텔식 차렵침구세트",
            discount:59,
            price:33900,
            star:4.7,
            review:2421,
            delivery: "free",
            leftTime:6,
            company:"리뽐므"

        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159797179944305943.jpg?gif=1&w=720&h=720&c=c&q=0.8",
            title: "멀티코팅 바지걸이",
            discount:43,
            price:9500,
            star:4.7,
            review:26402,
            delivery: "free",
            leftTime:6,
            company:"홈앤하우스"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163460876051361692.jpg?gif=1&w=720&h=720&c=c&q=0.8",
            title: "[해외]모닥불 불멍 분위기 대용량 무드 가습기",
            discount:57,
            price:27900,
            star:4.2,
            review:170,
            delivery: "overSea",
            leftTime:6,
            company:"집드리"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159797179944305943.jpg?gif=1&w=720&h=720&c=c&q=0.8",
            title: "고양이 베이직 원목 알루미늄 캣폴 캣타워",
            discount:16,
            price:104000,
            star:4.7,
            review:20,
            delivery:"",
            leftTime:6,
            company:"오브바이포"
        },

    ])
    const [dealList]=useState(items); //오늘의 딜 리스트
    const [productList,setProductList]=useState(items); //인기상품 리스트
    const load = () =>{
        setProductList([...productList,...items]) //기존 아이템리스트에 이미지 추가(임시)
    }
    
    return(
        <>
        <Container>
            <SideBar></SideBar>
            <ContentContainer>
            <Carousel/>
                <TodayDeal>
                    <Title>오늘의 딜</Title>
                    <Row gutter={16}>
                        {dealList && dealList.map((item,index)=>( //반복문
                                <React.Fragment key={index}>
                                    <ProductCard
                                    item ={item}
                                    id = {index} // 임시로 순서대로 id부여
                                    >
                                    </ProductCard>

                                </React.Fragment>
                            ))}
                    </Row>
                </TodayDeal>
                
                <PopularKeywords>
                    <Title>인기 키워드</Title>
                    <KeywordLine>
                        <Keyword>
                            <KeywordImage src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/theme_category_covers/164396335856312685.png?gif=1&w=850"></KeywordImage>
                            <KeywordText style={{left:"50%"}}>#봄이불준비</KeywordText>
                        </Keyword>
                        <Keyword>
                            <KeywordImage src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/theme_category_covers/164396360513214303.png?gif=1&w=850"></KeywordImage>
                            <KeywordText style={{left:"50%"}}>#조화인테리어</KeywordText>
                        </Keyword>
                        <Keyword>
                            <KeywordImage src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/theme_category_covers/164396578113670263.png?gif=1&w=850"></KeywordImage>
                            <KeywordText style={{left:"50%"}}>#유아동공부방</KeywordText>
                        </Keyword>
                        <Keyword>
                            <KeywordImage src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/theme_category_covers/164067425153337899.PNG?gif=1&w=850"></KeywordImage>
                            <KeywordText style={{left:"50%"}}>#오늘의집배송</KeywordText>
                        </Keyword>
                    </KeywordLine>
                </PopularKeywords>
                <PopularProducts>
                    <Title>인기 상품</Title>
                    <Scroll>
                        <Row gutter={16}>
                            {productList && productList.map((item,index)=>( //반복문
                                    <React.Fragment key={index}>
                                        <ProductCard
                                        item ={item}
                                        id = {index} // 임시로 순서대로 id부여
                                        >
                                        </ProductCard>

                                    </React.Fragment>
                                ))}
                                
                        </Row>
                        <LoadMore onClick={load}>Load</LoadMore>
                    </Scroll>
                </PopularProducts>

            </ContentContainer>
        </Container>
        </>
    )
}
const Container = styled.div`
display: flex;
width: 1256px;
height: 100%;

`
const ContentContainer = styled.div`
display: flex;
flex-direction: column;
width: 956px;
height: 100%;

`
const Title = styled.h3`
font-weight:bold;
`
const TodayDeal =styled.div`
display: flex;
margin-top:50px;
flex-direction: column;
width:50%
height: 100%;

`

const CategoryBlock=styled.div`
display: flex;
margin-top:50px;
flex-direction: column;
height: 100%;

`

const PopularKeywords=styled.div`
display: flex;
margin-top:50px;
flex-direction: column;
height: 100%;
`
const Keyword=styled.div`
width:25%;
position:relative;

`

const KeywordLine=styled.div`
display:flex;
`
const KeywordImage=styled.img`
height:120px;
width:200px;
object-fit: cover;
margin:20px;
filter:brightness(50%);
border-radius:8px;
`
const KeywordText=styled.h5`
padding: 5px;
color:white;
font-weight:bold;
text-align: center;
position: absolute;
top: 50%;
transform: translate( -50%, -50% );
`

const PopularProducts =styled.div`
display: flex;
margin-top:50px;
flex-direction: column;
height: 100%;

`
const Scroll=styled.div`
display: flex;
margin-top:30px;
flex-direction: column;
height: 100%;
align-items:center;
`
const LoadMore = styled.button`
    cursor: pointer;
    color: #198754;
    border-color: #198754;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    width:10%;
    
    

`
export default Store