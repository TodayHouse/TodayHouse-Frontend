import React,{useState,Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./category.css"
import styled from "styled-components";

const Category =() =>{
    const [categories,setCategories]=useState([
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/164333421927911367.png?gif=1&w=180&h=180&c=c",
            text:"가구"
        },
        {
            url: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823225115177697.png?gif=1&w=180&h=180&c=c",
            text:"패브릭"

        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823225665741013.png?gif=1&w=180&h=180&c=c",
            text:"조명"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823226017937426.png?gif=1&w=180&h=180&c=c",
            text:"가전"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823227719846773.png?gif=1&w=180&h=180&c=c",
            text:"주방용품"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823227719846773.png?gif=1&w=180&h=180&c=c",
            text:"데코/식물"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823228178967968.png?gif=1&w=180&h=180&c=c",
            text:"수납/정리"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/163609843911228804.png?gif=1&w=180&h=180&c=c",
            text:"생활용품"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/164333398177552131.png?gif=1&w=180&h=180&c=c",
            text:"서랍/수납장"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/163575474448469686.png?gif=1&w=180&h=180&c=c",
            text:"생필품"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823230480918647.png?gif=1&w=180&h=180&c=c",
            text:"공구/DIY"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823230908544036.png?gif=1&w=180&h=180&c=c",
            text:"인테리어시공"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823231401891024.png?gif=1&w=180&h=180&c=c",
            text:"반려동물"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823242317048198.png?gif=1&w=180&h=180&c=c",
            text:"캠핑용품"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823231949249287.png?gif=1&w=180&h=180&c=c",
            text:"실내운동"
        },
        {
            url:"https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/164148743817769527.png?gif=1&w=180&h=180&c=c",
            text:"렌탈"
        },
    ]);
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
          />
        );
      }
      
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
          />
        );
      }
      
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll:3,
        swipe:false,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>
        
      };
      
      return(
          <Container>
        <Slider {...settings}>
        {
            categories.map((item,index)=>{
                return(
                <div key={index}>
                    <Block>
                        <Image src={item.url}></Image>
                        <Title>{item.text}</Title>
                    </Block>
                </div>
                )
            })
        }
        </Slider>

          </Container>
      )
}
const Container=styled.div`
margin-left:30px;
width:806px

`
const Title=styled.h5`
font-weight:bold;
`
const Block=styled.div`
display:flex;
flex-direction:column;
align-items:center;

`
const Image=styled.img`
padding:20px;
`

export default Category