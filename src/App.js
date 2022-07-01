import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import {
    Login,
    Main,
    Signup,
    Store,
    Story,
    StoryPostDetail,
    Product,
    AdviceDetail,
    Advices,
    Editor,
    Board,
    Search,
    Cart,
    Order,
    SocialSignup,
    Error,
    MyPage,
    Setting,
    Scraped,
    Seller,
    UploadProduct,
    MyOrder,
} from "../src/pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
    return cookies.set(name, value, option); //이름,밸류
};

export const getCookie = (name) => {
    return cookies.get(name); //쿠키 가져오기 (이름으로)
};

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
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div
                    style={{
                        width: "100vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "skyblue",
                    }}>
                    <Routes>
                        <Route path="/" element={<Main />}>
                            <Route
                                path="/advices"
                                element={<Advices />}></Route>
                            <Route
                                path="/advices/:id"
                                element={<AdviceDetail />}></Route>
                            <Route path="/event" element={<Board />}></Route>
                            <Route path="/store" element={<Store />}></Route>
                            <Route path="/story" element={<Story />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/product/:id" element={<Product />} />
                            <Route
                                path="/story/post/:id"
                                element={<StoryPostDetail />}
                            />
                            <Route path="/order" element={<Order />} />
                            <Route
                                path="/social-signup"
                                element={<SocialSignup />}
                            />
                            <Route path="/error" element={<Error />} />
                            <Route path="/search" element={<Search />}></Route>
                            <Route path="/mypage" element={<MyPage />}>
                                <Route
                                    path="/mypage/setting"
                                    element={<Setting></Setting>}></Route>
                                <Route
                                    path="/mypage/myorder"
                                    element={<MyOrder></MyOrder>}></Route>
                                <Route
                                    path="/mypage/scrap"
                                    element={<Scraped></Scraped>}></Route>
                            </Route>
                        </Route>
                        <Route path="/editor" element={<Editor />}></Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />}></Route>
                        <Route path="/seller" element={<Seller />}></Route>
                        <Route
                            path="/upload-product"
                            element={<UploadProduct />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
