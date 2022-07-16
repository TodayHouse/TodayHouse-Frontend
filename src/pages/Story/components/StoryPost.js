import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../../../App";
import theme from "../../../theme";

//집들이 페이지의 그리드로 뿌려져있는 게시글 하나하나의 미리보기
const StoryPost = (props) => {
    const { src, title, profile, nickname, views, isScraped, id } = props;
    const jwt = getCookie("login_id");
    const ref = useRef();
    const bookmarkRef = useRef();
    const navigate = useNavigate();
    const url = theme.apiUrl;
    const [scrapCount, setScrapCount] = useState(0);

    useEffect(() => {
        window.addEventListener("click", routing);

        return () => {
            window.removeEventListener("click", routing);
        };
    });

    useEffect(() => {
        getScrapsCount();
    }, [isScraped]);

    const getScrapsCount = () => {
        axios
            .get(url + `scraps/${id}/count`)
            .then((res) => {
                // console.log("cnt :>> ", res);
                if (res.data.isSuccess) setScrapCount(res.data.result);
                else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    const routing = (e) => {
        //북마크를 클릭하면 라우팅 x
        if (
            ref.current.contains(e.target) &&
            !bookmarkRef.current.contains(e.target)
        )
            navigate(`/story/post/${id}`);
    };

    const handleScrap = () => {
        if (isScraped)
            axios
                .delete(url + `scraps/${id}`, {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                    withCredentials: true,
                })
                .then((res) => {
                    console.log("res :>> ", res);
                    if (res.data.isSuccess) {
                        alert("스크랩을 취소했습니다.");
                        window.location.reload();
                    } else alert(res.data.message);
                })
                .catch((e) => {
                    console.log("e :>> ", e);
                });
        else
            axios
                .post(
                    url + `scraps/${id}`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                        },
                        withCredentials: true,
                    }
                )
                .then((res) => {
                    console.log("res :>> ", res);
                    if (res.data.isSuccess) {
                        alert("스크랩했습니다.");
                        window.location.reload();
                    } else alert(res.data.message);
                })
                .catch((e) => {
                    console.log("e :>> ", e);
                });
    };
    return (
        <Container ref={ref}>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: 8,
                }}>
                <Image src={src} />
                <Bookmark ref={bookmarkRef} onClick={handleScrap}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        class="icon">
                        <defs>
                            <path
                                id="scrap-icon-122-b"
                                d="M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z"></path>
                            <filter
                                id="scrap-icon-122-a"
                                width="150%"
                                height="150%"
                                x="-25%"
                                y="-25%"
                                filterUnits="objectBoundingBox">
                                <feOffset
                                    in="SourceAlpha"
                                    result="shadowOffsetOuter1"></feOffset>
                                <feGaussianBlur
                                    in="shadowOffsetOuter1"
                                    result="shadowBlurOuter1"
                                    stdDeviation="1.5"></feGaussianBlur>
                                <feComposite
                                    in="shadowBlurOuter1"
                                    in2="SourceAlpha"
                                    operator="out"
                                    result="shadowBlurOuter1"></feComposite>
                                <feColorMatrix
                                    in="shadowBlurOuter1"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"></feColorMatrix>
                            </filter>
                            <filter
                                id="scrap-icon-122-c"
                                width="150%"
                                height="150%"
                                x="-25%"
                                y="-25%"
                                filterUnits="objectBoundingBox">
                                <feGaussianBlur
                                    in="SourceAlpha"
                                    result="shadowBlurInner1"
                                    stdDeviation="1.5"></feGaussianBlur>
                                <feOffset
                                    in="shadowBlurInner1"
                                    result="shadowOffsetInner1"></feOffset>
                                <feComposite
                                    in="shadowOffsetInner1"
                                    in2="SourceAlpha"
                                    k2="-1"
                                    k3="1"
                                    operator="arithmetic"
                                    result="shadowInnerInner1"></feComposite>
                                <feColorMatrix
                                    in="shadowInnerInner1"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                            </filter>
                        </defs>
                        <g
                            fill={isScraped ? theme.mainColor : "none"}
                            fill-rule="nonzero"
                            transform="matrix(1 0 0 -1 0 24)">
                            <use
                                fill="#000"
                                filter="url(#scrap-icon-122-a)"
                                href="#scrap-icon-122-b"></use>
                            <use
                                fill="#FFF"
                                fill-opacity=".4"
                                href="#scrap-icon-122-b"></use>
                            <use
                                fill="#000"
                                filter="url(#scrap-icon-122-c)"
                                href="#scrap-icon-122-b"></use>
                            <path
                                stroke="#FFF"
                                d="M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z"></path>
                        </g>
                    </svg>
                </Bookmark>
            </div>
            <Title>{title}</Title>
            <User>
                <img
                    alt="img"
                    style={{ borderRadius: 20 }}
                    width="20px"
                    height="20px"
                    src={profile}
                />
                <Nickname>{nickname}</Nickname>
            </User>
            <Footer>
                <span>
                    스크랩 {scrapCount.toLocaleString()} · 조회{" "}
                    {views.toLocaleString()}
                </span>
            </Footer>
        </Container>
    );
};

const Container = styled.div`
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
const Bookmark = styled.button`
    background: none;
    border: none;
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
export default StoryPost;
