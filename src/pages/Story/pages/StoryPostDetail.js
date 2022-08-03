import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Sidebar, FixedMenu, Footer } from "../components/index";
import { useParams } from "react-router-dom";
import axios from "axios";
import theme from "../../../theme";
import { Carousel } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { setCount, setWriterId } from "../../../redux/reducer/story";
const sample = [
    { category: "공간", data: "아파트" },
    { category: "평수", data: "33평" },
    { category: "작업", data: "전문가" },
    { category: "분야", data: "리모델링" },
    { category: "가족형태", data: "신혼부부" },
    { category: "지역", data: "대구광역시 달성군" },
    { category: "기간", data: "1개월" },
    { category: "예산", data: "4,300만원" },
    {
        category: "세부공사",
        data: "주방리모델링, 조명시공, 가벽&파티션",
    },
];

const StoryPostDetail = () => {
    const storyId = useParams().id;
    const url = theme.apiUrl;
    const dispatch = useDispatch();

    const [info, setInfo] = useState({});
    const writerId = useSelector((state) => state.story.writerId);

    //스크롤 시 최상단으로부터의 offset을 계산하여 최상단이 아닐 때 FixedMenu가 보이도록 구현
    const onScroll = (e) => {
        const offset = document
            .getElementById("container")
            ?.getBoundingClientRect().top;
        if (offset === 70)
            document.getElementById("fixedMenu").style.visibility = "hidden";
        else document.getElementById("fixedMenu").style.visibility = "visible";
    };

    window.addEventListener("scroll", onScroll);

    useEffect(() => {
        document.getElementById("fixedMenu").style.visibility = "hidden";
        axios
            .get(url + `stories/${storyId}`)
            .then((response) => {
                console.log(response.data.result);
                if (response.data.isSuccess) {
                    setInfo(response.data.result);
                    dispatch(setWriterId(response.data.result.writer.id));
                    dispatch(
                        setCount({
                            name: "viewCount",
                            count: response.data.result.views,
                        })
                    );
                    dispatch(
                        setCount({
                            name: "likeCount",
                            count: response.data.result.liked,
                        })
                    );
                } else alert(response.data.message);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <Container id="container">
            <MainImage
                width="125%"
                height="500px"
                src={info.imageUrls && info.imageUrls[0]}
            />
            <Wrap>
                <WhiteSpace />
                <ContentContainer>
                    <Post>
                        <p style={{ color: "#777777", fontSize: 18 }}>
                            온라인 집들이
                        </p>
                        <Title>{info.title}</Title>
                        <ProfileContainer>
                            <Profile>
                                <ProfileImg
                                    width="60px"
                                    height="60px"
                                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjhfMTEx%2FMDAxNjA2NTQ0MjUwMTUx.uIBm1wL-ju7ADAvnTc5dwCM1ZuAUF2M9DD5fnHhc9mYg.sErQnf3Qjk3pEWPEgINwAYu_ricFFBLIyyIqpYaYADsg.JPEG.wind380%2F%25BF%25A4%25BD%25C3%25C6%25BC%25BB%25F3%25B0%25A1%25B3%25BB%25BA%25CE.jpg&type=sc960_832"
                                />
                                <Nickname>
                                    <b style={{ fontSize: 16 }}>
                                        {info.writer?.nickname}
                                    </b>
                                    <span
                                        style={{
                                            color: "#777777",
                                            fontSize: 16,
                                        }}>
                                        {info.createdAt
                                            ? info.createdAt[0] +
                                              "년 " +
                                              info.createdAt[1] +
                                              "월 " +
                                              info.createdAt[2] +
                                              "일"
                                            : ""}
                                    </span>
                                </Nickname>
                            </Profile>
                            <FollowButton>+ 팔로우</FollowButton>
                        </ProfileContainer>
                        <div>
                            <SummaryContainer>
                                <Simple>
                                    <SimpleInfo>
                                        <img
                                            alt="apartment"
                                            width="30px"
                                            height="30px"
                                            src="https://img.icons8.com/ios/50/000000/apartment.png"
                                        />
                                        <span style={{ marginLeft: 10 }}>
                                            원룸&오피스텔
                                        </span>
                                    </SimpleInfo>
                                    <SimpleInfo>
                                        <img
                                            alt="structural"
                                            width="30px"
                                            height="30px"
                                            src="https://img.icons8.com/ios-glyphs/30/000000/structural.png"
                                        />
                                        <span style={{ marginLeft: 10 }}>
                                            33평
                                        </span>
                                    </SimpleInfo>
                                    <SimpleInfo>
                                        <img
                                            alt="maintenance"
                                            width="30px"
                                            height="30px"
                                            src="https://img.icons8.com/ios/50/000000/maintenance.png"
                                        />
                                        <span style={{ marginLeft: 10 }}>
                                            리모델링
                                        </span>
                                    </SimpleInfo>
                                    <SimpleInfo style={{ borderRight: "none" }}>
                                        <img
                                            alt="couple-man-woman"
                                            width="30px"
                                            height="30px"
                                            src="https://img.icons8.com/ios/50/000000/couple-man-woman.png"
                                        />
                                        <span style={{ marginLeft: 10 }}>
                                            신혼부부
                                        </span>
                                    </SimpleInfo>
                                </Simple>
                                <Detail>
                                    {sample.map((e, idx) => {
                                        return (
                                            <div
                                                key={idx}
                                                style={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    fontSize: 14,
                                                    padding: "0px 4px",
                                                }}>
                                                <dt
                                                    style={{
                                                        color: "#777777",
                                                        marginRight: 4,
                                                    }}>
                                                    {e.category}
                                                </dt>
                                                <dd>{e.data}</dd>
                                            </div>
                                        );
                                    })}
                                </Detail>
                            </SummaryContainer>
                            <div
                                style={{
                                    marginTop: 50,
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                <Carousel images={info.imageUrls} />
                                <Contents>{info.content}</Contents>
                            </div>
                            <Footer writer={info.writer} storyId={storyId} />
                        </div>
                    </Post>
                </ContentContainer>
                <Sidebar storyId={storyId} />
            </Wrap>
            <FixedMenu />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    //position: relative;
`;
const MainImage = styled.img``;
const Post = styled.div`
    width: 100%;
    margin-top: 50px;
`;
const Title = styled.h1`
    font-weight: bold;
`;
const ProfileContainer = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
`;
const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;
const ProfileImg = styled.img`
    border-radius: 60px;
`;
const Nickname = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0px 16px;
`;
const FollowButton = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 20px;
    background-color: ${(props) => props.theme.mainColor};
    border: none;
    border-radius: 4px;
    color: white;
    &:hover {
        background-color: #74a9d4;
        cursor: pointer;
    }
`;
const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 100%;
    height: 200px;
    background-color: #eeeeee;
    border-radius: 4px;
`;
const Simple = styled.div`
    display: flex;
    width: 95%;
    height: 50%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccccc;
`;
const Detail = styled.dl`
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    height: 50%;
    align-items: center;
`;
const SimpleInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    border-right: 1px solid #cccccc;
    font-size: 14px;
`;
const ContentContainer = styled.div`
    display: flex;
    width: 80%;
    height: 100%;
    justify-content: center;
`;
const Contents = styled.p`
    margin-top: 80px;
    font-size: 18px;
`;
const WhiteSpace = styled.div`
    width: 10%;
`;
export default StoryPostDetail;
