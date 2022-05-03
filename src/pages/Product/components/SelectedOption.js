import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeNum, removeOption } from "../../../redux/reducer/product";
import $ from "jquery";

const SelectedOption = (props) => {
    const { name, price, id } = props;
    const dispatch = useDispatch();
    const num = Array(100) //1~100을 원소로 가지는 배열 생성
        .fill()
        .map((data, i) => i + 1);
    const selectedOption = useSelector((state) => state.product.selectedOption);
    const curNum = selectedOption.filter((data) => data.id === id)[0].num; //sidebar에도 동시에 적용하기 위해 선언

    const onChange = (e) => {
        console.log(id);
        dispatch(changeNum({ id, num: e.target.value }));
        $(`#select${id}`).val(`${e.target.value}`).prop("selected", true);
    };

    return (
        <Container>
            <Name>
                <span>{name}</span>
                <Close
                    src={require("../../../img/x.png")}
                    onClick={() => {
                        dispatch(removeOption(id));
                    }}
                />
            </Name>
            <Price>
                <div>
                    <Num id={`select${id}`} onChange={onChange}>
                        {num.map((data, idx) => (
                            <option key={idx} value={data}>
                                {data}
                            </option>
                        ))}
                    </Num>
                </div>
                <span>{parseInt(price * curNum).toLocaleString()}원</span>
            </Price>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background-color: #eeeeee;
    padding: 10px;
    font-size: 16px;
`;
const Name = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Close = styled.img`
    width: 20px;
    height: 20px;
    &:hover {
        cursor: pointer;
    }
`;
const Num = styled.select`
    width: 100px;
    height: 30px;
`;
const Price = styled(Name)`
    margin-top: 20px;
    font-weight: bold;
`;
export default SelectedOption;
