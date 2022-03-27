import React from 'react';
import styled from 'styled-components';
import { Button, Input } from '../../../elements';
const Options = (props) => {
  const {
    setShowChildOption,
    showChildOption,
    parentList,
    setParentList,
    selectionList,
    setSelectionList,
    id,
    type,
  } = props;

  // 2차 옵션 input창 생성 (자식 컴포넌트에서 부모 컴포넌트로 데이터 전달)
  const addChildOption = () => {
    if (!showChildOption) setShowChildOption(true);
    const child = { content: '', parentOptionId: id, price: 0, stock: 0 };

    //child option form 추가
    let list = [];
    if (parentList.childOptions) list = [...parentList.childOptions, child];
    else list = child;

    //parentOptions에 추가된 child option 적용
    let parent = [...parentList];
    parent[id].childOptions.push(list);

    setParentList(parent);
  };

  const removeChildOption = (idx) => {
    // 2차 옵션 삭제
    let parent = [...parentList];
    let child = parent[id].childOptions;
    parent[id].childOptions = child.filter((data, i) => i !== idx);

    setParentList(parent);
  };

  const removeOption = () => {
    // 1차 옵션 or 선택 옵션 삭제
    if (type === 'parent')
      setParentList(parentList.filter((data, idx) => id !== idx));
    else setSelectionList(selectionList.filter((data, idx) => id !== idx));
  };

  //1차 옵션 input 관리
  const handleInput = (e) => {
    if (type === 'parent') {
      // 1차 옵션
      const changed = { ...parentList[id], [e.target.name]: e.target.value };

      //선택된 parent option 값 변경
      let parent = [...parentList];
      parent[id] = changed;

      setParentList(parent);
    } else {
      // 선택 옵션
      const changed = { ...selectionList[id], [e.target.name]: e.target.value };

      let selection = [...selectionList];
      selection[id] = changed;

      setSelectionList(selection);
    }
  };

  //2차 옵션 input 관리
  const handleChild = (e, idx) => {
    const changed = {
      ...parentList[id].childOptions[idx],
      [e.target.name]: e.target.value,
    };

    //선택된 child option 값 변경
    let parent = [...parentList];
    parent[id].childOptions[idx] = changed;

    setParentList(parent);
  };

  return (
    <Container>
      <legend>{type === 'parent' ? '1차 옵션' : '선택 옵션'}</legend>
      <Input
        width="300px"
        placeholder="상품 정보"
        margin="10px 0px 0px 0px"
        onChange={handleInput}
        name="content"
      />
      <Div>
        <Input
          type="number"
          min="0"
          width="140px"
          placeholder="가격"
          margin="0px 10px"
          onChange={handleInput}
          name="price"
        />
        <Input
          type="number"
          min="0"
          width="140px"
          placeholder="수량"
          margin="0px 10px"
          onChange={handleInput}
          name="stock"
        />
      </Div>
      <Div>
        {type === 'parent' ? (
          <Button width="140px" margin="0px 10px" onClick={addChildOption}>
            2차 옵션 추가
          </Button>
        ) : (
          ''
        )}
        <Button width="140px" margin="0px 10px" onClick={removeOption}>
          삭제
        </Button>
      </Div>
      {parentList &&
        parentList[id]?.childOptions.map((data, idx) => (
          <Container key={idx}>
            <legend>2차 옵션</legend>
            <Input
              width="300px"
              placeholder="상품 정보"
              margin="10px 0px 0px 0px"
              onChange={(e) => {
                handleChild(e, idx);
              }}
              name="content"
            />
            <Div>
              <Input
                type="number"
                min="0"
                width="140px"
                placeholder="가격"
                margin="0px 10px"
                onChange={(e) => {
                  handleChild(e, idx);
                }}
                name="price"
              />
              <Input
                type="number"
                min="0"
                width="140px"
                placeholder="수량"
                margin="0px 10px"
                onChange={(e) => {
                  handleChild(e, idx);
                }}
                name="stock"
              />
            </Div>
            <Div>
              <Button
                width="140px"
                margin="0px 10px"
                onClick={() => {
                  removeChildOption(idx);
                }}
              >
                삭제
              </Button>
            </Div>
          </Container>
        ))}
    </Container>
  );
};
const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin: 20px 0px;
  padding: 20px;
`;
const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;
export default Options;
