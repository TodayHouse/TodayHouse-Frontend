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
  const [form, setForm] = useState({
    title: '',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODExMDZfNzIg%2FMDAxNTQxNDgzNTIwNDAw.zmQOUo_ahq64kf0QGODzvB75SSb2754BnyBP6y8KKBYg.AWxRc3-cTNNekmLgvTX3n4JjKuZe2CSPd6ZJyNAkEe0g.JPEG.kasiiyou%2FDSC09441.JPG&type=sc960_832',
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

  const [images, setImages] = useState([]);
  const [discountPrice, setDiscountPrice] = useState('');
  const [free, setFree] = useState(true); //무료배송 여부
  const formData = new FormData();

  const onChange = (e) => {
    // let list = [...images, e.target.files[0]];
    formData.append('file', e.target.files[0]);

    let fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = function (evt) {
      setImages(evt.target.result);
    };
    // setImages(list);
  };

  useEffect(() => {
    console.log(images);
  }, [images]);
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
    if (title === '' || image === '' || price === '' || productDetail === '')
      alert('입력되지 않은 정보가 있습니다.');
    else {
      axios
        .post(
          url + 'products',
          {
            categoryId: 0,
            childOption: '',
            deliveryFee,
            discountRate,
            parentOption: '',
            parentOptions: [],
            price,
            productDetail,
            selectionOption: '',
            selectionOptions: [],
            specialPrice,
            title,
          },
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          }
        )
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
          <img width="200px" height="200px" src={images} alt="img" />
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
