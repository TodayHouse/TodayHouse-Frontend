import React ,{useState,useEffect}from 'react'
import styled from 'styled-components'
import house2 from "./img/house2.jpg"
import $ from 'jquery'
import { FixedMenu, Footer } from '../../pages/Story/components'
import axios from 'axios'
import {getCookie} from '../../App';
const AdviceDetail = () => {
  window.addEventListener('scroll', () => {
    const offset = document.querySelector('#container').getBoundingClientRect()
      .top
    if (offset === 0) $('#fixedMenu').hide()
    else $('#fixedMenu').show()
  })
  const [content,setContent]=useState({
    imageUrl:[house2,],
    writer:"작성자",
    title:"title",
    content:"",
    updatedAt:[0,0,0,0,0,0,0]
  });
  useEffect(()=>{
    try{
      axios.get("http://localhost:8080/stories/1",{param:{id:1}})
    .then(function(res){
      console.log(res.data.result);
      setContent(res.data.result)
    })
    }
    catch(e){
      console.log(e);
    }
  },[])
    
    return (
        <Container id="container">
            <TitleImage src={content.imageUrl[0]}
                        width="100%" 
                        height="500px"
            />
            <Content>
                <Post>
                  <Category> 노하우  세부</Category>
                  <Title>{content.title}</Title>

                  <WriterInfo>
                      <WriterImage 
                          src={house2}
                          width="60px"
                          height="60px"/>
                      <WriterName>
                          {content.writer}
                          <Date>{content.updatedAt[0]}/{content.updatedAt[1]}/{content.updatedAt[2]}</Date>
                      </WriterName>
                      <span style={{width : 800}}></span>
                      <Follow>+ 팔로우</Follow>
                  </WriterInfo>
                  <SummaryContainer>
                  <Simple>
                      <SimpleLine>
                              <SimpleSpan style={{color:"grey"}}>건물</SimpleSpan>
                              <SimpleSpan>단독주택</SimpleSpan>
                              <SimpleSpan style={{color:"grey"}}>평수</SimpleSpan>
                              <SimpleSpan>26평</SimpleSpan>
                      </SimpleLine>
                      <SimpleLine>
                              <SimpleSpan style={{color:"grey"}}>공간</SimpleSpan>
                              <SimpleSpan>서재 & 거실</SimpleSpan>
                              <SimpleSpan style={{color:"grey"}}>분야</SimpleSpan>
                              <SimpleSpan>홈 스타일링</SimpleSpan>
                      </SimpleLine>
                      <SimpleLine>
                              <SimpleSpan style={{color:"grey"}}>가족형태</SimpleSpan>
                              <SimpleSpan>성인자녀가 있는 집</SimpleSpan>
                              <SimpleSpan style={{color:"grey"}}></SimpleSpan>
                              <SimpleSpan></SimpleSpan>
                      </SimpleLine>
                  </Simple>
                  </SummaryContainer>
                  <div
                  style={{
                    marginTop: 50,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  >
                  
                   {content.content}
                  
                  </div>
                  <Footer/>
                </Post>
            </Content>
            <FixedMenu/>
        </Container>

    )
    
        
    
}
export default AdviceDetail
const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
align-items: center;
`
const Content = styled.div`
display: flex;
width: 50%;
height: 100%;
justify-content: center;
`
const Post =styled.div`
width: 100%;
margin-top:50px;
`
const TitleImage = styled.img`
height : 500px;
width: 100%;

`
const Category = styled.div`
color: #555555;
font-size: 18px;
`
const Title = styled.h1`
color: #2f3438;
font-weight: bold;
`
const WriterInfo = styled.div`
display: flex;
width: 100%;
height: 60px;
justify-content: space-between;
align-items: center;
margin-top: 40px;


`
const WriterImage = styled.img`
border-radius : 100%;

`
const WriterName = styled.div`
color: #2f3438;
font-weight: bold;
margin : 20px;
word-wrap: break-word;
width: parents;
`
const Date = styled.div`
color: #555555;
font-weight:normal;
`
const Follow = styled.button`
width:110px;
height:50px;
background-color: #38ccff;
border: none;
color:#fff;
border-radius:5%;
padding: 10px 0;
text-align: center;
text-decoration: none;
display: block;
font-size: 15px;
margin: 4px;
cursor: pointer;
font-weight:bold;
&:hover{
    background-color: #28acff;
}
`
const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:400px;
  background-color: #eeeeee;
  border-radius: 4px;
  overflow:auto ;
  
  
`
const Simple = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  
  
`
const SimpleLine = styled.div`
  display: flex;
  font-size: 25px;
  margin:20px;
  
  

`
const SimpleSpan = styled.div`
    width:50%;
    white-space:nowrap ;
    margin:0px 30px 30px 0px

`