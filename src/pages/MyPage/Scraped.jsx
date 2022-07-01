import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from 'axios';
import {getCookie} from '../../App';
const Scraped = () => {
    const defaultImage = "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/7r5X/image/9djEiPBPMLu_IvCYyvRPwmZkM1g.jpg";
    const [profile, setProfile] = useState(defaultImage);
    const [tag, setTag] = useState(0); //0 : all, 1 :  knowhow
    const [info, setInfo]= useState(null);
    const [send, setSend] = useState({});
    const oid = getCookie('original_id');
    const jwt = getCookie('login_id');
   
    useEffect(() => {
        axios.get('http://44.206.171.242:8080/users/emails/' + oid, {
            headers : {
                'Authorization' : `Bearer ${jwt}`,
            },
        }).then(function(res) {
            console.log(res.data.result);
            setInfo(res.data.result);
            setSend(res.data.result);
        }).catch(function(error) {
            console.log(error);
        })
    }, [])

    useEffect(() => {
        if(info != null)
        {
            if(info.profileImage != null)
            {
                setProfile(info.profileImage);
                console.log(info.profileImage)
            }
            else{
                console.log('profileImage : null')
            }
        }
    }, [info])
 
    return (
        <Container>    
        <Ptitle>
            스크랩북
        </Ptitle>
        <ProfileImage src = {profile}>

        </ProfileImage>
        <ProfileNickname>
            {(info != null) ? info.nickname : "별명 없음"}
        </ProfileNickname>
        <ScrapLoader>
            
        </ScrapLoader>
        </Container>
 
        
     
    )
}
export default Scraped;

const Container = styled.div`
    background-color: white;
`
const Ptitle = styled.h2`
    margin-left: 5%;
    margin-top: 20px;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    color: rgb(47, 52, 56);
`
const ProfileImage = styled.img`
    border: 1px solid white;
    border-radius: 100%;
    width : 86px;
    margin-left : 46.5%;
`
const ProfileNickname = styled.p`
    text-align: center;
    font-size: 23px;
`

const ScrapLoader = styled.div`
    text-align: center;
    margin: 20px;
    border-bottom: 1px solid gray;
`