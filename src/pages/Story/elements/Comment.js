import axios from "axios";
import React from "react";
import styled from "styled-components";
import { getCookie } from "../../../App";
import theme from "../../../theme";

//댓글 컴포넌트
const Comment = ({
    src,
    nickname,
    comment,
    time,
    id,
    isMine,
    getComments,
    getCommentsCount,
}) => {
    const url = theme.apiUrl;
    const accessToken = getCookie("login_id");

    const deleteComment = () => {
        axios
            .delete(url + `stories/reply/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
            })
            .then((res) => {
                console.log("res :>> ", res);
                if (res.data.isSuccess) {
                    getCommentsCount();
                    getComments();
                } else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    return (
        <Container>
            <ProfileImg width="30px" height="30px" src={src} />
            <Detail>
                <NicknameContainer>
                    <Nickname>{nickname}</Nickname>
                    <CommentContent>{comment}</CommentContent>
                </NicknameContainer>
                <Footer>
                    <span style={{ marginRight: 10, color: "#aaaaaa" }}>
                        {time[0] +
                            "년 " +
                            time[1] +
                            "월 " +
                            time[2] +
                            "일 " +
                            time[3] +
                            "시" +
                            time[4] +
                            "분" +
                            time[5] +
                            "초"}
                    </span>
                    <FooterContent>좋아요</FooterContent>
                    <FooterContent>·</FooterContent>
                    <FooterContent>답글 달기</FooterContent>
                    <FooterContent>·</FooterContent>
                    <FooterContent>신고</FooterContent>

                    {isMine ? (
                        <>
                            <FooterContent>·</FooterContent>
                            <FooterContent onClick={deleteComment}>
                                삭제
                            </FooterContent>
                        </>
                    ) : null}
                </Footer>
            </Detail>
        </Container>
    );
};

const Container = styled.article`
    display: flex;
    align-items: center;
    padding: 10px 0px;
`;
const ProfileImg = styled.img`
    border-radius: 15px;
    &:hover {
        cursor: pointer;
    }
`;
const Detail = styled.div`
    padding: 0px 10px;
`;
const NicknameContainer = styled.div`
    display: flex;
`;
const Nickname = styled.span`
    font-weight: bold;
`;
const CommentContent = styled.span`
    margin-left: 10px;
`;
const Footer = styled.div`
    display: flex;
`;
const FooterContent = styled.span`
    margin-right: 4px;
    color: #777777;
    &:hover {
        cursor: pointer;
    }
`;
export default Comment;
