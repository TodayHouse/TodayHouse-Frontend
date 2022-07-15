import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCookie } from "../../../App";
import theme from "../../../theme";
import CommentShare from "../elements/CommentShare";
import SidebarElement from "../elements/SidebarElement";

//집들이 게시글 상세 페이지의 좋아요, 스크랩, 댓글, 공유 버튼이 있는 사이드바 컴포넌트
const Sidebar = (props) => {
    const { like, storyId } = props;
    const [scrapCount, setScrapCount] = useState(0);
    const [isScraped, setIsScraped] = useState(false);
    const url = theme.apiUrl;
    const accessToken = getCookie("login_id");

    useEffect(() => {
        getScrapsCount();
        getIsScraped();
    }, [isScraped]);

    const getScrapsCount = () => {
        axios
            .get(url + `scraps/${storyId}/count`)
            .then((res) => {
                console.log("cnt :>> ", res);
                if (res.data.isSuccess) setScrapCount(res.data.result);
                else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    const getIsScraped = () => {
        axios
            .get(url + `scraps/${storyId}/exist`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
            })
            .then((res) => {
                console.log("is :>> ", res);
                if (res.data.isSuccess) setIsScraped(res.data.result);
                else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    const handleScrap = () => {
        if (isScraped)
            axios
                .delete(url + `scraps/${storyId}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
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
                    url + `scraps/${storyId}`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
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
        <Wrap>
            <SidebarWrap>
                <SidebarContainer>
                    <LikeAndScrap>
                        <SidebarElement
                            onClick={() => {
                                alert("dd");
                            }}
                            num={like}
                            type="like"
                        />
                        <SidebarElement
                            onClick={handleScrap}
                            num={scrapCount}
                            isChecked={isScraped}
                            type="scrap"
                            getIsScraped={getIsScraped}
                            getScrapsCount={getScrapsCount}
                        />
                    </LikeAndScrap>
                    <CommentAndShare>
                        <CommentShare
                            alt="topic"
                            src="https://img.icons8.com/ios/50/000000/topic.png"
                            num={226}
                        />
                        <CommentShare
                            alt="share"
                            src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-share-interface-dreamstale-lineal-dreamstale.png"
                            num={744}
                        />
                    </CommentAndShare>
                </SidebarContainer>
            </SidebarWrap>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 25%;
    height: 500px;
    position: sticky;
    top: 100px;
`;
const SidebarWrap = styled.div`
    display: flex;
    justify-content: center;
`;
const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const LikeAndScrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 50%;
    border-bottom: 1px solid #dddddd;
`;
const CommentAndShare = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 50%;
`;

export default Sidebar;
