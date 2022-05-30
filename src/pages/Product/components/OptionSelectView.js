import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SelectedOption } from ".";
import { useDispatch, useSelector } from "react-redux";
import { addOption } from "../../../redux/reducer/product";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../components";
import { Button } from "../../../elements";

const OptionSelectView = (props) => {
    const { parentId, childId } = props; //상단 선택창과 sticky 선택창을 구분하기 위해 id를 각각 설정
    const [totalPrice, setTotalPrice] = useState(0);
    const selectedOption = useSelector((state) => state.product.selectedOption);
    const productInfo = useSelector((state) => state.product.form); //상품 전체 정보
    const sellerInfo = useSelector((state) => state.product.sellerInfo);

    const [parentOption, setParentOption] = useState("");
    const [parentOptionId, setParentOptionId] = useState(0);
    const optionList1 = productInfo.parentOptions;
    const [optionList2, setOptionList2] = useState([]);
    const optionTitle1 = productInfo.option1;
    const optionTitle2 = productInfo.option2;

    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onParentOptionSelected = () => {
        const obj = document.getElementById(parentId);
        const id = obj.selectedIndex;
        setParentOption(obj.value); //1차 옵션
        setParentOptionId(optionList1[id - 1].id); //1차 옵션의 id 저장
        setOptionList2(optionList1[id - 1].childOptions); //2차 옵션 목록들
    };

    const onChildOptionSelected = (e) => {
        const obj = document.getElementById(childId);
        const id = obj.selectedIndex;
        const name = `${optionTitle1}선택: ${parentOption} / ${optionTitle2}선택: ${e.target.value}`;
        let isDuplicated = false; // 중복된 선택옵션 체크

        //selectedOption에 추가하기 전에 기존의 option 배열을 돌면서 중복된 옵션인지 체크
        selectedOption.forEach((data) => {
            if (data.name === name) {
                alert("이미 선택한 옵션입니다.");
                document.getElementById(parentId).value = "default";
                document.getElementById(childId).value = "default";
                setOptionList2([]);
                isDuplicated = true;
                return;
            }
        });

        if (!isDuplicated)
            dispatch(
                addOption({
                    company: sellerInfo.companyName,
                    deliveryFee: productInfo.deliveryFee,
                    image: productInfo.imageUrls[0],
                    title: productInfo.title,
                    name,
                    price: optionList2[id - 1].price,
                    parentOptionId,
                    childOptionId: optionList2[id - 1].id,
                    id: parentOption + e.target.value + id,
                    num: 1,
                    productId: productInfo.id,
                })
            );
    };

    const addCart = () => {
        // localStorage를 사용하여 장바구니 item 저장
        if (localStorage.getItem("cart") !== null) {
            // 장바구니에 아직 물품을 담지 않아 cart가 존재하지 않는 경우
            let cartItems = JSON.parse(localStorage.getItem("cart"));
            cartItems.push(selectedOption);
            localStorage.setItem("cart", JSON.stringify(cartItems));
        } else {
            // 장바구니에 물품을 담아서 cart가 존재하는 경우
            let list = [];
            list.push(selectedOption);
            localStorage.setItem("cart", JSON.stringify(list));
        }
        setModalOpen(true);
    };

    const closeModal = () => {
        // 쇼핑을 계속한다는 의미
        setModalOpen(false);
        localStorage.removeItem("selectedOption");
        window.location.reload();
    };

    useEffect(() => {
        let total = 0;
        selectedOption &&
            selectedOption.forEach((data) => {
                total += data.price * data.num;
            });
        setTotalPrice(total);

        //상품 추가할 때마다 옵션 초기화
        document.getElementById(parentId).value = "default";
        document.getElementById(childId).value = "default";
        setOptionList2([]);
    }, [selectedOption]);

    return (
        <Container>
            <div style={{ overflow: "auto" }}>
                <SelectedView>
                    <Selected
                        id={parentId}
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
                        id={childId}
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
                    <MyBucketBtn onClick={addCart}>장바구니</MyBucketBtn>
                    <PurchaseBtn
                        onClick={() => {
                            if (!selectedOption.length)
                                alert("옵션 선택 후에 버튼을 클릭해 주세요.");
                            else {
                                navigate("/order");
                            }
                        }}>
                        바로구매
                    </PurchaseBtn>
                </InnerContainer>
            </PurchaseContainer>
            <Modal width={500} modalOpen={modalOpen} closeModal={closeModal}>
                <span style={{ fontSize: 18 }}>장바구니에 담았습니다.</span>
                <ModalInnerBtnsContainer>
                    <ContinueShoppingBtn onClick={closeModal}>
                        쇼핑 계속하기
                    </ContinueShoppingBtn>
                    <Button
                        onClick={() => {
                            navigate("/cart");
                        }}>
                        장바구니 가기
                    </Button>
                </ModalInnerBtnsContainer>
            </Modal>
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
const ModalInnerBtnsContainer = styled.div`
    margin-top: 24px;
    display: flex;
    width: 60%;
    justify-content: space-between;
`;
const ContinueShoppingBtn = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid #cccccc;
    &:hover {
        background-color: white;
        color: #aaaaaa;
    }
`;
export default OptionSelectView;
