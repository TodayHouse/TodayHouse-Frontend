import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Category, StoryPost } from '../components/index';
import axios from 'axios';
import theme from '../../../theme';
import { useInView } from 'react-intersection-observer';

const Story = () => {
  const url = theme.apiUrl;
  const [list, setList] = useState([]);
  const [ref, inView] = useInView(); // ref로 관찰 중인 요소가 감지되면 inView = true
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false); // 추가 데이터를 불러온 후에 page를 증가시키기 위해 사용
  const [isLast, setIsLast] = useState(false);

  const getItems = useCallback(async () => {
    if (!isLast) {
      setLoading(true); // 추가 데이터를 불러오는 작업이 완료되기 전까지 loading 상태
      await axios
        .get(url + `stories?page=${page}&size=3`)
        .then((response) => {
          if (response.data.result.last) setIsLast(true); // 마지막 페이지(last)인지 여부 설정
          let arr = [...list];
          response.data.result.content.forEach((data) => {
            arr.push(data);
          });
          setList(arr); // list 최신화
        })
        .catch((e) => {
          console.log(e);
        });
      setLoading(false); // 추가 데이터를 불러온 후에 loading = false로 변경
    }
  }, [page]);

  useEffect(() => {
    if (inView && !loading) setPage(page + 1); // 마지막 요소가 감지되고 로딩 중이 아니라면 페이지 증가
  }, [inView, loading]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <Container>
      <Category />
      <CardContainer>
        <TotalNum>전체 5</TotalNum>
        <CardItem>
          {list?.map((item, idx) =>
            list.length - 1 === idx ? ( //마지막 요소면 ref
              <div key={idx} ref={ref}>
                <StoryPost
                  id={item.id}
                  src={item.thumbnailUrl}
                  title={item.title}
                  // profile={item.profile}
                  nickname={item.writer}
                  // scrap={item.scrap}
                  // view={item.view}
                />
              </div>
            ) : (
              <div key={idx}>
                <StoryPost
                  id={item.id}
                  src={item.thumbnailUrl}
                  title={item.title}
                  // profile={item.profile}
                  nickname={item.writer}
                  // scrap={item.scrap}
                  // view={item.view}
                />
              </div>
            )
          )}
        </CardItem>
      </CardContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardContainer = styled.div`
  padding: 12px;
  margin-top: 60px;
  width: 100%;
`;
const TotalNum = styled.p``;
const CardItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(calc(33% - 20px), 1fr));
  gap: 20px;
`;
export default Story;
