import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Range} from 'react-range';

const GuideBar_2 = () => {
  const [etype, setEtype] = useState('');
  useEffect(() => {
    setEtype(window.localStorage.getItem('k_etype'));
    console.log(etype);
  }, [etype]);
 
  const [theme, setTheme] = useState('');
  const [space, setSpace] = useState(0);
  const [resiType, setResi] = useState('');
  const [famType, setFam] = useState('');
  const [style, setStyle] = useState('');
  //카테고리 정보, 링크 정보 입력
  const handleResi = (e) => {
    console.log(e.target.value);
    window.localStorage.setItem('k_resi', e.target.value);
    setResi(e.target.value);
  };

  const handleFam = (e) => {
    console.log(e.target.value);
    window.localStorage.setItem('k_fam', e.target.value);
    setFam(e.target.value);
  };

  const handleStyle = (e) => {
    console.log(e.target.value);
    window.localStorage.setItem('k_style', e.target.value);
    setStyle(e.target.value);
  };

  const handleSpace = (e) => {
    console.log(e.target.value);
    window.localStorage.setItem('k_space', e.target.value);
    setSpace(e.target.value);
  };

  const handleTheme = (e) => {
    console.log(e.target.value);
    window.localStorage.setItem('k_theme', e.target.value);
    setTheme(e.target.value);
  };

  
  return (
    <GuideDetail_2>
      <p></p>
          <p/>
          <li>
          작성하실 집에 대한 정보를 입력해주세요.
          </li>
          <p/>
          <li>
          입력해주신 정보는 페이지 검색 등에 이용됩니다.
          </li>
          <p/>
          
          {etype == "STORY" ? <div>
          <SelectType id = "resiType" onChange  = {handleResi}>
            <option value = "STUDIO">
              원룸
            </option>
            <option value = "APARTMENT">
              아파트
            </option>
            <option value = "DETACHED">
              단독주택
            </option>
          </SelectType>
         
          <SelectType id = "floorSpace" onChange  = {handleSpace}>
            <option value = "5" selected>
              10평 미만
            </option>
            <option value = "10">
              10평 이상
            </option>
            <option value = "20">
              20평 이상
            </option>
            <option value = "30">
              30평 이상
            </option>
            <option value = "40">
              40평 이상
            </option>
            <option value = "50">
              50평 이상
            </option>
          </SelectType>

          <SelectType id = "familyType"  onChange  = {handleFam}>
            <option value = "SINGLE" selected>
              싱글
            </option>
            <option value = "NUCLEAR">
              핵가족
            </option>
            <option value = "EXTENDED">
              대가족
            </option>
          </SelectType>
          
          <SelectType id = "style" onChange = {handleStyle}>
            <option value = "MODERN" selected>
              모던
            </option>
            <option value = "SIMPLE">
              심플
            </option>
            <option value = "NATURAL">
              내츄럴
            </option>
            <option value = "CLASSIC">
              클래식
            </option>
          </SelectType>
          </div>
          :
          <div>
            <div style = {{fontSize : 18, display : 'inline', fontWeight : 600}}>테마 선택</div> 
            <SelectType id = "theme" onChange  = {handleTheme}>
            <option value = "DIY">
              DIY
            </option>
            <option value = "CLEANING">
              청소
            </option>
            <option value = "ARCHITECT">
              건축
            </option>
          </SelectType>
         
          </div>
          }
          
         
       
    </GuideDetail_2>
  );
}

export default GuideBar_2

const GuideDetail_2 = styled.ul`
  border: 2px solid;
  border-color : skyblue;
  display: block;
  width : 540px;
  margin-top : 0px;
  margin-bottom : 50px;
  margin-left : 20px;
  margin-right : 10px;
  height : 160px;
`

const SelectType = styled.select`
  font-size  : 15px;
  margin-left: 15px;
  margin-top: 20px;
  width : 100px;
  height : 35px;
`

const InputStyle = styled.input`
   font-size  : 15px;
    margin-left: 15px;
    margin-top: 20px;
`