import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../theme";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { getCookie } from "../../App";

const CheckOrder = () => {
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

    useEffect(() => {
        axios.get(url + "orders/1").then((res) => {
            console.log(res);
        });
    }, []);
    return (
        <div>
            {list?.map((data, idx) =>
                list.length - 1 === idx ? (
                    <div ref={ref}>sss</div>
                ) : (
                    <div>sdfs</div>
                )
            )}
        </div>
    );
};

export default CheckOrder;
