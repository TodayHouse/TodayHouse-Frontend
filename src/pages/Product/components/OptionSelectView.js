import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SelectedOption } from ".";
import { useDispatch, useSelector } from "react-redux";
import { addOption } from "../../../redux/reducer/product";

// const mockOptions = [
//     {
//         name: "베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1400(직각)",
//         price: 118000,
//     },
//     {
//         name: "베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1400(타원)",
//         price: 128000,
//     },
//     {
//         name: "베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1600(직각)",
//         price: 138000,
//     },
//     {
//         name: "베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1600(타원)",
//         price: 148000,
//     },
//     {
//         name: "베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1800(직각)",
//         price: 158000,
//     },
//     {
//         name: "베네치아 4인용 12T 포셀린 세라믹 식탁테이블 1800(타원)",
//         price: 168000,
//     },
//     {
//         name: "베네치아 4인용 12T 포셀린 세라믹 식탁테이블 2000(직각)",
//         price: 178000,
//     },
//     {
//         name: "베네치아 4인용 12T 포셀린 세라믹 식탁테이블 2000(타원)",
//         price: 188000,
//     },
//     {
//         name: "베네치아 4인용 12T 포셀린 세라믹 식탁테이블 2200(직각)",
//         price: 198000,
//     },
// ];

const OptionSelectView = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const selectedOption = useSelector((state) => state.product.selectedOption);
    const productInfo = useSelector((state) => state.product.form); //상품 전체 정보

    const [parentOption, setParentOption] = useState("");
    const optionList1 = productInfo.parentOptions;
    const [optionList2, setOptionList2] = useState([]);
    const optionTitle1 = productInfo.option1;
    const optionTitle2 = productInfo.option2;

    const dispatch = useDispatch();

    const onParentOptionSelected = () => {
        const obj = document.getElementById("selectParentOption");
        const id = obj.selectedIndex;
        console.log(id);
        setParentOption(obj.value); //1차 옵션
        setOptionList2(optionList1[id - 1].childOptions); //2차 옵션 목록들
    };

    const onChildOptionSelected = (e) => {
        const obj = document.getElementById("selectChildOption");
        const id = obj.selectedIndex;
        dispatch(
            addOption({
                name: `${optionTitle1}선택: ${parentOption} / ${optionTitle2}선택: ${e.target.value}`,
                price: optionList1[id - 1].price,
                id: parentOption + e.target.value + id,
                num: 1,
            })
        );
    };

    useEffect(() => {
        let total = 0;
        selectedOption &&
            selectedOption.forEach((data) => {
                total += data.price * data.num;
            });
        setTotalPrice(total);

        //상품 추가할 때마다 옵션 초기화
        document.getElementById("selectParentOption").value = "default";
        document.getElementById("selectChildOption").value = "default";
        setOptionList2([]);
        console.log(selectedOption);
    }, [selectedOption]);

    return (
        <Container>
            <div style={{ overflow: "auto" }}>
                <SelectedView>
                    <Selected
                        id="selectParentOption"
                        onChange={onParentOptionSelected}
                        defaultValue="default">
                        <option value="default" disabled>
                            {optionTitle1}선택
                        </option>
                        {optionList1?.map((data, idx) => (
                            <option
                                key={idx}
                                id={"option" + idx}
                                value={data.content}>
                                {data.content +
                                    "(" +
                                    data.price.toLocaleString() +
                                    "원)"}
                            </option>
                        ))}
                    </Selected>
                </SelectedView>
                <SelectedView>
                    <Selected
                        id="selectChildOption"
                        onChange={onChildOptionSelected}
                        defaultValue="default">
                        <option value="default" disabled>
                            {optionTitle2}선택
                        </option>
                        {optionList2?.map((data, idx) => (
                            <option
                                key={idx}
                                id={"option" + idx}
                                value={data.content}>
                                {data.content +
                                    "(" +
                                    data.price.toLocaleString() +
                                    "원)"}
                            </option>
                        ))}
                    </Selected>
                </SelectedView>
                <SelectedOptionView id="selectView">
                    {selectedOption &&
                        selectedOption.map((data, idx) => (
                            <SelectedOption
                                key={idx}
                                name={data.name}
                                price={data.price}
                                id={data.id}
                            />
                        ))}
                </SelectedOptionView>
            </div>
            <PurchaseContainer>
                <InnerContainer>
                    <PriceLabel>주문금액</PriceLabel>
                    <PurchasePrice>
                        {totalPrice.toLocaleString()}원
                    </PurchasePrice>
                </InnerContainer>
                <InnerContainer>
                    <MyBucketBtn>장바구니</MyBucketBtn>
                    <PurchaseBtn>바로구매</PurchaseBtn>
                </InnerContainer>
            </PurchaseContainer>
        </Container>
    );
};
const Container = styled.div`
    width: 100%;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
`;
const Selected = styled.select`
    width: 100%;
    height: 50px;
    border: none;
    font-size: 16px;
    &:focus {
        outline: none;
    }
`;
const SelectedView = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${(props) => props.theme.mainColor};
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    margin-top: 10px;
    width: 100%;
`;
const SelectedOptionView = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const PurchaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
`;
const PriceLabel = styled.span`
    font-size: 14px;
    font-weight: bold;
`;
const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;
const PurchasePrice = styled.span`
    font-size: 20px;
    font-weight: bold;
`;
const MyBucketBtn = styled.button`
    width: 49%;
    padding: 15px 0px;
    border: 1px solid ${(props) => props.theme.mainColor};
    border-radius: 4px;
    background-color: white;
    color: ${(props) => props.theme.mainColor};
    font-size: 20px;
`;
const PurchaseBtn = styled(MyBucketBtn)`
    background-color: ${(props) => props.theme.mainColor};
    color: white;
    &:hover {
        background-color: ${(props) => props.theme.hoverMainColor};
    }
`;

export default OptionSelectView;
