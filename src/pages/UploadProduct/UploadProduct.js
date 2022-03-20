import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCookie } from '../../App';
import { Input, Button } from '../../elements';
import theme from '../../theme';

const UploadProduct = () => {
  const url = theme.apiUrl;
  const accessToken = getCookie('login_id');
  const navigate = useNavigate();
  const [previewImgs, setPreviewImgs] = useState([]);
  const [form, setForm] = useState({
    title: '',
    image: [],
    price: '',
    specialPrice: false,
    discountRate: 0,
    deliveryFee: 0,
    productDetail: '',
  });

  const {
    title,
    image,
    price,
    specialPrice,
    discountRate,
    deliveryFee,
    productDetail,
  } = form;

  const [discountPrice, setDiscountPrice] = useState('');
  const [free, setFree] = useState(true); //무료배송 여부
  const formData = new FormData();

  const onChange = (e) => {
    // 여러 개의 FileList 데이터를 배열에 하나씩 추가
    let list = [...form.image];
    for (let i = 0; i < e.target.files.length; i++) {
      list.push(e.target.files[i]);
    }
    setForm({ ...form, image: list });

    //이미지 미리보기를 위한 FileReader 사용
    let previewList = [...previewImgs];
    for (let i = 0; i < e.target.files.length; i++) {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[i]);
      fileReader.onload = function (evt) {
        previewList.push(evt.target.result);
      };
      console.log(previewList);
    }

    setPreviewImgs(previewList);
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
              childOption: '',
              deliveryFee,
              discountRate,
              parentOption: '',
              parentOptions: [
                {
                  childOptions: [
                    { content: '', parentOptionId: 1, price: 0, stock: 0 },
                  ],
                  content: '',
                  price: 0,
                  productId: 1,
                  stock: 0,
                },
              ],
              price,
              productDetail,
              selectionOption: '',
              selectionOptions: [
                { content: '', productId: 1, price: 0, stock: 0 },
              ],
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

  return (
    <Container>
      <Header>상품 등록</Header>
      <Content>
        <Input
          width="80%"
          margin="20px 0px"
          placeholder="제목을 입력하세요"
          onChange={handleChange}
          name="title"
          autoFocus
        />
        <UploadImage for="uploadImage">사진 업로드</UploadImage>
        <input
          type="file"
          id="uploadImage"
          style={{ display: 'none' }}
          onChange={onChange}
          multiple
          accept="image/*"
        />
        <div>
          {previewImgs.map((data, idx) => (
            <img key={idx} width="200px" height="200px" src={data} alt="img" />
          ))}
        </div>
        <Input
          label="가격"
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
const UploadImage = styled.label`
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
