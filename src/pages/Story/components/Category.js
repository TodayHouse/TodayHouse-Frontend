import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import SelectedCategoryElement from '../elements/SelectedCategoryElement'

const Category = () => {
  const [allColorIsChecked, setAllColorIsChecked] = useState(false)
  const [wallColorIsChecked, setwallColorIsChecked] = useState(false)
  const [selectedCategoryList, setSelectedCategoryList] = useState({
    sort: '',
    livingType: '',
    flatArea: '',
    budget: '',
    family: '',
    style: '',
    color: '',
    construction: '',
    field: '',
    worker: '',
  })

  const categoryList = [
    selectedCategoryList.sort,
    selectedCategoryList.livingType,
    selectedCategoryList.flatArea,
    selectedCategoryList.budget,
    selectedCategoryList.family,
    selectedCategoryList.style,
    selectedCategoryList.color,
    selectedCategoryList.construction,
    selectedCategoryList.field,
    selectedCategoryList.worker,
  ]

  const CategoryListAllHide = () => {
    // 초기화 버튼 누를 때 실행
    $('#selectedSort').hide()
    $('#selectedLivingType').hide()
    $('#selectedFlatArea').hide()
    $('#selectedBudget').hide()
    $('#selectedFamily').hide()
    $('#selectedStyle').hide()
    $('#selectedColor').hide()
    $('#selectedConstruction').hide()
    $('#selectedField').hide()
    $('#selectedWorker').hide()
    $('#reset').hide()
    setSelectedCategoryList({
      sort: '',
      livingType: '',
      flatArea: '',
      budget: '',
      family: '',
      style: '',
      color: '',
      construction: '',
      field: '',
      worker: '',
    })
  }

  const AllColorCheckHandler = () => {
    // 컬러 내의 전체톤 체크값이 변경될 때마다 실행됨
    console.log('전체 : ' + allColorIsChecked)

    if (allColorIsChecked) {
      // 전체톤 체크가 되어있으면
      $('#all').show() // 전체톤 색 목록을 보여줌
      $('#wall').hide() // 벽/바닥 색 목록은 숨김
      setwallColorIsChecked(false) // 벽/바닥 체크를 해제
    } else $('#all').hide()
  }

  const WallColorCheckHandler = () => {
    // 컬러 내의 벽/바닥 컬러 체크값이 변경될 때마다 실행됨
    console.log('벽 : ' + wallColorIsChecked)

    if (wallColorIsChecked) {
      // 벽/바닥 체크가 되어있으면
      $('#wall').show() // 벽/바닥 색 목록을 보여줌
      $('#all').hide() // 전체톤 색 목록은 숨김
      setAllColorIsChecked(false) // 전체톤 체크를 해제
    } else $('#wall').hide()
  }

  // 카테고리 상세항목 보이기/숨기기
  const ShowSort = () => {
    $('#sort').show()
  }
  const HideSort = () => {
    $('#sort').hide()
  }
  const ShowLivingType = () => {
    $('#livingtype').show()
  }
  const HideLivingType = () => {
    $('#livingtype').hide()
  }
  const ShowFlatArea = () => {
    $('#flatarea').show()
  }
  const HideFlatArea = () => {
    $('#flatarea').hide()
  }
  const ShowBudget = () => {
    $('#budget').show()
  }
  const HideBudget = () => {
    $('#budget').hide()
  }
  const ShowFamily = () => {
    $('#family').show()
  }
  const HideFamily = () => {
    $('#family').hide()
  }
  const ShowStyle = () => {
    $('#style').show()
  }
  const HideStyle = () => {
    $('#style').hide()
  }
  const ShowColor = () => {
    $('#color').show()
  }
  const HideColor = () => {
    $('#color').hide()
  }
  const ShowConstruction = () => {
    $('#construction').show()
  }
  const HideConstruction = () => {
    $('#construction').hide()
  }
  const ShowField = () => {
    $('#field').show()
  }
  const HideField = () => {
    $('#field').hide()
  }
  const ShowWorker = () => {
    $('#worker').show()
  }
  const HideWorker = () => {
    $('#worker').hide()
  }
  // 카테고리 상세항목 보이기/숨기기

  useEffect(() => {
    $('#sort').hide()
    $('#livingtype').hide()
    $('#flatarea').hide()
    $('#budget').hide()
    $('#family').hide()
    $('#style').hide()
    $('#color').hide()
    $('#construction').hide()
    $('#field').hide()
    $('#worker').hide()
    $('#all').hide()
    $('#wall').hide()
  }, [])

  useEffect(() => {
    // 컬러 내의 전체톤 체크값이 변경될 때마다 실행됨
    AllColorCheckHandler()
  }, [allColorIsChecked])

  useEffect(() => {
    // 컬러 내의 벽/바닥 컬러 체크값이 변경될 때마다 실행됨
    WallColorCheckHandler()
  }, [wallColorIsChecked])

  useEffect(() => {
    //초기화 버튼 보임 여부 결정
    console.log(categoryList)
    for (let i = 0; i < categoryList.length; i++) {
      if (categoryList[i] !== '') {
        //초기화 버튼 보이게
        $('#reset').show()
        break
      } else $('#reset').hide()
    }
  }, [selectedCategoryList])

  useEffect(() => {
    let cnt = 0
    categoryList.forEach((e) => {
      if (e === '') cnt += 1
    })
    if (cnt === 10) $('#reset').hide()
  }, [categoryList])

  return (
    <Fragment>
      <CategoryContainer>
        <CategoryElement style={{ width: 70 }}>
          <Select onMouseOver={ShowSort} onMouseLeave={HideSort}>
            정렬
            <img src={require('../../../img/ExpandArrow.png')} />
          </Select>
          <SortBox id="sort" onMouseOver={ShowSort} onMouseLeave={HideSort}>
            <div style={{ overflow: 'auto' }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    sort: '최근 인기순',
                  })
                  $('#selectedSort').show()
                }}
              >
                최근 인기순
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    sort: '최신순',
                  })
                  $('#selectedSort').show()
                }}
              >
                최신순
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    sort: '역대 인기순',
                  })
                  $('#selectedSort').show()
                }}
              >
                역대 인기순
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    sort: '과거순',
                  })
                  $('#selectedSort').show()
                }}
              >
                과거순
              </Detail>
            </div>
          </SortBox>
        </CategoryElement>
        <CategoryElement>
          <Select onMouseOver={ShowLivingType} onMouseLeave={HideLivingType}>
            주거형태
            <img src={require('../../../img/ExpandArrow.png')} />
          </Select>
          <LivingTypeBox
            id="livingtype"
            onMouseOver={ShowLivingType}
            onMouseLeave={HideLivingType}
          >
            <div style={{ overflow: 'auto' }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: '원룸&오피스텔',
                  })
                  $('#selectedLivingType').show()
                }}
              >
                원룸&오피스텔
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: '아파트',
                  })
                  $('#selectedLivingType').show()
                }}
              >
                아파트
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: '빌라&연립',
                  })
                  $('#selectedLivingType').show()
                }}
              >
                빌라&연립
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: '단독주택',
                  })
                  $('#selectedLivingType').show()
                }}
              >
                단독주택
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: '사무공간',
                  })
                  $('#selectedLivingType').show()
                }}
              >
                사무공간
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: '상업공간',
                  })
                  $('#selectedLivingType').show()
                }}
              >
                상업공간
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: '기타',
                  })
                  $('#selectedLivingType').show()
                }}
              >
                기타
              </Detail>
            </div>
          </LivingTypeBox>
        </CategoryElement>
        <CategoryElement style={{ width: 70 }}>
          <Select onMouseOver={ShowFlatArea} onMouseLeave={HideFlatArea}>
            평수
            <img src={require('../../../img/ExpandArrow.png')} />
          </Select>
          <FlatAreaBox
            id="flatarea"
            onMouseOver={ShowFlatArea}
            onMouseLeave={HideFlatArea}
          >
            <div style={{ overflow: 'auto' }}>
              <div style={{ height: 300, padding: 16 }}>
                <div style={{ fontWeight: 'bold', fontSize: 20, padding: 8 }}>
                  모든 평수
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <RangeSlider
                    style={{ marginTop: 20 }}
                    type="range"
                    class="form-range"
                    id="customRange1"
                  />
                  <FlatContainer style={{ marginTop: 90 }}>
                    <Flat>1-9평</Flat>
                    <Flat>10평대</Flat>
                    <Flat>10평대</Flat>
                    <Flat>10평대</Flat>
                  </FlatContainer>
                  <FlatContainer>
                    <Flat>40평대</Flat>
                    <Flat>50평대</Flat>
                    <Flat>60평대</Flat>
                    <Flat>70평 이상</Flat>
                  </FlatContainer>
                </div>
              </div>
            </div>
          </FlatAreaBox>
        </CategoryElement>
        <CategoryElement style={{ width: 70 }}>
          <Select onMouseOver={ShowBudget} onMouseLeave={HideBudget}>
            예산
            <img src={require('../../../img/ExpandArrow.png')} />
          </Select>
          <BudgetBox
            id="budget"
            onMouseOver={ShowBudget}
            onMouseLeave={HideBudget}
          >
            <div style={{ overflow: 'auto' }}>
              <div style={{ height: 230, padding: 16 }}>
                <div style={{ fontWeight: 'bold', fontSize: 20, padding: 8 }}>
                  모든 예산
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ marginTop: 8 }}>
                    <PriceContainer>
                      <Price>1백만원 미만</Price>
                      <Price>1백만원대</Price>
                      <Price>2백만원대</Price>
                      <Price>3백만원대</Price>
                    </PriceContainer>
                    <PriceContainer>
                      <Price>4백만원대</Price>
                      <Price>5백만원대</Price>
                      <Price>1천만원대</Price>
                      <Price>2천만원대</Price>
                    </PriceContainer>
                    <PriceContainer>
                      <Price>3천만원대</Price>
                      <Price>4천만원 이상</Price>
                    </PriceContainer>
                  </div>
                </div>
              </div>
            </div>
          </BudgetBox>
        </CategoryElement>
        <CategoryElement>
          <Select onMouseOver={ShowFamily} onMouseLeave={HideFamily}>
            가족형태
            <img src={require('../../../img/ExpandArrow.png')} />
          </Select>
          <FamilyBox
            id="family"
            onMouseOver={ShowFamily}
            onMouseLeave={HideFamily}
          >
            <div style={{ overflow: 'auto' }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    family: '싱글라이프',
                  })
                  $('#selectedFamily').show()
                }}
              >
                싱글라이프
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    family: '신혼 부부',
                  })
                  $('#selectedFamily').show()
                }}
              >
                신혼 부부
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    family: '아기가 있는 집',
                  })
                  $('#selectedFamily').show()
                }}
              >
                아기가 있는 집
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    family: '취학 자녀가 있는 집',
                  })
                  $('#selectedFamily').show()
                }}
              >
                취학 자녀가 있는 집
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    family: '부모님과 함께 사는 집',
                  })
                  $('#selectedFamily').show()
                }}
              >
                부모님과 함께 사는 집
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    family: '기타',
                  })
                  $('#selectedFamily').show()
                }}
              >
                기타
              </Detail>
            </div>
          </FamilyBox>
        </CategoryElement>
        <CategoryElement style={{ width: 85 }}>
          <Select onMouseOver={ShowStyle} onMouseLeave={HideStyle}>
            스타일
            <img src={require('../../../img/ExpandArrow.png')} />
          </Select>
          <StyleBox id="style" onMouseOver={ShowStyle} onMouseLeave={HideStyle}>
            <div style={{ overflow: 'visible auto' }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: '모던',
                  })
                  $('#selectedStyle').show()
                }}
              >
                모던
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: '미니멀&심플',
                  })
                  $('#selectedStyle').show()
                }}
              >
                미니멀&심플
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: '내추럴',
                  })
                  $('#selectedStyle').show()
                }}
              >
                내추럴
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: '북유럽',
                  })
                  $('#selectedStyle').show()
                }}
              >
                북유럽
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: '빈티지&레트로',
                  })
                  $('#selectedStyle').show()
                }}
              >
                빈티지&레트로
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: '클래식&앤틱',
                  })
                  $('#selectedStyle').show()
                }}
              >
                클래식&앤틱
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: '프렌치&프로방스',
                  })
                  $('#selectedStyle').show()
                }}
              >
                프렌치&프로방스
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: '러블리&로맨틱',
                  })
                  $('#selectedStyle').show()
                }}
              >
                러블리&로맨틱
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: '인더스트리얼',
                  })
                  $('#selectedStyle').show()
                }}
              >
                인더스트리얼
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: '한국&아시아',
                  })
                  $('#selectedStyle').show()
                }}
              >
                한국&아시아
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: '유니크&믹스매치',
                  })
                  $('#selectedStyle').show()
                }}
              >
                유니크&믹스매치
              </Detail>
            </div>
          </StyleBox>
        </CategoryElement>
        <CategoryElement style={{ width: 70 }}>
          <Select onMouseOver={ShowColor} onMouseLeave={HideColor}>
            컬러
            <img src={require('../../../img/ExpandArrow.png')} />
          </Select>
          <ColorBox id="color" onMouseOver={ShowColor} onMouseLeave={HideColor}>
            <div style={{ overflow: 'auto' }}>
              <div style={{ height: 350, padding: 16 }}>
                <CheckboxContainer>
                  전체톤
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      onChange={() => {
                        setAllColorIsChecked(!allColorIsChecked)
                      }}
                      checked={allColorIsChecked}
                    />
                  </div>
                </CheckboxContainer>
                <div id="all">sfsdfdsf</div>
                <CheckboxContainer>
                  벽/바닥 컬러
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      onChange={() => {
                        setwallColorIsChecked(!wallColorIsChecked)
                      }}
                      checked={wallColorIsChecked}
                    />
                  </div>
                </CheckboxContainer>
                <div id="wall">wall</div>
              </div>
            </div>
          </ColorBox>
        </CategoryElement>
        <CategoryElement>
          <Select
            onMouseOver={ShowConstruction}
            onMouseLeave={HideConstruction}
          >
            세부공사
            <img src={require('../../../img/ExpandArrow.png')} />
          </Select>
          <ConstructionBox
            id="construction"
            onMouseOver={ShowConstruction}
            onMouseLeave={HideConstruction}
          >
            <div style={{ overflow: 'visible auto' }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: '헤링본 마루',
                  })
                  $('#selectedConstruction').show()
                }}
              >
                헤링본 마루
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: '대리석 바닥',
                  })
                  $('#selectedConstruction').show()
                }}
              >
                대리석 바닥
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: '원목마루',
                  })
                  $('#selectedConstruction').show()
                }}
              >
                원목마루
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: '포세린타일',
                  })
                  $('#selectedConstruction').show()
                }}
              >
                포세린타일
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: '폴리싱타일',
                  })
                  $('#selectedConstruction').show()
                }}
              >
                폴리싱타일
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: '주방리모델링',
                  })
                  $('#selectedConstruction').show()
                }}
              >
                주방리모델링
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: '조명시공',
                  })
                  $('#selectedConstruction').show()
                }}
              >
                조명시공
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: '폴딩도어',
                  })
                  $('#selectedConstruction').show()
                }}
              >
                폴딩도어
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: '중문',
                  })
                  $('#selectedConstruction').show()
                }}
              >
                중문
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: '가벽&파티션',
                  })
                  $('#selectedConstruction').show()
                }}
              >
                가벽&파티션
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: '슬라이딩도어',
                  })
                  $('#selectedConstruction').show()
                }}
              >
                슬라이딩도어
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: '아트월',
                  })
                  $('#selectedConstruction').show()
                }}
              >
                아트월
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: '발코니확장',
                  })
                  $('#selectedConstruction').show()
                }}
              >
                발코니확장
              </Detail>
            </div>
          </ConstructionBox>
        </CategoryElement>
        <CategoryElement style={{ width: 70 }}>
          <Select onMouseOver={ShowField} onMouseLeave={HideField}>
            분야
            <img src={require('../../../img/ExpandArrow.png')} />
          </Select>
          <FieldBox id="field" onMouseOver={ShowField} onMouseLeave={HideField}>
            <div style={{ overflow: 'auto' }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    field: '리모델링',
                  })
                  $('#selectedField').show()
                }}
              >
                리모델링
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    field: '홈스타일링',
                  })
                  $('#selectedField').show()
                }}
              >
                홈스타일링
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    field: '부분공사',
                  })
                  $('#selectedField').show()
                }}
              >
                부분공사
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    field: '건축',
                  })
                  $('#selectedField').show()
                }}
              >
                건축
              </Detail>
            </div>
          </FieldBox>
        </CategoryElement>
        <CategoryElement style={{ width: 85 }}>
          <Select onMouseOver={ShowWorker} onMouseLeave={HideWorker}>
            작업자
            <img src={require('../../../img/ExpandArrow.png')} />
          </Select>
          <WorkerBox
            id="worker"
            onMouseOver={ShowWorker}
            onMouseLeave={HideWorker}
          >
            <div style={{ overflow: 'auto' }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    worker: '셀프·DIY',
                  })
                  $('#selectedWorker').show()
                }}
                style={{
                  width: 400,
                  height: 80,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>셀프·DIY</div>
                <div style={{ fontSize: 12, color: '#777777' }}>
                  인테리어 전과정을 직접 하는 것
                </div>
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    worker: '반셀프',
                  })
                  $('#selectedWorker').show()
                }}
                style={{
                  width: 400,
                  height: 80,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>반셀프</div>
                <div style={{ fontSize: 12, color: '#777777' }}>
                  디자인, 공정순서 등 시공계획은 본인이 직접하고, 실제 공사는 각
                  분야 전문가를 찾아 맡기는 것.
                </div>
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    worker: '전문가',
                  })
                  $('#selectedWorker').show()
                }}
                style={{
                  width: 400,
                  height: 80,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>전문가</div>
                <div style={{ fontSize: 12, color: '#777777' }}>
                  인테리어 업체/전문가가 리모델링 계획부터 공사까지 총괄하는 것
                </div>
              </Detail>
            </div>
          </WorkerBox>
        </CategoryElement>
      </CategoryContainer>
      <SelectedCategoryContainer>
        <SelectedCategoryElement
          id="selectedSort"
          onClick={() => {
            $('#selectedSort').hide()
            setSelectedCategoryList({ ...selectedCategoryList, sort: '' })
          }}
        >
          {selectedCategoryList.sort}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedLivingType"
          onClick={() => {
            $('#selectedLivingType').hide()
            setSelectedCategoryList({ ...selectedCategoryList, livingType: '' })
          }}
        >
          {selectedCategoryList.livingType}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedFlatArea"
          onClick={() => {
            $('#selectedFlatArea').hide()
            setSelectedCategoryList({ ...selectedCategoryList, flatArea: '' })
          }}
        >
          {selectedCategoryList.flatArea}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedBudget"
          onClick={() => {
            $('#selectedBudget').hide()
            setSelectedCategoryList({ ...selectedCategoryList, budget: '' })
          }}
        >
          {selectedCategoryList.budget}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedFamily"
          onClick={() => {
            $('#selectedFamily').hide()
            setSelectedCategoryList({ ...selectedCategoryList, family: '' })
          }}
        >
          {selectedCategoryList.family}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedStyle"
          onClick={() => {
            $('#selectedStyle').hide()
            setSelectedCategoryList({ ...selectedCategoryList, style: '' })
          }}
        >
          {selectedCategoryList.style}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedColor"
          onClick={() => {
            $('#selectedColor').hide()
            setSelectedCategoryList({ ...selectedCategoryList, color: '' })
          }}
        >
          {selectedCategoryList.color}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedConstruction"
          onClick={() => {
            $('#selectedConstruction').hide()
            setSelectedCategoryList({
              ...selectedCategoryList,
              construction: '',
            })
          }}
        >
          {selectedCategoryList.construction}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedField"
          onClick={() => {
            $('#selectedField').hide()
            setSelectedCategoryList({ ...selectedCategoryList, field: '' })
          }}
        >
          {selectedCategoryList.field}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedWorker"
          onClick={() => {
            $('#selectedWorker').hide()
            setSelectedCategoryList({ ...selectedCategoryList, worker: '' })
          }}
        >
          {selectedCategoryList.worker}
        </SelectedCategoryElement>
        <div
          id="reset"
          style={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            color: '#35c4ef',
            padding: '0px 16px',
          }}
          onClick={CategoryListAllHide}
        >
          초기화
        </div>
      </SelectedCategoryContainer>
    </Fragment>
  )
}

const CategoryContainer = styled.div`
  display: flex;
`
const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eeeeee;
  //width: 100px;
  height: 40px;
  border: none;
  color: #777777;
  font-weight: bold;
  font-size: 16px;
  padding: 0px 8px;
  border-radius: 4px;
  &:hover {
    background-color: #dddddd;
  }
`
const SortBox = styled.div`
  width: 200px;
  height: 199px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
`
const LivingTypeBox = styled.div`
  width: 200px;
  height: 349px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
`
const FlatAreaBox = styled.div`
  width: 370px;
  height: 299px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
`
const BudgetBox = styled.div`
  width: 400px;
  height: 229px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
`
const FamilyBox = styled.div`
  width: 200px;
  height: 299px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
`
const StyleBox = styled.div`
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
`
const ColorBox = styled.div`
  width: 500px;
  height: 349px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
`
const ConstructionBox = styled.div`
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
`
const FieldBox = styled.div`
  width: 200px;
  height: 199px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
`
const WorkerBox = styled.div`
  width: 400px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
`
const CategoryElement = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  overflow: visible;
  margin: 0px 4px;
`
const Detail = styled.div`
  width: 200px;
  height: 50px;
  padding: 16px;
  color: #555555;
  &:hover {
    background-color: #dbf2ff;
  }
`
const PriceContainer = styled.div`
  display: flex;
  overflow: auto;
`
const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 40px;
  background-color: #eeeeee;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  color: #777777;
  margin: 2px;
`
const RangeSlider = styled.input`
  width: 330px;
`
const FlatContainer = styled.div`
  display: flex;
  overflow: auto;
`
const Flat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  background-color: #eeeeee;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  color: #777777;
  margin: 2px;
`
const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #777777;
  padding: 12px 0px;
`
const SelectedCategoryContainer = styled.div`
  display: flex;
  margin-top: 12px;
`
export default Category
