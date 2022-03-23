import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCookie } from '../../App';
import { Input, Button } from '../../elements';
import theme from '../../theme';
import { Options } from './components';

const UploadProduct = () => {
  const url = theme.apiUrl;
  const accessToken = getCookie('login_id');
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState([]);
  const [previewImgs, setPreviewImgs] = useState([]);
  const [form, setForm] = useState({
    categoryId: 0,
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
    categoryId,
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

  const onChange = (e) => {
    let list = [...form.image];
    let previewList = [...previewImgs];
    for (let i = 0; i < e.target.files.length; i++) {
      // 여러 개의 FileList 데이터를 배열에 하나씩 추가
      list.push(e.target.files[i]);

      //이미지 미리보기를 위한 FileReader 사용
      let fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[i]);
      fileReader.onload = (evt) => {
        previewList.push(evt.target.result);
        setPreviewImgs(previewList);
      };
    }
    setForm({ ...form, image: list });
    console.log(list);
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
    if (title === '' || image === [] || price === '' || productDetail === '')
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
              categoryId: 1,
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

  const onCategorySelected = (e) => {
    const { selectedIndex } = e.target;
    //let arr = [...selectedCategoryIdx, selectedIndex];
    console.log(selectedCategoryIdx);
    setSelectedCategoryIdx((list) => list.push(selectedIndex));

    console.log(selectedCategoryIdx);
  };

  const showCategory = (idx) => {
    console.log(selectedCategoryIdx[idx]);
    return categories[selectedCategoryIdx[idx]].subCategory?.map(
      (data, idx) => <option key={idx}>{data.name}</option>
    );
  };

  useEffect(() => {
    console.log(previewImgs);
  }, [previewImgs]);

  useEffect(() => {
    setForm({ ...form, parentOptions: parentList });
  }, [parentList]);

  useEffect(() => {
    setForm({ ...form, selectionOptions: selectionList });
  }, [selectionList]);

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
    axios
      .get(url + 'categories')
      .then((response) => {
        console.log(response);
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
          <Category onChange={onCategorySelected}>
            {categories?.map((data, idx) => (
              <option key={idx}>{data.name}</option>
            ))}
          </Category>
          <Category>
            {() => {
              showCategory(0);
            }}
          </Category>
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
          <UploadImage for="uploadImage">사진 업로드</UploadImage>
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
          {previewImgs.map((data, idx) => (
            <PreviewImage key={idx} src={data} alt="img" />
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
const CategoryContainer = styled.div``;
const Category = styled.select``;
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
  margin: 0px 20px;
  border: 2px solid ${(props) => props.theme.mainColor};
  border-radius: 8px;
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
