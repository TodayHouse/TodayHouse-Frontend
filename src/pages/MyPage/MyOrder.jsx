import styled from "styled-components";
import {} from "react-icons/fa";
import { Icon, InlineIcon } from "@iconify/react";
import React, { useState, useEffect, useCallback } from "react";
import Item from "antd/lib/list/Item";
import axios from "axios";
import { getCookie } from "../../App";
import theme from "../../theme";
import { useInView } from "react-intersection-observer";
import house1 from "../../img/house1.jpg";
import { Button } from "../../elements";
import { MyOrderItem } from "../../components";

const MyStories = () => {
    const accessToken = getCookie("login_id");
    const url = theme.apiUrl;
    const [list, setList] = useState([]);
    const [ref, inView] = useInView(); // ref로 관찰 중인 요소가 감지되면 inView = true
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false); // 추가 데이터를 불러온 후에 page를 증가시키기 위해 사용
    const [isLast, setIsLast] = useState(false);

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
                    if (response.data.result.totalPages === page + 1)
                        setIsLast(true);
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

    return (
        <>
            <CenterRenderer>
                <StateRenderer>
                    <GridBox id="order_complete">
                        <InnerGrid>
                            <InnerImage>
                                <Icon icon="el:ok-sign" fontSize={80} />
                            </InnerImage>

                            <InnerGridContent id="text">
                                주문완료
                            </InnerGridContent>
                        </InnerGrid>
                    </GridBox>

                    <GridBox id="bucket">
                        <InnerGrid>
                            <InnerImage>
                                <Icon
                                    icon="map:grocery-or-supermarket"
                                    fontSize={80}
                                />
                            </InnerImage>

                            <InnerGridContent id="text">
                                장바구니
                            </InnerGridContent>
                        </InnerGrid>
                    </GridBox>

                    <GridBox id="order_canceled">
                        <InnerGrid>
                            <InnerImage>
                                <Icon
                                    icon="fluent:calendar-cancel-24-filled"
                                    fontSize={80}
                                />
                            </InnerImage>

                            <div style={{ marginLeft: "13%" }}>
                                <InnerGridContent id="text">
                                    취소
                                </InnerGridContent>
                            </div>
                        </InnerGrid>
                    </GridBox>
                </StateRenderer>

                <ItemBox>
                    {list?.map((data, idx) => (
                        <div
                            key={idx}
                            ref={list.length - 1 === idx ? ref : null}>
                            <MyOrderItem
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
                    ))}
                </ItemBox>
            </CenterRenderer>
        </>
    );
};

const InnerGrid = styled.div`
    padding-left: 70px;
    padding-top: 25px;
`;
const InnerImage = styled.div`
    padding-left: 15px;
`;

const InnerGridContent = styled.div`
    height: 150px;
    font-size: 30px;
`;
const CenterRenderer = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const StateRenderer = styled.div`
    width: 900px;
    display: flex;
    height: 190px;
    margin-top: 30px;
    background-color: skyblue;
    border: 1px solid skyblue;
    border-radius: 4px;
`;

const GridBox = styled.div`
    display: inline-block;
    height: 170px;
    width: 330px;
    margin-top: 1%;
    margin-left: 2%;
    margin-right: 2%;
    background-color: white;
    border-radius: 4px;
`;

const ItemBox = styled.div`
    margin-top: 2%;
    padding: 16px;
    border-radius: 4px;
`;

export default MyStories;
