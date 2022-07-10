import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from 'axios';
import {getCookie} from '../../App';
import { useNavigate } from 'react-router-dom';

const GridContents = (props) => {
    const jwt = getCookie('login_id');
    const navigate = useNavigate();
    const { src, title, profile, nickname, like, view, id } = props;
    return (
      <GridContainer
        onClick={() => {
          navigate(`/story/post/${id}`);
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            borderRadius: 8,
          }}
        >
          <Image src={src} />
          <Bookmark
            onClick={() => {
             
             axios.delete("http://44.206.171.242:8080/scraps/"+id, {
              headers : {
                  'Authorization' : `Bearer ${jwt}`,
              },
            },
            ).then(function(res){
              alert('스크랩취소...' + res);
              console.log(res);
            }).catch(function(error){
              alert('에러 발생' + error);
            })
            }}
            width="40px"
            height="40px"
            src={require('./image/bookmark.png')}
          />
        </div>
        <Title>{title}</Title>
        <User>
       
          <Nickname>{nickname}</Nickname>
        </User>
        <Footer>
          <span>좋아요 {like} · 조회 5,000</span>
        </Footer>
      </GridContainer>
    );
  };

const Scraped = () => {
    const defaultImage = "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/7r5X/image/9djEiPBPMLu_IvCYyvRPwmZkM1g.jpg";
    const [profile, setProfile] = useState(defaultImage);
    const [tag, setTag] = useState(0); //0 : all, 1 :  knowhow
    const [info, setInfo]= useState(null);
    const [send, setSend] = useState({});
    const [contents, setContents] = useState(null);
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
        axios.get('http://44.206.171.242:8080/scraps/my', {
            headers : {
                'Authorization' : `Bearer ${jwt}`,
            }}).then(function (res){
                console.log(res.data.result);
                setContents(res.data.result);
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
            <span style={{margin : "20px", fontWeight : (tag == 0 ? "bold" : "normal"), cursor : 'pointer'}}
            onClick = { () => {setTag(0)} }
            >스토리</span>
            <span style={{margin : "20px", fontWeight : (tag == 1 ? "bold" : "normal"), cursor : 'pointer'}}
              onClick = { () => {setTag(1)} }
            >노하우</span>
        </ScrapLoader>
        <MainContentsBox id = "contentLoader">
            {
                contents.map((content, idx) => {
                    <GridContents 
                    src = {content.imageUrls}
                    title = {content.title}
                    like = {content.like}
                    nickname = {content.writer}
                    id = {content.id}
                    ></GridContents>                  
                })
            }
        </MainContentsBox>
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
    height : 86px;
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

const MainContentsBox = styled.div`

`


const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: pointer;
  position: relative;
  margin-bottom: 30px;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
`;
const Bookmark = styled.img`
  position: absolute;
  right: 20px;
  bottom: 20px;
  &:hover {
    opacity: 0.7;
  }
`;
const Title = styled.h1`
  margin-top: 16px;
  font-size: 20px;
  font-weight: bold;
  word-break: normal;
  text-align: center;
`;
const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 20px;
`;
const Nickname = styled.p`
  font-size: 15px;
  margin: 0px 8px;
`;
const Footer = styled.div`
  display: flex;
  font-size: 15px;
  color: #777777;
  margin-top: 8px;
`;
