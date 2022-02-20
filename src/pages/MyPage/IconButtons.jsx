import styled from 'styled-components'
import {useState, useEffect} from 'react'
import axios from 'axios'
import ProfileData from './ProfileData'
const IconButtons = () => {
    const [likeInfo, setUserInfo] = useState();
    const [scrapInfo, setScrapInfo] = useState();
    const [couponInfo, setCouponInfo] = useState();
    useEffect(() => {
        axios.get('https://')
            .then(response => {
                setUserInfo(response.data);
            });
    }, []);
    return (
        <>
            <ButtonContainer>
                <ButtonBox>
                    <IconButton>
                        <IconImage src = {require("./image/scrapbook.jpg")}></IconImage>
                        미구현
                    </IconButton>

                    
                </ButtonBox>
                <ButtonBox>
                    <IconButton>
                        <IconImage src = {require("./image/like.jpg")}></IconImage>
                        미구현
                    </IconButton>
                </ButtonBox>
               <ButtonBox>
                <IconButton>
                        <IconImage src = {require("./image/coupon.jpg")}></IconImage>
                        미구현
                </IconButton>
               </ButtonBox>  
            </ButtonContainer>
        </>
    )
}
export default IconButtons

const ButtonContainer = styled.div`
    height : 70px;
    width : 70px;
    display : flex;
`
const IconButton = styled.button`
    height : 50px;
    width :30%px;
    margin : 15px 15px 5px 5px;
    border : 0;
    outline : 0;
`
const IconImage = styled.img`
    width : 50px;
    height : 50px;
  `;

const ButtonBox = styled.div`
    padding :1px;
`