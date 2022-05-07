import React, {useState} from 'react';
import styled from "styled-components";
const GuideBar_2 = () => {
  const [basicInfo, setInfo] = useState({category : '', link_url : ''})
  const [curPyeong, setPyeong] = useState(0);
  //카테고리 정보, 링크 정보 입력
  const PyeongSetter = (val) => {
    if(curPyeong != val)
    {
      setPyeong(val)
      document.getElementById('1')
    }
  }
  return (
    <GuideDetail_2>
      <p></p>
          <p/>
          <li>
          해당 글의 카테고리를 입력해주세요.
          </li>
          <p/>
          <li>
          입력해주신 카테고리는 페이지 검색에 이용됩니다.
          </li>
          <p/>
          
          <HouseType>주거 형태</HouseType>
          
          <SelectType id = "houseType">
            <option value = "one_room">
              원룸
            </option>
            <option value = "apartment">
              아파트
            </option>
            <option value = "officetel">
              오피스텔
            </option>
          </SelectType>
    <br></br>

          <HouseType style = {{marginRight : '15px'}}>방 개수</HouseType>
          <SelectType id = "houseType">
          <option value = "1">
              방 1개
            </option>
            <option value = "2">
              방 2개
            </option>
            <option value = "3">
              방 3개
            </option>
          </SelectType>

          <br></br>
          
          <HouseType style = {{marginRight : '35px'}}>평수</HouseType>
          <Radio type = 'radio' value = "1" name = "pyeong" onChange={() => setPyeong(0)}></Radio>
          단층
          <Radio type = 'radio' value = "2" name = 'pyeong' onChange={() => setPyeong(1)}></Radio>
          2층 단독
          <p></p>
    </GuideDetail_2>

  );
}

export default GuideBar_2

const GuideDetail_2 = styled.ul`
   border: 2px solid;
  border-color : skyblue;
  display: block;
  width : auto;
  margin-top : 0px;
  margin-bottom : 50px;
  margin-left : 20px;
  margin-right : 10px;
  
`
const HouseType = styled.span`
  font-size: 15px;
  font-weight: bold;
`
const SelectType = styled.select`
  font-size  : 15px;
  margin-left: 15px;
  margin-top: 20px;
  width : 100px;
`

const Radio = styled.input`
   font-size  : 15px;
    margin-left: 15px;
    margin-top: 20px;
`