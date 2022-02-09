import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"
import styled from "styled-components";

const Carousel =() =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
        autoplaySpeed:1500,
        autoplay:true,
        
      };
      
      return(
          <Container>
        <Slider {...settings}>
          <div>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164387574658441388.png?gif=1&w=2560&q=100"></img>
          </div>
          <div>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164387780763113987.png?gif=1&w=2560&q=100"></img>
          </div>
          <div>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164336429452687456.png?gif=1&w=2560&q=100"></img>
          </div>
        </Slider>

          </Container>
      )
}
const Container=styled.div`
width:956px;
`

export default Carousel