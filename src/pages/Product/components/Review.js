import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Star, Pagination } from '../../../components'
import theme from '../../../theme'
import { ReviewDetail } from '.'
import $ from 'jquery'

const mock = [1, 2, 3, 4, 5, 6]
const reviewPerStar = [
  { rating: 5, num: 100 },
  { rating: 4, num: 200 },
  { rating: 3, num: 200 },
  { rating: 2, num: 200 },
  { rating: 1, num: 200 },
]
const reviewPerOption = ['전체', 'SS 슈퍼싱글', 'Q 퀸']

const Review = (props) => {
  const [bestClicked, setBestClicked] = useState(true)
  const [recentClicked, setRecentClicked] = useState(false)
  const [photoReviewClicked, setPhotoReviewClicked] = useState(false)
  const [starClicked, setStarClicked] = useState(false)
  const [optionClicked, setOptionClicked] = useState(false)

  useEffect(() => {
    //중복 선택이 안 되고, 최소 하나는 선택해야함
    if (bestClicked) if (recentClicked) setRecentClicked(!recentClicked)
    if (!bestClicked && !recentClicked) setBestClicked(true)
  }, [bestClicked])

  useEffect(() => {
    if (recentClicked) if (bestClicked) setBestClicked(!bestClicked)
    if (!bestClicked && !recentClicked) setRecentClicked(true)
  }, [recentClicked])

  useEffect(() => {
    if (starClicked) {
      $('#rating').show()
      if (optionClicked) setOptionClicked(false)
    } else $('#rating').hide()
  }, [starClicked])

  useEffect(() => {
    if (optionClicked) {
      $('#option').show()
      if (starClicked) setStarClicked(false)
    } else $('#option').hide()
  }, [optionClicked])

  return (
    <Container id={props.id}>
      <HeaderView>
        <Header>
          리뷰 <NumOfReviews>9,866</NumOfReviews>
        </Header>
        <WriteView>
          <Write>리뷰쓰기</Write>
        </WriteView>
      </HeaderView>
      <ReviewSummary>
        <StarView>
          <Star rating={4.8} size="36px" />
          <Rating>4.8</Rating>
        </StarView>
      </ReviewSummary>
      <ReviewFilterContainer>
        <FilterOrderList>
          <BestRecent>
            <BestOrder
              style={{ color: bestClicked ? theme.mainColor : 'gray' }}
              onClick={() => {
                setBestClicked(!bestClicked)
              }}
            >
              베스트순
            </BestOrder>
            <RecentOrder
              style={{ color: recentClicked ? theme.mainColor : 'gray' }}
              onClick={() => {
                setRecentClicked(!recentClicked)
              }}
            >
              최신순
            </RecentOrder>
          </BestRecent>
          <PhotoReview
            style={{ color: photoReviewClicked ? theme.mainColor : 'gray' }}
            onClick={() => {
              setPhotoReviewClicked(!photoReviewClicked)
            }}
          >
            <img
              alt="gallery"
              width="20px"
              height="20px"
              src={require('../../../img/gallery.png')}
            />
            <span style={{ marginLeft: 5 }}>사진리뷰</span>
          </PhotoReview>
        </FilterOrderList>
        <FilterOptionList>
          <Select
            onClick={() => {
              setStarClicked(!starClicked)
            }}
          >
            별점
            <img
              alt="ExpandMoreArrow"
              src={require('../../../img/ExpandMoreArrow.png')}
            />
          </Select>
          <Select
            style={{ marginLeft: 5 }}
            onClick={() => {
              setOptionClicked(!optionClicked)
            }}
          >
            옵션
            <img
              alt="ExpandMoreArrow"
              src={require('../../../img/ExpandMoreArrow.png')}
            />
          </Select>
          <SelectRating id="rating">
            {reviewPerStar.map((data) => (
              <SelectOptionStar
                onClick={() => {
                  $('#rating').hide()
                }}
              >
                <Star rating={data.rating} size="20px" />
                <span style={{ marginLeft: 5, fontSize: 16 }}>
                  ({data.num}개)
                </span>
              </SelectOptionStar>
            ))}
          </SelectRating>
          <SelectOption id="option">
            {reviewPerOption.map((data) => (
              <SelectOptionElement
                onClick={() => {
                  $('#option').hide()
                }}
              >
                {data}
              </SelectOptionElement>
            ))}
          </SelectOption>
        </FilterOptionList>
      </ReviewFilterContainer>
      {mock.map((data) => (
        <ReviewDetail />
      ))}
      <Pagination />
    </Container>
  )
}

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
`
const HeaderView = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Header = styled.span`
  font-size: 20px;
  font-weight: bold;
`
const WriteView = styled(Header)``
const NumOfReviews = styled.span`
  color: ${(props) => props.theme.mainColor};
`
const Write = styled(NumOfReviews)`
  &:hover {
    cursor: pointer;
  }
`
const ReviewSummary = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 200px;
  background-color: #fafafa;
  border-radius: 4px;
`
const StarView = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #eeeeee;
  padding: 20px 40px;
`
const Rating = styled.span`
  margin-left: 15px;
  font-size: 36px;
  font-weight: bold;
`
const ReviewFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
  height: 60px;
  border-top: 1px solid #eeeeee;
  position: relative;
`
const FilterOrderList = styled.div`
  display: flex;
`
const FilterOptionList = styled.div`
  display: flex;
`
const BestOrder = styled.button`
  all: unset;
  font-size: 16px;
  font-weight: bold;
`
const RecentOrder = styled(BestOrder)`
  margin-left: 15px;
`
const BestRecent = styled.div`
  padding-right: 10px;
  border-right: 1px solid #eeeeee;
`
const PhotoReview = styled(BestOrder)`
  margin-left: 10px;
  display: flex;
  align-items: center;
`
const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eeeeee;
  border: none;
  color: #777777;
  font-weight: bold;
  font-size: 16px;
  width: 70px;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
  }
`
const SelectRating = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 45px;
  right: 0px;
  border: 1px solid lightgray;
  border-radius: 8px;
  background-color: white;
`
const SelectOption = styled(SelectRating)``
const SelectOptionStar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`
const SelectOptionElement = styled(SelectOptionStar)``
export default Review
