import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "../elements/Comment";
import Pagination from "../../../components/Pagination";
import axios from "axios";
import theme from "../../../theme";
import { getCookie } from "../../../App";
import { useSelector, useDispatch } from "react-redux";
import { handleIsFollowing, setCount } from "../../../redux/reducer/story";
//집들이 게시글 상세 페이지의 가장 아래 부분에 있는 글쓴이 프로필 및 댓글창 컴포넌트

const Footer = (props) => {
    const { writer, storyId } = props;
    const dispatch = useDispatch();
    const viewCount = useSelector((state) => state.story.viewCount);
    const likeCount = useSelector((state) => state.story.likeCount);
    const scrapCount = useSelector((state) => state.story.scrapCount);
    const isFollowing = useSelector((state) => state.story.isFollowing);
    const writerId = JSON.parse(localStorage.getItem("storyWriterId"));

    const url = theme.apiUrl;
    const accessToken = getCookie("login_id");
    const userId = getCookie("index_id");

    const [content, setContent] = useState("");
    const [commentList, setCommentList] = useState([]);

    const [page, setPage] = useState(1);
    const totalItemsCount = useSelector((state) => state.story.commentCount);

    useEffect(() => {
        getIsFollowing();
        getCommentsCount();
        getComments(page);
    }, []);

    const getIsFollowing = () => {
        axios
            .get(url + `follows?fromId=${userId}&toId=${writerId}`)
            .then((res) => {
                console.log("res :>> ", res);
                if (res.data.isSuccess) {
                    dispatch(handleIsFollowing(res.data.result));
                } else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    const getCommentsCount = () => {
        axios
            .get(url + `stories/reply/${storyId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
            })
            .then((res) => {
                console.log("res :>> ", res.data.result);
                if (res.data.isSuccess) {
                    dispatch(
                        setCount({
                            name: "commentCount",
                            count: res.data.result.totalElements,
                        })
                    );
                } else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    const getComments = (page) => {
        axios
            .get(url + `stories/reply/${storyId}?page=${page - 1}&size=5`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
            })
            .then((res) => {
                if (res.data.isSuccess) {
                    setCommentList(res.data.result.content);
                } else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    const onChange = (e) => {
        setContent(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                url + "stories/reply",
                { content, storyId },
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
                    setContent("");
                    getComments(page);
                    window.location.reload();
                } else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    const handleFollow = () => {
        if (isFollowing) {
            axios
                .delete(
                    url + `follows?fromId=${parseInt(userId)}&toId=${writerId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                        withCredentials: true,
                    }
                )
                .then((res) => {
                    if (res.data.isSuccess) {
                        console.log("res.data :>> ", res.data);
                        getIsFollowing();
                    } else alert(res.data.message);
                })
                .catch((e) => {
                    console.log("e :>> ", e);
                });
        } else {
            axios
                .post(
                    url + "follows",
                    { fromId: parseInt(userId), toId: writerId },
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                        withCredentials: true,
                    }
                )
                .then((res) => {
                    if (res.data.isSuccess) {
                        console.log("res.data :>> ", res.data);
                        getIsFollowing();
                    } else alert(res.data.message);
                })
                .catch((e) => {
                    console.log("e :>> ", e);
                });
        }
    };
    return (
        <Container>
            <LikeContainer>
                <LikeDetail>좋아요 {likeCount}</LikeDetail>
                <LikeDetail>스크랩 {scrapCount}</LikeDetail>
                <LikeDetail>댓글 {totalItemsCount}</LikeDetail>
                <LikeDetail>조회 {viewCount}</LikeDetail>
            </LikeContainer>
            <Profile>
                <User>
                    <ProfileImg
                        width="80px"
                        height="80px"
                        src={writer?.profileImage}
                    />
                    <Name>{writer?.nickname}</Name>
                </User>
                <FollowBtn isFollowing={isFollowing} onClick={handleFollow}>
                    {isFollowing ? "팔로잉" : "팔로우"}
                </FollowBtn>
            </Profile>
            <CommentContainer>
                <span style={{ fontSize: 20, fontWeight: "bold" }}>
                    댓글 {totalItemsCount}
                </span>
                <UploadComment>
                    <CommentProfile
                        width="30px"
                        height="30px"
                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MTFfMjEy%2FMDAxNjI2MDA1ODgzODM5.HmYZGldiMudAiUFuU9MWO-BgE7zY7gaRbeSHVQXHkMEg.EKgu58sMQsOHAVTT5U-J-wb0ZtzkYhLU6v7a1Oz4ZlEg.JPEG.yhn2297%2FCB62AC49-461A-4258-8E28-210570937650.jpeg&type=sc960_832"
                    />
                    <form
                        style={{ width: "100%", padding: "20px 0px" }}
                        onSubmit={onSubmit}>
                        <CommentInputWrap text={content}>
                            <CommentInput
                                type="text"
                                placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
                                value={content}
                                onChange={onChange}
                            />
                            <div onClick={onSubmit}>입력</div>
                        </CommentInputWrap>
                    </form>
                </UploadComment>
                {commentList.map((e, idx) => (
                    <Comment
                        key={idx}
                        id={e.id}
                        src={e.replyUserDto.profileImage}
                        nickname={e.replyUserDto.nickname}
                        comment={e.content}
                        time={e.createdDate}
                        isMine={e.isMine}
                        getComments={getComments}
                        getCommentsCount={getCommentsCount}
                    />
                ))}
                <Pagination
                    setPage={setPage}
                    page={page}
                    totalItemsCount={totalItemsCount}
                    callApi={getComments}
                />
            </CommentContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`;
const LikeContainer = styled.div`
    display: flex;
`;
const LikeDetail = styled.span`
    margin-right: 16px;
    color: #999999;
`;
const Profile = styled.div`
    display: flex;
    align-items: center;
    padding: 40px 0px;
    border-bottom: 1px solid #dddddd;
`;
const User = styled.div`
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;
const ProfileImg = styled.img`
    border-radius: 50px;
`;
const Name = styled.span`
    font-weight: bold;
    font-size: 24px;
    margin-left: 20px;
`;
const FollowBtn = styled.button`
    border: none;
    background-color: white;
    font-weight: bold;
    font-size: 24px;
    margin-left: 20px;
    color: ${(props) =>
        props.isFollowing ? "#9e9e9e" : props.theme.mainColor};
`;
const CommentContainer = styled.div`
    padding: 20px 0px;
`;
const UploadComment = styled.div`
    display: flex;
    align-items: center;
`;
const CommentProfile = styled.img`
    border-radius: 15px;
`;
const CommentInputWrap = styled.div`
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #dddddd;
    padding: 0 16px;
    cursor: text;
    position: relative;
    background-color: white;
    width: 100%;
    margin-left: 10px;

    & > div {
        white-space: nowrap;
        color: ${(props) =>
            props.text === "" ? "#aaaaaa" : props.theme.mainColor};
        font-weight: ${(props) => (props.text === "" ? "400" : "700")};
        cursor: ${(props) => (props.text === "" ? "default" : "pointer")};
    }
`;
const CommentInput = styled.input`
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 10px 0;
    &:focus {
        outline: none;
    }
    ::placeholder {
        color: #aaaaaa;
    }
`;
export default Footer;
