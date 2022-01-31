import React from 'react';
import styled from "styled-components";
const GuideBar_1 = () => {
  return (
    <GuideDetail>
      <p></p>
      <li>
        간단한 자기소개 후, 인테리어 노하우를 담은 정보성 콘텐츠를 작성해주세요. (사진 최소 15장 이상)
        </li>
        <p/>
        <li>
        자기소개는 평수, 공간, 가족형태를 기본으로 합니다. (ex. "5평 원룸에 사는 독립 6개월차 자취생이에요")
        </li>
        <p/>
        <li>
        사진 속 제품정보를 본문에 최대한 적어주세요. (제품분류/브랜드/제품명 순서)
        </li>
        <p/>
        <li>
        사진 첨부 시 용량은 장당 최대 20MB까지 업로드할 수 있고, jpg, png, webp, heif, heic, gif 포맷을 지원합니다. (*GIF의 경우 권장 용량 1MB, 용량 제한 10MB)
        </li>
        <p/>
        <li>
        DIY 콘텐츠인 경우 준비물과 총비용, 소요시간, 난이도(상/중/하)를 작성해주세요.
          </li>
          <p/>
          <li>
          정보를 많이 입력할수록 검색 결과에 많이 노출되어 조회수가 올라갑니다.
          </li>
          <p/>
          <li>
          브랜드 혹은 제품 홍보 목적의 콘텐츠는 오픈이 불가합니다.
          </li>
          <p/>
          <li>
          작성해주신 노하우는 오늘의집 에디터 검수를 통해 오픈 여부가 결정되며, 결과는 10일 내에 댓글로 안내드립니다. (커버사진과 제목은 에디터에 의해 변경될 수 있습니다.)
          </li>
          <p></p>
    </GuideDetail>

  );
}

export default GuideBar_1

const GuideDetail = styled.ul`
  border: 2px solid;
  border-color : #bdbebd;
  display: block;
  width : auto;
  margin-top : 0px;
  margin-bottom : 50px;
  margin-left : 20px;
  margin-right : 10px;
`

