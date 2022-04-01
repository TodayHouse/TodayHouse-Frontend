import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCookie } from '../../App';
import { Input, Button } from '../../elements';
import theme from '../../theme';
import { Options } from './components';
import roundX from '../../img/roundX.png';

const UploadProduct = () => {
  const category1 = useRef();
  const category2 = useRef();
  const category3 = useRef();
  const category4 = useRef();

  const url = theme.apiUrl;
  const accessToken = getCookie('login_id');
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState({
    // 카테고리 depth 별 index
    first: null,
    second: null,
    third: null,
    fourth: null,
  });
  const { first, second, third, fourth } = selectedCategoryIdx;
  const [categoryValues, setCategoryValues] = useState({
    // 카테고리 depth 별 value
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const [previewImgs, setPreviewImgs] = useState([]);
  const [lastCategoryName, setLastCategoryName] = useState('');
  const [form, setForm] = useState({
    categoryName: '',
    title: '',
    image: [],
    price: '',
    specialPrice: false,
    discountRate: 0,
    deliveryFee: 0,
    productDetail: '',
    parentOption: '',
    parentOptions: [],
    childOption: '',
    selectionOption: '',
    selectionOptions: [],
  });

  const {
    categoryName,
    title,
    image,
    price,
    specialPrice,
    discountRate,
    deliveryFee,
    productDetail,
    parentOption,
    parentOptions,
    childOption,
    selectionOption,
    selectionOptions,
  } = form;

  const [discountPrice, setDiscountPrice] = useState('');
  const [free, setFree] = useState(true); //무료배송 여부
  const formData = new FormData();

  // 옵션 입력창 보임 여부
  const [showParentOption, setShowParentOption] = useState(false);
  const [showChildOption, setShowChildOption] = useState(false);
  const [showSelectionOption, setShowSelectionOption] = useState(false);

  // 서버로 보내기 위한 옵션 리스트
  const [parentList, setParentList] = useState([]);
  const [selectionList, setSelectionList] = useState([]);

  const [childCnt, setChildCnt] = useState(0);

  const onChange = (e) => {
    let list = [...form.image]; // form에 담는 용도의 file 배열
    let previewList = [...previewImgs]; // 미리보기 용도의 url 배열

    for (let i = 0; i < e.target.files.length; i++) {
      // 여러 개의 FileList 데이터를 배열에 하나씩 추가
      list.push(e.target.files[i]);

      //이미지 미리보기를 위한 createObjectURL 사용
      const preview = URL.createObjectURL(e.target.files[i]);
      previewList.push(preview);
    }
    setPreviewImgs(previewList);
    setForm({ ...form, image: list });
  };

  const removeImg = (idx) => {
    console.log(idx);
    let list = [...form.image]; // form에 담는 용도의 file 배열
    let previewList = [...previewImgs]; // 미리보기 용도의 url 배열

    setPreviewImgs(previewList.filter((data, i) => i !== idx));
    setForm({ ...form, image: list.filter((data, i) => i !== idx) });
  };

  const handleChange = (e) => {
    const changed = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(changed);
  };

  const handleDiscount = (e) => {
    let rate = parseInt(e.target.value);
    if (rate > 100 || rate < 0) alert('범위를 벗어났습니다.');
    let dcPrice = parseInt(price) * ((100 - rate) / 100);
    setDiscountPrice(dcPrice.toLocaleString());
  };

  const upload = () => {
    if (
      title === '' ||
      image === [] ||
      price === '' ||
      productDetail === '' ||
      categoryName === ''
    )
      alert('입력되지 않은 정보가 있습니다.');
    else {
      form.image.forEach((data) => {
        formData.append('file', data);
      });
      formData.append(
        'request',
        new Blob(
          [
            JSON.stringify({
              categoryName: lastCategoryName,
              childOption,
              deliveryFee,
              discountRate,
              parentOption,
              parentOptions,
              price,
              productDetail,
              selectionOption,
              selectionOptions,
              specialPrice,
              title,
            }),
          ],
          { type: 'application/json' }
        )
      );

      axios
        .post(url + 'products', formData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          if (response.data.isSuccess) {
            alert('상품 등록이 완료되었습니다.');
            navigate('/');
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const cancel = () => {
    if (window.confirm('입력 중인 내용이 삭제되고, 메인 페이지로 이동합니다.'))
      navigate('/');
  };

  const parent = {
    childOptions: [],
    content: '',
    price: 0,
    stock: 0,
  };
  const addParentOption = () => {
    if (!showParentOption) setShowParentOption(true);
    let list = [...parentList, parent];
    setParentList(list);
  };

  const selection = { content: '', price: 0, stock: 0 };
  const addSelectionOption = () => {
    if (!showSelectionOption) setShowSelectionOption(true);
    let list = [...selectionList, selection];
    setSelectionList(list);
  };

  const handleCategoryIdx = (e) => {
    // 선택된 카테고리의 index 저장
    const { selectedIndex, name } = e.target;
    const changed = { ...selectedCategoryIdx, [name]: selectedIndex - 1 }; // 선택하세요 라는 최상단 옵션이 있으므로 index-1을 해줌
    setSelectedCategoryIdx(changed);
  };

  useEffect(() => {
    // first 카테고리 value 및 index 변경
    setCategoryValues({
      first: category1.current?.value,
      second: '',
      third: '',
      fourth: '',
    });

    const changed = {
      ...selectedCategoryIdx,
      second: null,
      third: null,
      fourth: null,
    };
    setSelectedCategoryIdx(changed);
  }, [first]);

  useEffect(() => {
    // second 카테고리 value 및 index 변경
    setCategoryValues({
      ...categoryValues,
      second: category2.current?.value,
      third: '',
      fourth: '',
    });

    const changed = { ...selectedCategoryIdx, third: null, fourth: null };
    setSelectedCategoryIdx(changed);
  }, [second]);

  useEffect(() => {
    // third 카테고리 value 및 index 변경
    setCategoryValues({
      ...categoryValues,
      third: category3.current?.value,
      fourth: '',
    });

    const changed = { ...selectedCategoryIdx, fourth: null };
    setSelectedCategoryIdx(changed);
  }, [third]);

  useEffect(() => {
    // fourth 카테고리 value 및 index 변경
    setCategoryValues({ ...categoryValues, fourth: category4.current?.value });
  }, [fourth]);

  useEffect(() => {
    console.log(selectedCategoryIdx);
  }, [selectedCategoryIdx]);

  useEffect(() => {
    console.log('value');
    console.log(categoryValues);

    // 현재까지 선택된 마지막 카테고리 값을 저장
    if (first !== null) setLastCategoryName(categoryValues.first);

    if (second !== null) setLastCategoryName(categoryValues.second);

    if (third !== null) setLastCategoryName(categoryValues.third);

    if (fourth !== null) setLastCategoryName(categoryValues.fourth);
  }, [categoryValues]);

  useEffect(() => {
    setForm({ ...form, categoryName: lastCategoryName });
  }, [lastCategoryName]);

  useEffect(() => {
    setForm({ ...form, parentOptions: parentList });

    // parent option이 0개면 1차 옵션 input 삭제
    if (parentList.length === 0) setShowParentOption(false);

    // child option의 개수 계산
    let cnt = 0;
    parentList?.forEach((par, idx) => {
      par.childOptions?.forEach((chi, idx) => {
        cnt++;
      });
    });
    setChildCnt(cnt);
  }, [parentList]);

  useEffect(() => {
    setForm({ ...form, selectionOptions: selectionList });

    // selection option이 0개면 선택 옵션 input 삭제
    if (selectionList.length === 0) setShowSelectionOption(false);
  }, [selectionList]);

  useEffect(() => {
    // child option이 0개면 2차 옵션 input 삭제
    if (childCnt === 0) setShowChildOption(false);
  }, [childCnt]);

  useEffect(() => {
    console.log(form);
  }, [form]);

  useEffect(() => {
    //특가 적용 체크 안 하면 할인율 0으로 변경
    if (!specialPrice) setForm({ ...form, discountRate: 0 });
  }, [specialPrice]);

  useEffect(() => {
    //무료배송 체크되면 배송비 0원으로 변경
    if (free) setForm({ ...form, deliveryFee: 0 });
  }, [free]);

  useEffect(() => {
    if (categories.length > 0) console.log(categories);
  }, [categories]);

  useEffect(() => {
    // 최초 렌더링 시 등록된 카테고리 정보 불러옴
    axios
      .get(url + 'categories')
      .then((response) => {
        setCategories(response.data.result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Container>
      <Header>상품 등록</Header>
      <Content>
        <CategoryContainer>
          <div>
            <Category
              ref={category1}
              name="first"
              onChange={handleCategoryIdx}
              defaultValue="default"
            >
              <option disabled value="default">
                메인 카테고리
              </option>
              {categories &&
                categories?.map((data, idx) => (
                  <option key={idx} value={data.name}>
                    {data.name}
                  </option>
                ))}
            </Category>
          </div>
          {categories &&
          categories[first] &&
          categories[first].subCategories ? (
            <div>
              &gt;
              <Category
                ref={category2}
                name="second"
                onChange={handleCategoryIdx}
                defaultValue="default"
                value={
                  second === null
                    ? 'default'
                    : categories[first].subCategories[second]?.name
                }
              >
                <option disabled value="default">
                  세부 카테고리
                </option>
                {categories &&
                  categories[first] &&
                  categories[first].subCategories &&
                  categories[first].subCategories.map((data, idx) => (
                    <option key={idx} value={data.name}>
                      {data.name}
                    </option>
                  ))}
              </Category>
            </div>
          ) : null}
          {categories &&
          categories[first] &&
          categories[first].subCategories &&
          categories[first].subCategories[second] &&
          categories[first].subCategories[second].subCategories ? (
            <div>
              &gt;
              <Category
                ref={category3}
                name="third"
                onChange={handleCategoryIdx}
                defaultValue="default"
                value={
                  third === null
                    ? 'default'
                    : categories[first].subCategories[second].subCategories[
                        third
                      ]?.name
                }
              >
                <option disabled value="default">
                  세부 카테고리
                </option>
                {categories &&
                  categories[first] &&
                  categories[first].subCategories &&
                  categories[first].subCategories[second] &&
                  categories[first].subCategories[second].subCategories &&
                  categories[first].subCategories[second].subCategories.map(
                    (data, idx) => (
                      <option key={idx} value={data.name}>
                        {data.name}
                      </option>
                    )
                  )}
              </Category>
            </div>
          ) : null}
          {categories &&
          categories[first] &&
          categories[first].subCategories &&
          categories[first].subCategories[second] &&
          categories[first].subCategories[second].subCategories &&
          categories[first].subCategories[second].subCategories[third] &&
          categories[first].subCategories[second].subCategories[third]
            .subCategories ? (
            <div>
              &gt;
              <Category
                ref={category4}
                name="fourth"
                onChange={handleCategoryIdx}
                defaultValue="default"
                value={
                  fourth === null
                    ? 'default'
                    : categories[first].subCategories[second].subCategories[
                        third
                      ].subCategories[fourth]?.name
                }
              >
                <option disabled value="default">
                  세부 카테고리
                </option>
                {categories &&
                  categories[first] &&
                  categories[first].subCategories &&
                  categories[first].subCategories[second] &&
                  categories[first].subCategories[second].subCategories &&
                  categories[first].subCategories[second].subCategories[
                    third
                  ] &&
                  categories[first].subCategories[second].subCategories[third]
                    .subCategories &&
                  categories[first].subCategories[second].subCategories[
                    third
                  ].subCategories.map((data, idx) => (
                    <option key={idx} value={data.name}>
                      {data.name}
                    </option>
                  ))}
              </Category>
            </div>
          ) : null}
        </CategoryContainer>
        <div style={{ width: '100%' }}>
          <Input
            width="80%"
            margin="20px 0px"
            placeholder="제목을 입력하세요"
            onChange={handleChange}
            name="title"
            autoFocus
          />
        </div>
        <UploadImageContainer>
          <UploadImage htmlFor="uploadImage">사진 업로드</UploadImage>
        </UploadImageContainer>
        <input
          type="file"
          id="uploadImage"
          style={{ display: 'none' }}
          onChange={onChange}
          multiple
          accept="image/*"
        />
        <PreviewImgsContainer>
          {previewImgs?.map((data, idx) => (
            <div style={{ position: 'relative', margin: '0px 20px' }} key={idx}>
              <RemoveBtn
                src={roundX}
                alt="removeBtn"
                onClick={() => {
                  removeImg(idx);
                }}
              />
              <PreviewImage src={data} alt="img" />
            </div>
          ))}
        </PreviewImgsContainer>
        <div>
          <Button onClick={addParentOption}>옵션 추가</Button>
          {showParentOption ? (
            <Button margin="0px 20px" onClick={addSelectionOption}>
              선택 옵션 추가
            </Button>
          ) : (
            ''
          )}
        </div>
        <div style={{ display: 'flex', margin: '30px 0px' }}>
          {showParentOption === true ? (
            <Input
              label="1차 옵션 종류"
              margin="0px 20px 0px 0px"
              name="parentOption"
              onChange={handleChange}
            />
          ) : (
            ''
          )}
          {showChildOption === true ? (
            <Input
              label="2차 옵션 종류"
              name="childOption"
              onChange={handleChange}
            />
          ) : (
            ''
          )}
        </div>
        {showSelectionOption === true ? (
          <Input
            label="선택 옵션 종류"
            name="selectionOption"
            onChange={handleChange}
            margin="10px 0px"
          />
        ) : (
          ''
        )}
        <OptionContainer>
          {parentList.map((data, idx) => (
            <Options
              key={idx}
              id={idx}
              type="parent"
              setShowChildOption={setShowChildOption}
              showChildOption={showChildOption}
              parentList={parentList}
              setParentList={setParentList}
            />
          ))}
          {selectionList.map((data, idx) => (
            <Options
              key={idx}
              id={idx}
              type="selection"
              selectionList={selectionList}
              setSelectionList={setSelectionList}
            />
          ))}
        </OptionContainer>
        <Input
          label="가격"
          min="0"
          name="price"
          type="number"
          placeholder="(원)"
          margin="20px 0px"
          onChange={handleChange}
        />
        <Discount>
          <SpecialPrice>
            <CheckboxLabel>특가 적용</CheckboxLabel>
            <Checkbox
              type="checkbox"
              checked={specialPrice}
              onChange={() => {
                setForm({ ...form, specialPrice: !specialPrice });
              }}
            />
          </SpecialPrice>
          <Input
            label="할인율"
            min="0"
            name="discountRate"
            type="number"
            placeholder="(%)"
            margin="20px 0px"
            disabled={!specialPrice}
            onChange={(e) => {
              handleDiscount(e);
              handleChange(e);
            }}
          />
          <Input label="할인가" value={discountPrice} placeholder="(원)" />
        </Discount>
        <Input
          type="number"
          min="0"
          label="배송비"
          margin="20px 0px"
          placeholder="(원)"
          name="deliveryFee"
          onChange={handleChange}
          disabled={free}
          value={deliveryFee}
        />
        <FreeDelivery>
          <CheckboxLabel>무료 배송</CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={free}
            onChange={() => {
              setFree(!free);
            }}
          />
        </FreeDelivery>
        <ProductDetailContainer>
          <ProductDetailLabel>상품 설명</ProductDetailLabel>
          <ProductDetail name="productDetail" onChange={handleChange} />
        </ProductDetailContainer>
      </Content>
      <Buttons>
        <Button width="150px" margin="0px 50px" onClick={upload}>
          등록
        </Button>
        <Button width="150px" margin="0px 50px" onClick={cancel}>
          취소
        </Button>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
const Header = styled.h1`
  margin: 20px 0px;
`;
const Content = styled.div`
  width: 100%;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const CategoryContainer = styled.div`
  display: flex;
  padding: 20px 0px;
`;
const Category = styled.select`
  margin: 0px 16px;
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;
const UploadImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const UploadImage = styled.label`
  font-weight: bold;
  color: white;
  font-size: 18px;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.mainColor};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverMainColor};
  }
`;
const PreviewImgsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  width: 100%;
  overflow: scroll;
`;
const PreviewImage = styled.img`
  width: 300px;
  height: 300px;
  border: 2px solid ${(props) => props.theme.mainColor};
  border-radius: 8px;
`;
const RemoveBtn = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 5px;
  top: 5px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Discount = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const SpecialPrice = styled.div`
  display: flex;
  align-items: center;
`;
const CheckboxLabel = styled.span`
  font-size: 18px;
  width: 100px;
`;
const Checkbox = styled.input`
  width: 30px;
  height: 30px;
`;
const FreeDelivery = styled(SpecialPrice)``;
const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px 0px;
`;
const ProductDetailLabel = styled(CheckboxLabel)``;
const ProductDetail = styled.textarea`
  margin-top: 20px;
  width: 100%;
  height: 500px;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #cccccc;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px;
`;
export default UploadProduct;
