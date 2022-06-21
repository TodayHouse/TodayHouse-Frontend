import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Star, Pagination, Modal } from "../../../components";
import { Button } from "../../../elements";
import theme from "../../../theme";
import { ReviewDetail } from ".";
import $ from "jquery";
import modalX from "../../../img/x.png";
import arrow from "../../../img/ExpandMoreArrow.png";
import { useSelector } from "react-redux";
import axios from "axios";
import { getCookie } from "../../../App";

const mock = [1, 2, 3, 4, 5, 6];
const reviewPerStar = [
    { rating: 5, num: 100 },
    { rating: 4, num: 200 },
    { rating: 3, num: 200 },
    { rating: 2, num: 200 },
    { rating: 1, num: 200 },
];
const reviewPerOption = ["전체", "SS 슈퍼싱글", "Q 퀸"];

const Review = (props) => {
    const { productId } = props;

    const [bestClicked, setBestClicked] = useState(true);
    const [recentClicked, setRecentClicked] = useState(false);
    const [photoReviewClicked, setPhotoReviewClicked] = useState(false);
    const [starClicked, setStarClicked] = useState(false);
    const [optionClicked, setOptionClicked] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [policyOpen, setPolicyOpen] = useState(false);

    const [rating, setRating] = useState(0);
    const [modalImg, setModalImg] = useState([]);
    const [content, setContent] = useState("");

    const form = useSelector((state) => state.product.form);
    const url = theme.apiUrl;
    const accessToken = getCookie("login_id");
    const formData = new FormData();

    const closeModal = () => {
        setModalOpen(false);
        setRating(0);
        setModalImg([]);
    };

    const handleRating = (e) => {
        setRating(e);
    };

    const handleModalImg = (e) => {
        const img = URL.createObjectURL(e.target.files[0]);
        let list = [];
        list.push(img);
        setModalImg(list);
    };

    const removeModalImg = () => {
        setModalImg([]);
    };

    const handleContent = (e) => {
        setContent(e.target.value);
    };

    const uploadReview = (e) => {
        e.preventDefault();
        if (rating === 0 && content === "") {
            alert("입력되지 않은 정보가 있습니다.");
        } else {
            if (window.confirm("리뷰를 등록하시겠습니까?")) {
                formData.append("file", modalImg);
                formData.append(
                    "request",
                    new Blob(
                        [
                            JSON.stringify({
                                content,
                                productId,
                                rating,
                            }),
                        ],
                        { type: "application/json" }
                    )
                );

                axios
                    .post(url + "reviews", formData, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                        withCredentials: true,
                    })
                    .then((response) => {
                        console.log(response);
                        if (response.data.isSuccess) {
                            alert("리뷰가 등록되었습니다.");
                        }
                        closeModal();
                    })
                    .catch((e) => {
                        alert(e.response.data.message);
                    });
            }
        }
    };

    useEffect(() => {
        console.log("form :>> ", form);
    }, []);

    useEffect(() => {
        //중복 선택이 안 되고, 최소 하나는 선택해야함
        if (bestClicked) if (recentClicked) setRecentClicked(!recentClicked);
        if (!bestClicked && !recentClicked) setBestClicked(true);
    }, [bestClicked]);

    useEffect(() => {
        if (recentClicked) if (bestClicked) setBestClicked(!bestClicked);
        if (!bestClicked && !recentClicked) setRecentClicked(true);
    }, [recentClicked]);

    useEffect(() => {
        if (starClicked) {
            $("#rating").show();
            if (optionClicked) setOptionClicked(false);
        } else $("#rating").hide();
    }, [starClicked]);

    useEffect(() => {
        if (optionClicked) {
            $("#option").show();
            if (starClicked) setStarClicked(false);
        } else $("#option").hide();
    }, [optionClicked]);

    return (
        <Container id={props.id}>
            <HeaderView>
                <Header>
                    리뷰 <NumOfReviews>9,866</NumOfReviews>
                </Header>
                <WriteView>
                    <Write
                        onClick={() => {
                            setModalOpen(true);
                        }}>
                        리뷰쓰기
                    </Write>
                </WriteView>
            </HeaderView>
            <ReviewSummary>
                <StarView>
                    <Star rating={4.8} size="36px" />
                    <Rating>4.8</Rating>
                </StarView>
            </ReviewSummary>
            <ReviewFilterContainer>
                <FilterOrderList>
                    <BestRecent>
                        <BestOrder
                            style={{
                                color: bestClicked ? theme.mainColor : "gray",
                            }}
                            onClick={() => {
                                setBestClicked(!bestClicked);
                            }}>
                            베스트순
                        </BestOrder>
                        <RecentOrder
                            style={{
                                color: recentClicked ? theme.mainColor : "gray",
                            }}
                            onClick={() => {
                                setRecentClicked(!recentClicked);
                            }}>
                            최신순
                        </RecentOrder>
                    </BestRecent>
                    <PhotoReview
                        style={{
                            color: photoReviewClicked
                                ? theme.mainColor
                                : "gray",
                        }}
                        onClick={() => {
                            setPhotoReviewClicked(!photoReviewClicked);
                        }}>
                        <img
                            alt="gallery"
                            width="20px"
                            height="20px"
                            src={require("../../../img/gallery.png")}
                        />
                        <span style={{ marginLeft: 5 }}>사진리뷰</span>
                    </PhotoReview>
                </FilterOrderList>
                <FilterOptionList>
                    <Select
                        onClick={() => {
                            setStarClicked(!starClicked);
                        }}>
                        별점
                        <img
                            alt="ExpandMoreArrow"
                            src={require("../../../img/ExpandMoreArrow.png")}
                        />
                    </Select>
                    <Select
                        style={{ marginLeft: 5 }}
                        onClick={() => {
                            setOptionClicked(!optionClicked);
                        }}>
                        옵션
                        <img
                            alt="ExpandMoreArrow"
                            src={require("../../../img/ExpandMoreArrow.png")}
                        />
                    </Select>
                    <SelectRating id="rating">
                        {reviewPerStar.map((data, idx) => (
                            <SelectOptionStar
                                key={idx}
                                onClick={() => {
                                    $("#rating").hide();
                                }}>
                                <Star rating={data.rating} size="20px" />
                                <span style={{ marginLeft: 5, fontSize: 16 }}>
                                    ({data.num}개)
                                </span>
                            </SelectOptionStar>
                        ))}
                    </SelectRating>
                    <SelectOption id="option">
                        {reviewPerOption.map((data, idx) => (
                            <SelectOptionElement
                                key={idx}
                                onClick={() => {
                                    $("#option").hide();
                                }}>
                                {data}
                            </SelectOptionElement>
                        ))}
                    </SelectOption>
                </FilterOptionList>
            </ReviewFilterContainer>
            {mock.map((data, idx) => (
                <ReviewDetail key={idx} />
            ))}
            <Pagination />
            <Modal
                modalOpen={modalOpen}
                closeModal={closeModal}
                width="700"
                height="700">
                <ModalWrap>
                    <header>
                        <ModalTitle>리뷰 쓰기</ModalTitle>
                        <ModalCloseBtn onClick={closeModal}>
                            <img
                                width="32"
                                height="32"
                                src={modalX}
                                alt="modalX"
                            />
                        </ModalCloseBtn>
                    </header>
                    <ModalMain>
                        <form onSubmit={uploadReview}>
                            <ModalProductInfo>
                                {/* <ModalProductImg
                                    src={form.imageUrls[0]}
                                    alt="img"
                                /> */}
                                <ModalProductInfoText>
                                    <span>{form.brand}</span>
                                    <span>{form.title}</span>
                                </ModalProductInfoText>
                            </ModalProductInfo>
                            <ModalRatingContainer>
                                <ModalText>별점 평가</ModalText>
                                <ModalRating>
                                    <span>만족도</span>
                                    <Star
                                        size="36px"
                                        changeRating={handleRating}
                                        rating={rating}
                                    />
                                </ModalRating>
                            </ModalRatingContainer>
                            <ModalImageContainer>
                                <ModalText>사진 첨부 (선택)</ModalText>
                                <span>사진을 첨부해주세요. (최대 1장)</span>
                                {modalImg.length !== 0 ? (
                                    <ModalImgView>
                                        <ModalImgRemoveBtn
                                            onClick={removeModalImg}>
                                            삭제
                                        </ModalImgRemoveBtn>
                                        <ModalImg
                                            src={modalImg}
                                            alt="modalImg"
                                        />
                                    </ModalImgView>
                                ) : null}
                                <ModalImgBtn htmlFor="modal-img">
                                    <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        style={{
                                            width: 24,
                                            height: 24,
                                            margin: "0px 8px",
                                            fill: theme.mainColor,
                                        }}>
                                        <path d="M21.1 4c.5 0 .9.4.9.9v14.2c0 .5-.4.9-.9.9H2.9a.9.9 0 01-.9-.9V4.9c0-.5.4-.9.9-.9h18.2zm-.91 1.8H3.8v10.85l5.54-6.27c.12-.17.38-.17.52 0l3.1 3.54c.06.06.08.14.06.2l-.4 1.84c-.02.14.15.23.23.12l3.16-3.43a.27.27 0 01.38 0l3.79 4.12V5.8zm-3.37 4.8a1.47 1.47 0 01-1.47-1.45c0-.81.66-1.46 1.47-1.46s1.48.65 1.48 1.46c0 .8-.66 1.45-1.48 1.45z"></path>
                                    </svg>
                                    사진 첨부하기
                                </ModalImgBtn>
                                <input
                                    type="file"
                                    id="modal-img"
                                    style={{ display: "none" }}
                                    onChange={handleModalImg}
                                />
                            </ModalImageContainer>
                            <ModalCommentContainer>
                                <ModalText>리뷰 작성</ModalText>
                                <ModalComment
                                    onChange={handleContent}
                                    placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다. (최소 20자 이상)"
                                />
                            </ModalCommentContainer>
                            <div>
                                <ModalButton type="submit" width="100%">
                                    완료
                                </ModalButton>
                            </div>
                        </form>
                        <ModalReviewPolicyContainer>
                            <ReviewPolicySummary
                                onClick={() => {
                                    setPolicyOpen(!policyOpen);
                                }}>
                                <span>오늘의집 리뷰 정책</span>
                                <PolicyArrow src={arrow} alt="arrow" />
                            </ReviewPolicySummary>
                            <ReviewPolicyDetail policyOpen={policyOpen}>
                                <p>
                                    다음 금지행위에 해당되는 리뷰는 오늘의집
                                    서비스 이용 약관 제24조에 따라 고객에게 통보
                                    없이 삭제 또는 블라인드 될 수 있습니다. 보다
                                    자세한 내용은 고객센터 Q&A에서 확인하실 수
                                    있습니다.
                                    <br />
                                    <br />
                                    &lt;리뷰 작성 시 금지행위&gt;
                                    <br /> 1. 특정 내용의 리뷰 작성 조건으로
                                    대가를 제공받고 이를 표시하지 않거나, 기타
                                    특정업체의 영리적 목적을 위하여 리뷰를
                                    게시한 경우
                                    <br />
                                    2. 동일 상품에 대해 반복적 리뷰 게시
                                    <br />
                                    3. 허위/과장된 내용 또는 직접 작성하지
                                    않았거나 구매한 상품과 관련 없는 내용 게시
                                    <br />
                                    4. 정당한 권한 없이 타인의 권리 등(개인정보,
                                    지식재산권, 소유권, 명예, 신용 등)을
                                    침해하는 내용 게시
                                    <br />
                                    5. 욕설, 폭언, 비방 등 타인에 불쾌하거나
                                    위협이 되는 내용 게시
                                    <br />
                                    6. 음란물 또는 청소년 유해 매체물,
                                    범죄행위나 불법적인 행동을 전시 또는
                                    조장하는 내용 게시
                                    <br />
                                    7. 정보통신기기의 오작동을 일으킬 수 있는
                                    악성코드나 데이터를 포함하는 리뷰 게시
                                    <br />
                                    8. 사기성 상품, 서비스, 사업 계획 등을
                                    판촉하는 리뷰 게시
                                    <br />
                                    9. 기타 관련법령 및 이용약관, 운영정책에
                                    위배되는 리뷰 게시
                                </p>
                            </ReviewPolicyDetail>
                        </ModalReviewPolicyContainer>
                    </ModalMain>
                    <ModalFooter>
                        <ul>
                            <li>
                                상품을 직접 사용한 경우에만 리뷰 작성을 하실 수
                                있습니다.
                            </li>
                            <li>
                                비구매 상품 리뷰 포인트는 심사 후 지급됩니다.
                                (영업일 기준 2~3일 소요)
                            </li>
                            <li>
                                포인트는 최초 작성한 리뷰를 기준으로 지급됩니다.
                            </li>
                            <li>
                                사진 첨부시 캡쳐, 도용, 유사상품 촬영, 동일상품
                                여부 식별이 불가한 경우에는 등록이 거절되며
                                사유는 별도 안내되지 않습니다.
                            </li>
                            <li>
                                상품과 무관한 내용이나 사진, 동일 문자 반복 등의
                                부적합한 리뷰는 사전 경고 없이 삭제 및 포인트
                                회수될 수 있습니다.
                            </li>
                        </ul>
                    </ModalFooter>
                </ModalWrap>
            </Modal>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const HeaderView = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const Header = styled.span`
    font-size: 20px;
    font-weight: bold;
`;
const WriteView = styled(Header)``;
const NumOfReviews = styled.span`
    color: ${(props) => props.theme.mainColor};
`;
const Write = styled(NumOfReviews)`
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;
const ReviewSummary = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    height: 200px;
    background-color: #fafafa;
    border-radius: 4px;
`;
const StarView = styled.div`
    display: flex;
    align-items: center;
    border-right: 1px solid #eeeeee;
    padding: 20px 40px;
`;
const Rating = styled.span`
    margin-left: 15px;
    font-size: 36px;
    font-weight: bold;
`;
const ReviewFilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    width: 100%;
    height: 60px;
    border-top: 1px solid #eeeeee;
    position: relative;
`;
const FilterOrderList = styled.div`
    display: flex;
`;
const FilterOptionList = styled.div`
    display: flex;
`;
const BestOrder = styled.button`
    all: unset;
    font-size: 16px;
    font-weight: bold;
`;
const RecentOrder = styled(BestOrder)`
    margin-left: 15px;
`;
const BestRecent = styled.div`
    padding-right: 10px;
    border-right: 1px solid #eeeeee;
`;
const PhotoReview = styled(BestOrder)`
    margin-left: 10px;
    display: flex;
    align-items: center;
`;
const Select = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eeeeee;
    border: none;
    color: #777777;
    font-weight: bold;
    font-size: 16px;
    width: 70px;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #dddddd;
    }
`;
const SelectRating = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 45px;
    right: 0px;
    border: 1px solid lightgray;
    border-radius: 8px;
    background-color: white;
`;
const SelectOption = styled(SelectRating)``;
const SelectOptionStar = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    &:hover {
        background-color: #eeeeee;
        cursor: pointer;
    }
`;
const SelectOptionElement = styled(SelectOptionStar)``;
const ModalWrap = styled.div`
    width: 100%;
    padding-top: 40px;
    & header {
        display: flex;
        justify-content: center;
    }
`;
const ModalTitle = styled.span`
    font-size: 20px;
    font-weight: bold;
`;
const ModalCloseBtn = styled.button`
    all: unset;
    position: absolute;
    top: 10px;
    right: 10px;
`;
const ModalProductInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;
`;
const ModalProductInfoText = styled.div`
    margin-left: 12px;
    display: flex;
    flex-direction: column;
`;
const ModalRatingContainer = styled.div``;
const ModalText = styled.span`
    font-size: 15px;
    font-weight: bold;
`;
const ModalRating = styled.div`
    display: flex;
    align-items: center;

    & > span {
        font-size: 16px;
        font-weight: 400;
        margin-right: 12px;
    }
`;
const ModalMain = styled.div`
    padding: 0px 40px;
    & > form > div {
        margin-bottom: 32px;
    }
`;
const ModalImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const ModalProductImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 4px;
`;
const ModalImgView = styled.div`
    width: 100%;
    height: 226px;
    background-color: #eeeeee;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    position: relative;
`;
const ModalImg = styled.img`
    width: 226px;
    height: 226px;
`;
const ModalImgRemoveBtn = styled(Button)`
    position: absolute;
    top: 12px;
    right: 12px;
`;
const ModalImgBtn = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: 1px solid ${(props) => props.theme.mainColor};
    border-radius: 4px;
    background-color: white;
    color: ${(props) => props.theme.mainColor};
    padding: 8px 0px;
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`;
const ModalCommentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const ModalComment = styled.textarea`
    margin-top: 10px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 9px 15px 25px 15px;
    min-height: 110px;
`;
const ModalButton = styled(Button)``;
const ModalReviewPolicyContainer = styled.div`
    margin-bottom: 32px;
    background-color: #eeeeee;
    padding: 12px;
    border-radius: 4px;
`;
const ReviewPolicySummary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`;
const ReviewPolicyDetail = styled.div`
    display: ${(props) => (props.policyOpen ? "block" : "none")};
    margin-top: 12px;
`;
const PolicyArrow = styled.img``;
const ModalFooter = styled.footer`
    padding: 20px 40px;
    background-color: #eeeeee;
`;
export default Review;
