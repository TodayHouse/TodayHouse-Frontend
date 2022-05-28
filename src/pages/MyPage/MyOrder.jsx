import styled from "styled-components";
import { Icon } from "@iconify/react";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { getCookie } from "../../App";
import theme from "../../theme";
import { useInView } from "react-intersection-observer";
import { MyOrderItem, FilterButton } from "../../components";

const term = ["1개월 전", "3개월 전", "6개월 전", "1년 전", "2년 전", "3년 전"];
const order_status = ["주문 처리 중", "배송 완료", "주문 취소"];

const MyOrder = () => {
    const accessToken = getCookie("login_id");
    const url = theme.apiUrl;
    const [list, setList] = useState([]);
    const [ref, inView] = useInView(); // ref로 관찰 중인 요소가 감지되면 inView = true
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false); // 추가 데이터를 불러온 후에 page를 증가시키기 위해 사용
    const [isLast, setIsLast] = useState(false);

    const [selectedFilter, setSelectedFilter] = useState([]);

    const getItems = useCallback(async () => {
        if (!isLast) {
            setLoading(true);
            await axios
                .get(url + `orders?page=${page}&size=3`, {
                    headers: { Authorization: `Bearer ${accessToken}` },
                    withCredentials: true,
                })
                .then((response) => {
                    console.log(response.data);
                    if (response.data.result.last) setIsLast(true);
                    let arr = [...list];
                    response.data.result.content.forEach((data) => {
                        arr.push(data);
                    });
                    setList(arr);
                })
                .catch((e) => {
                    console.log(e);
                });
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        if (inView && !loading) setPage(page + 1);
    }, [inView, loading]);

    useEffect(() => {
        getItems();
    }, [getItems]);

    const onMouseOver = (id) => {
        document.getElementById(id).style.visibility = "visible";
    };

    const onMouseLeave = (id) => {
        document.getElementById(id).style.visibility = "hidden";
    };

    const handleFilter = (value, type) => {
        //기간 및 주문상태 필터 추가
        let check = false;
        let list = [...selectedFilter];

        //비어있지 않은 배열이면 아래 것들 고려
        if (list.length !== 0) {
            //이미 필터에 추가된 타입이면 value만 바꿔줌
            list.forEach((data) => {
                if (data.type === type) {
                    data.value = value;
                    check = true;
                }
            });
            setSelectedFilter(list);
            //아직 필터에 추가되지 않은 타입이면 새로 추가
            if (!check) {
                list.push({ type, value });
            }
        } else {
            //빈 배열이면 무조건 새로 추가
            list.push({ type, value });
        }
        setSelectedFilter(list);
    };

    const removeFilterElement = (type) => {
        // type을 기반으로 선택된 filter element 삭제
        let list = [...selectedFilter];
        list = list.filter((data) => data.type !== type);
        setSelectedFilter(list);
    };

    return (
        <Container>
            <FilterContainer>
                <FilterButton
                    name="기간"
                    onMouseOver={() => {
                        onMouseOver("termBox");
                    }}
                    onMouseLeave={() => {
                        onMouseLeave("termBox");
                    }}>
                    <DetailBox
                        id="termBox"
                        onMouseOver={() => {
                            onMouseOver("termBox");
                        }}
                        onMouseLeave={() => {
                            onMouseLeave("termBox");
                        }}>
                        {term.map((data, idx) => (
                            <div
                                key={idx}
                                onClick={() => {
                                    handleFilter(data, "term");
                                }}>
                                {data}
                            </div>
                        ))}
                    </DetailBox>
                </FilterButton>
                <FilterButton
                    name="주문상태"
                    onMouseOver={() => {
                        onMouseOver("orderStatusBox");
                    }}
                    onMouseLeave={() => {
                        onMouseLeave("orderStatusBox");
                    }}>
                    <DetailBox
                        id="orderStatusBox"
                        onMouseOver={() => {
                            onMouseOver("orderStatusBox");
                        }}
                        onMouseLeave={() => {
                            onMouseLeave("orderStatusBox");
                        }}>
                        {order_status.map((data, idx) => (
                            <div
                                key={idx}
                                onClick={() => {
                                    handleFilter(data, "orderStatus");
                                }}>
                                {data}
                            </div>
                        ))}
                    </DetailBox>
                </FilterButton>
            </FilterContainer>
            <SelectedFilterContainer>
                {selectedFilter.map((data, idx) => (
                    <SelectedFilterElement
                        key={idx}
                        onClick={() => {
                            removeFilterElement(data.type);
                        }}>
                        <span>{data.value}</span>
                        <img
                            alt="close"
                            style={{ marginLeft: 8 }}
                            width="15px"
                            height="15px"
                            src={require("../../img/roundX.png")}
                        />
                    </SelectedFilterElement>
                ))}
                <ResetButton
                    length={selectedFilter.length}
                    onClick={() => setSelectedFilter([])}>
                    초기화
                </ResetButton>
            </SelectedFilterContainer>
            <ItemBox>
                {list?.map((data, idx) =>
                    list.length - 1 === idx ? (
                        <div key={idx} ref={ref}>
                            <MyOrderItem
                                id={data.id}
                                brandName={data.productInfo[2]}
                                orderedDate={data.createdAt.map((e, idx) =>
                                    idx < 3 ? e + "." : ""
                                )}
                                img={data.productInfo[0]}
                                productName={data.productInfo[1]}
                                productOption={data.productInfo[3]}
                                price={parseInt(
                                    data.productInfo[4]
                                ).toLocaleString()}
                                stock={data.productInfo[5]}
                                status={data.status}
                            />
                        </div>
                    ) : (
                        <div key={idx}>
                            <MyOrderItem
                                id={data.id}
                                brandName={data.productInfo[2]}
                                orderedDate={data.createdAt.map((e, idx) =>
                                    idx < 3 ? e + "." : ""
                                )}
                                img={data.productInfo[0]}
                                productName={data.productInfo[1]}
                                productOption={data.productInfo[3]}
                                price={parseInt(
                                    data.productInfo[4]
                                ).toLocaleString()}
                                stock={data.productInfo[5]}
                                status={data.status}
                            />
                        </div>
                    )
                )}
            </ItemBox>
        </Container>
    );
};

const Container = styled.main`
    background-color: white;
    margin-top: 50px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px;
    border: 1px solid #cccccc;
    height: 100vh;
`;
const FilterContainer = styled.section`
    display: flex;
`;
const ItemBox = styled.div`
    margin-top: 24px;
    border-radius: 4px;
`;
const DetailBox = styled.div`
    visibility: hidden;
    box-shadow: 5px 5px 8px #aaaaaa;
    border-radius: 8px;
    position: absolute;
    top: 40px;
    width: 200px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
        padding: 8px 16px;
        width: 100%;
        height: 50px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & > div:hover {
        background-color: #dbf2ff;
        cursor: pointer;
    }
`;
const SelectedFilterContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0px;
`;
const SelectedFilterElement = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    padding: 3px 8px;
    margin: 0px 2px;
    border-radius: 26px;
    background-color: ${(props) => props.theme.mainColor};
    color: white;
    font-weight: bold;
    font-size: 16px;
    &:hover {
        background-color: ${(props) => props.theme.hoverMainColor};
    }
`;
const ResetButton = styled.button`
    all: unset;
    visibility: ${(props) => (props.length === 0 ? "hidden" : "visible")};
    color: ${(props) => props.theme.mainColor};
    padding: 2px 10px;
    font-size: 16px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;
export default MyOrder;
