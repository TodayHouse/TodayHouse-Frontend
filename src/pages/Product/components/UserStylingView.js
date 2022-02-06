import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import theme from '../../../theme'
import { UserStylingPhoto } from '.'
import leftArrow from '../../../img/leftArrow.png'
import rightArrow from '../../../img/rightArrow.png'
import $ from 'jquery'

const userStylingSample = [
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20211128_125%2F1638110286133XNGIG_JPEG%2F39246113963447552_1245063760.jpeg&type=a340',
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20211225_143%2F1640399501271Vzc0e_JPEG%2F41535346970815309_1824041491.jpg&type=a340',
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MjdfMzUg%2FMDAxNjE5NTE3NDU0NDg4.0PXwmxKSWqcGvhc7L0rfLiihnRLsMwBFvcS9neniUYEg.px3UuS1aL3ABcgsN12IYsTtSoAfZZPblV0H2_EeiLaAg.JPEG.minchae13%2F105F72E7-0002-4972-85AF-8F1A593EF867.jpg&type=a340',
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_2981230%2F29812301876.20211124044145.jpg&type=a340',
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxOTA2MDZfNDYg%2FMDAxNTU5NzQ3NDUwMzU1.4vuFMCp8rIVFnWQ8xV07iOprHAd3I7B5qoZkt4NBYS4g.JbvLg_l2QunowQGswQUP5PhNI3Mi9cUhNoiF8TiDtzwg.JPEG%2FKakaoTalk_20190520_205412386.jpg&type=a340',
]
const UserStylingView = () => {
  const totalSlide = userStylingSample.length - 1
  const carouselRef = useRef()
  const [curSlide, setCurSlide] = useState(0)

  const carouselLeft = () => {
    if (curSlide === 0) setCurSlide(totalSlide)
    else setCurSlide(curSlide - 1)
  }

  const carouselRight = () => {
    if (curSlide >= totalSlide) setCurSlide(0)
    else setCurSlide(curSlide + 1)
  }

  //현재 slide가 변경될 때
  useEffect(() => {
    //첫 사진이면 왼쪽 버튼 안 보이게
    if (curSlide === 0) $('#leftBtn').hide()
    else if (curSlide === totalSlide) $('#rightBtn').hide()
    else {
      $('#leftBtn').show()
      $('#rightBtn').show()
    }
    //slide 변경될 때 애니메이션
    carouselRef.current.style.transition = 'all 0.5s ease-in-out'
    carouselRef.current.style.transform = `translateX(${-500 * curSlide}px)`
  }, [curSlide])

  return (
    <Container>
      <UserStylingContainer>
        <UserStylingText>
          유저들의 스타일링샷{' '}
          <span style={{ color: theme.mainColor }}>954</span>
        </UserStylingText>
        <CarouselContainer>
          <UserStylingShot ref={carouselRef}>
            {userStylingSample.map((data, idx) => (
              <UserStylingPhoto
                key={idx}
                src={data}
                count={idx}
                total={totalSlide + 1}
              />
            ))}
          </UserStylingShot>
          <CarouselLeftMoveBtn id="leftBtn" onClick={carouselLeft}>
            <CarouselMoveImg src={leftArrow} />
          </CarouselLeftMoveBtn>
          <CarouselRightMoveBtn id="rightBtn" onClick={carouselRight}>
            <CarouselMoveImg src={rightArrow} />
          </CarouselRightMoveBtn>
        </CarouselContainer>
      </UserStylingContainer>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`
const UserStylingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const UserStylingText = styled.span`
  font-size: 20px;
  font-weight: bold;
`
const CarouselContainer = styled.div`
  margin-top: 20px;
  width: 700px;
  overflow: hidden;
  position: relative;
`
const UserStylingShot = styled.div`
  display: flex;
  width: 100%;
  margin-left: 100px;
`
const CarouselLeftMoveBtn = styled.button`
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  position: absolute;
  top: 225px;
  left: 25px;
`
const CarouselRightMoveBtn = styled.button`
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  position: absolute;
  top: 225px;
  right: 25px;
`
const CarouselMoveImg = styled.img`
  width: 40px;
  height: 40px;
`

export default UserStylingView
