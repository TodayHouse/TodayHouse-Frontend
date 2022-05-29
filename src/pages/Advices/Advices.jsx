import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import GridCards from "./GridCards";
import {Row} from "antd"
import "antd/dist/antd.css"
import axios from "axios";
import theme from '../../theme'
import { useInView } from 'react-intersection-observer'

const Advices =() =>{
    const url = theme.apiUrl;
    const [items,setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [page, setPage] = useState(0);
    const [isLast, setIsLast] = useState(false);
    const [ref, inView] = useInView(); // ref로 관찰 중인 요소가 감지되면 inView = true

    const load = useCallback(async () => {
        if (!isLast) {
          setIsLoaded(true); // 추가 데이터를 불러오는 작업이 완료되기 전까지 loading 상태
          await axios
            .get(url + `stories?page=${page}&size=4`)
            .then((response) => {
              if (response.data.result.last) setIsLast(true); // 마지막 페이지(last)인지 여부 설정
              let arr = [...items];
              response.data.result.content.forEach((data) => {
                arr.push(data);
              });
              setItems(arr); // items 최신화
            })
            .catch((e) => {
              console.log(e);
            });
          setIsLoaded(false); // 추가 데이터를 불러온 후에 loading = false로 변경
        }
      }, [page]);

  
  
    
    useEffect(() => {
        if (inView && !isLoaded) setPage(page + 1); // 마지막 요소가 감지되고 로딩 중이 아니라면 페이지 증가
    }, [inView, isLoaded]);

    useEffect(() => {
        load();
      }, [load]);

  
    return(
        <Container id="container">
            <Text>테마별 노하우</Text>
            <Scroll id="scroll">
                <Row gutter={50}>
                {items && items.map((item,index)=> //반복문
                        items.length - 1 === index ?(
                        <React.Fragment key={index} >
                            <GridCards
                            item ={item}
                            ref={ref}
                             // 임시로 순서대로 id부여
                            >
                            </GridCards>

                        </React.Fragment>
                        ):(
                            <React.Fragment key={index}>
                            
                            <GridCards
                            item ={item}
                             // 임시로 순서대로 id부여
                            >
                            </GridCards>
                            

                        </React.Fragment> 
                        )
                    )
                }

                    
                </Row>
                
            </Scroll>
            
        </Container>
    )
}

export default Advices
const Container= styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
`
const Scroll =styled.div`
position: relative;
display: flex;
width:100%;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: lightgreen;
border-bottom: 1px solid #ededed;
`
const Text =styled.div`
  position: relative;
  display: inline-block;
  margin: 6px 10px 0;
  padding: 14px 6px;
  font-size: 25px;
  line-height: 26px;
  font-weight: 700;
  
`
const LoadMore = styled.button`
    cursor: pointer;
    color: #198754;
    border-color: #198754;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    

`