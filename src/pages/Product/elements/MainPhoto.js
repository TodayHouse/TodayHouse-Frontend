import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const MainPhoto = () => {
  const src = useSelector((state) => state.product.imgSrc) //sidePhoto에서 선택한 사진이 메인 이미지로 띄워짐
  return <Image src={src} />
}

const Image = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 8px;
`

export default MainPhoto
