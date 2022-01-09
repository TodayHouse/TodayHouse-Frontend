import './App.css';
import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import Login from'./pages/Login/Login';
import Signup from'./pages/Signup/Signup'
import Main from'./pages/Main/Main';
import {
  BrowserRouter,
  Routes,
  Link,
  Route
  
}from 'react-router-dom'

import {Cookies} from 'react-cookie'
const cookies =new Cookies();

export const setCookie = (name, value,option) =>{
  return cookies.set(name,value,option); //이름,밸류
}

export const getCookie =(name)=>{
  return cookies.get(name); //쿠키 가져오기 (이름으로)
}


function App() {
/*
  console.log("쿠키생성");
  //임시로 생성한 쿠키
  setCookie("login",
  false,
  {path:'/'}
  )

 console.log(getCookie("login"))
*/ 


  return (
    <BrowserRouter>
        <div>
      
            <Routes>
              <Route path ="/" element={<Main/>}/>
              <Route path ="/login" element={<Login/>}/>
              <Route path ="/signup" element={<Signup/>}></Route>
            </Routes>
        </div>
      
    </BrowserRouter>
  );
}

export default App;
