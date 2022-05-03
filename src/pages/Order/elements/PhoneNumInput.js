import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../../elements";
import $ from "jquery";

const prefix = ["010", "011", "016", "017", "018", "019"];

const PhoneNumInput = (props) => {
    const { label, button, namePrefix, nameSuffix, onChange } = props;

    useEffect(() => {
        $("#buttonViewtrue").show();
        $("#buttonViewfalse").hide();
    }, []);

    return (
        <Container>
            <div style={{ display: "flex", alignItems: "center" }}>
                <LabelContainer>
                    <Label>{label}</Label>
                </LabelContainer>
                <ContentContainer>
                    <SelectBox onChange={onChange} name={namePrefix}>
                        {prefix.map((data, idx) => (
                            <option key={idx} value={data}>
                                {data}
                            </option>
                        ))}
                    </SelectBox>
                    <InputBox
                        name={nameSuffix}
                        placeholder="입력해주세요"
                        onChange={onChange}
                    />
                </ContentContainer>
            </div>
            <div id={"buttonView" + button}>
                {/* 인증번호 발송 성공하면 버튼 밑에 인증번호 입력칸 띄움 */}
                <Button width="283px" margin="10px 0px 0px 100px">
                    인증번호 발송
                </Button>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const ContentContainer = styled.div`
    display: flex;
    align-items: center;
`;
const LabelContainer = styled.div`
    width: 100px;
`;
const Label = styled.span`
    font-size: 16px;
    color: gray;
`;
const SelectBox = styled.select`
    width: 100px;
    height: 45px;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    font-size: 15px;
`;
const InputBox = styled.input`
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 10px;
`;
export default PhoneNumInput;
