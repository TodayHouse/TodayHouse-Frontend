import React, { useEffect } from "react";
import styled from "styled-components";
import $ from "jquery";

const prefix = ["010", "011", "016", "017", "018", "019"];

const PhoneNumInput = (props) => {
    const { label, namePrefix, nameSuffix, onChange, id1, id2 } = props;

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
                    <SelectBox id={id1} onChange={onChange} name={namePrefix}>
                        {prefix.map((data, idx) => (
                            <option key={idx} value={data}>
                                {data}
                            </option>
                        ))}
                    </SelectBox>
                    <InputBox
                        id={id2}
                        name={nameSuffix}
                        placeholder="입력해주세요"
                        onChange={onChange}
                    />
                </ContentContainer>
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
