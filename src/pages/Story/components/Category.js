import React, { useState, useEffect } from "react"
import styled from "styled-components"
import $ from "jquery"
import SelectedCategoryElement from "../elements/SelectedCategoryElement"
import { Palette, CategoryElement, DetailBox } from "."
import { useDispatch, useSelector } from "react-redux"
import { changeCategoryList } from "../../../redux/reducer/story"

const Category = () => {
  const dispatch = useDispatch()
  const [flatText, setFlatText] = useState("모든 평수")
  const [allColorIsChecked, setAllColorIsChecked] = useState(false)
  const [wallColorIsChecked, setwallColorIsChecked] = useState(false)
  const selectedCategoryList = useSelector(
    (state) => state.story.selectedCategoryList
  )

  //리덕스에서 받아온 객체를 배열로 변환
  const categoryList = Object.entries(selectedCategoryList)

  const flatList = [
    "1-9평",
    "10평대",
    "20평대",
    "30평대",
    "40평대",
    "50평대",
    "60평대",
    "70평 이상",
  ]

  const priceList = [
    "1백만원 미만",
    "1백만원대",
    "2백만원대",
    "3백만원대",
    "4백만원대",
    "5백만원대",
    "1천만원대",
    "2천만원대",
    "3천만원대",
    "4천만원 이상",
  ]

  const workerList = [
    ["셀프·DIY", "인테리어 전과정을 직접 하는 것"],
    [
      "반셀프",
      "디자인, 공정순서 등 시공계획은 본인이 직접 하고, 실제 공사는 각 분야 전문가를 찾아 맡기는 것",
    ],
    ["전문가", "인테리어 업체/전문가가 리모델링 계획부터 공사까지 총괄하는 것"],
  ]

  //선택된 필터의 id 목록
  const selectedList = [
    "selectedSort",
    "selectedLivingType",
    "selectedFlatArea",
    "selectedBudget",
    "selectedFamily",
    "selectedStyle",
    "selectedAllColor",
    "selectedWallColor",
    "selectedFloorColor",
    "selectedConstruction",
    "selectedField",
    "selectedWorker",
  ]

  const setFlatValue = (data) => {
    if (1 <= data && data < 10) {
      setFlatText("1-9평")
      dispatch(changeCategoryList({ name: "flatArea", data: "1-9평" }))
      $("#selectedFlatArea").show()
    }
    if (10 <= data && data < 20) {
      setFlatText("10평대")
      dispatch(changeCategoryList({ name: "flatArea", data: "10평대" }))
      $("#selectedFlatArea").show()
    }
    if (20 <= data && data < 30) {
      setFlatText("20평대")
      dispatch(changeCategoryList({ name: "flatArea", data: "20평대" }))
      $("#selectedFlatArea").show()
    }
    if (30 <= data && data < 40) {
      setFlatText("30평대")
      dispatch(changeCategoryList({ name: "flatArea", data: "30평대" }))
      $("#selectedFlatArea").show()
    }
    if (40 <= data && data < 50) {
      setFlatText("40평대")
      dispatch(changeCategoryList({ name: "flatArea", data: "40평대" }))
      $("#selectedFlatArea").show()
    }
    if (50 <= data && data < 60) {
      setFlatText("50평대")
      dispatch(changeCategoryList({ name: "flatArea", data: "50평대" }))
      $("#selectedFlatArea").show()
    }
    if (60 <= data && data < 70) {
      setFlatText("60평대")
      dispatch(changeCategoryList({ name: "flatArea", data: "60평대" }))
      $("#selectedFlatArea").show()
    }
    if (70 <= data && data < 80) {
      setFlatText("70평 이상")
      dispatch(changeCategoryList({ name: "flatArea", data: "70평 이상" }))
      $("#selectedFlatArea").show()
    }
  }

  const categoryListAllhide = () => {
    // 초기화 버튼 누를 때 실행
    selectedList.forEach((data) => {
      $(`#${data}`).hide()
    })
    $("#reset").hide()
    //selectedList 초기화
  }

  // 카테고리 상세항목 보이기/숨기기
  const showOption = (id) => {
    $(`#${id}`).show()
  }
  const hideOption = (id) => {
    $(`#${id}`).hide()
  }

  useEffect(() => {
    $("#sort").hide()
    $("#livingType").hide()
    $("#flatArea").hide()
    $("#budget").hide()
    $("#family").hide()
    $("#style").hide()
    $("#color").hide()
    $("#construction").hide()
    $("#field").hide()
    $("#worker").hide()
    $("#all").hide()
    $("#wall").hide()
    $("#floor").hide()
    $("#reset").hide()
    categoryListAllhide()
  }, [])

  useEffect(() => {
    // 컬러 내의 전체톤 체크값이 변경될 때마다 실행됨
    if (allColorIsChecked) {
      // 전체톤 체크가 되어있으면
      $("#all").show() // 전체톤 색 목록을 보여줌
      $("#wall").hide() // 벽/바닥 색 목록은 숨김
      $("#floor").hide()
      setwallColorIsChecked(false) // 벽/바닥 체크를 해제
    } else $("#all").hide()
  }, [allColorIsChecked])

  useEffect(() => {
    // 컬러 내의 벽/바닥 컬러 체크값이 변경될 때마다 실행됨
    if (wallColorIsChecked) {
      // 벽/바닥 체크가 되어있으면
      $("#wall").show() // 벽/바닥 색 목록을 보여줌
      $("#floor").show()
      $("#all").hide() // 전체톤 색 목록은 숨김
      setAllColorIsChecked(false) // 전체톤 체크를 해제
    } else {
      $("#wall").hide()
      $("#floor").hide()
    }
  }, [wallColorIsChecked])

  useEffect(() => {
    //초기화 버튼 보임 여부 결정
    for (let i = 0; i < categoryList.length; i++) {
      if (categoryList[i][1] !== "") {
        //초기화 버튼 보이게
        $("#reset").show()
        break
      } else $("#reset").hide()
    }
  }, [selectedCategoryList])

  return (
    <Container>
      <CategoryContainer>
        <CategoryElement
          onMouseOver={() => {
            showOption("sort")
          }}
          onMouseLeave={() => {
            hideOption("sort")
          }}
          name="정렬"
        >
          <DetailBox
            id="sort"
            onMouseOver={() => {
              showOption("sort")
            }}
            onMouseLeave={() => {
              hideOption("sort")
            }}
            options={["최신순", "최근 인기순", "역대 인기순", "과거순"]}
            selected="selectedSort"
          />
        </CategoryElement>
        <CategoryElement
          onMouseOver={() => {
            showOption("livingType")
          }}
          onMouseLeave={() => {
            hideOption("livingType")
          }}
          name="주거형태"
        >
          <DetailBox
            id="livingType"
            onMouseOver={() => {
              showOption("livingType")
            }}
            onMouseLeave={() => {
              hideOption("livingType")
            }}
            options={[
              "원룸&오피스텔",
              "아파트",
              "빌라&연립",
              "단독주택",
              "사무공간",
              "상업공간",
              "기타",
            ]}
            selected="selectedLivingType"
          />
        </CategoryElement>
        <CategoryElement
          onMouseOver={() => {
            showOption("flatArea")
          }}
          onMouseLeave={() => {
            hideOption("flatArea")
          }}
          name="평수"
        >
          <FlatAreaBox
            id="flatArea"
            onMouseOver={() => {
              showOption("flatArea")
            }}
            onMouseLeave={() => {
              hideOption("flatArea")
            }}
          >
            <div style={{ overflow: "auto" }}>
              <div style={{ height: 300, padding: 16 }}>
                <div style={{ fontWeight: "bold", fontSize: 20, padding: 8 }}>
                  {flatText}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <RangeSlider
                      type="range"
                      min="1"
                      max="80"
                      class="form-range"
                      id="customRange1"
                      onChange={(e) => {
                        if (e.target.value === "80") setFlatText("모든 평수")
                        else {
                          let flatValue = Number(e.target.value)
                          setFlatValue(flatValue)
                        }
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#777777",
                        fontSize: 14,
                      }}
                    >
                      <p>1평</p>
                      <p>70평 이상</p>
                    </div>
                  </div>
                  <FlatContainer style={{ marginTop: 30 }}>
                    {flatList.map((data, idx) => (
                      <Flat
                        key={idx}
                        onClick={() => {
                          dispatch(
                            changeCategoryList({
                              name: "flatArea",
                              data,
                            })
                          )
                          setFlatText(data)
                          $("#customRange1").val(idx * 10 + 9)
                          $("#selectedFlatArea").show()
                        }}
                      >
                        {data}
                      </Flat>
                    ))}
                  </FlatContainer>
                </div>
              </div>
            </div>
          </FlatAreaBox>
        </CategoryElement>
        <CategoryElement
          onMouseOver={() => {
            showOption("budget")
          }}
          onMouseLeave={() => {
            hideOption("budget")
          }}
          name="예산"
        >
          <BudgetBox
            id="budget"
            onMouseOver={() => {
              showOption("budget")
            }}
            onMouseLeave={() => {
              hideOption("budget")
            }}
          >
            <div style={{ overflow: "auto" }}>
              <div style={{ height: 230, padding: 16 }}>
                <div style={{ fontWeight: "bold", fontSize: 20, padding: 8 }}>
                  모든 예산
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: 8 }}>
                    <PriceContainer>
                      {priceList.map((data, idx) => (
                        <Price
                          key={idx}
                          onClick={() => {
                            dispatch(
                              changeCategoryList({
                                name: "budget",
                                data,
                              })
                            )
                            $("#selectedBudget").show()
                          }}
                        >
                          {data}
                        </Price>
                      ))}
                    </PriceContainer>
                  </div>
                </div>
              </div>
            </div>
          </BudgetBox>
        </CategoryElement>
        <CategoryElement
          onMouseOver={() => {
            showOption("family")
          }}
          onMouseLeave={() => {
            hideOption("family")
          }}
          name="가족형태"
        >
          <DetailBox
            id="family"
            onMouseOver={() => {
              showOption("family")
            }}
            onMouseLeave={() => {
              hideOption("family")
            }}
            options={[
              "싱글라이프",
              "신혼 부부",
              "아기가 있는 집",
              "취학 자녀가 있는 집",
              "부모님과 함께 사는 집",
              "기타",
            ]}
            selected="selectedFamily"
          />
        </CategoryElement>
        <CategoryElement
          onMouseOver={() => {
            showOption("style")
          }}
          onMouseLeave={() => {
            hideOption("style")
          }}
          name="스타일"
        >
          <DetailBox
            id="style"
            onMouseOver={() => {
              showOption("style")
            }}
            onMouseLeave={() => {
              hideOption("style")
            }}
            options={[
              "모던",
              "미니멀&심플",
              "내추럴",
              "북유럽",
              "빈티지&레트로",
              "클래식&앤틱",
              "프렌치&프로방스",
              "러블리&로맨틱",
              "인더스트리얼",
              "한국&아시아",
              "유니크&믹스매치",
            ]}
            selected="selectedStyle"
          />
        </CategoryElement>
        <CategoryElement
          onMouseOver={() => {
            showOption("color")
          }}
          onMouseLeave={() => {
            hideOption("color")
          }}
          name="컬러"
        >
          <ColorBox
            id="color"
            onMouseOver={() => {
              showOption("color")
            }}
            onMouseLeave={() => {
              hideOption("color")
            }}
          >
            <div style={{ overflow: "auto" }}>
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
                <Palette
                  id="all"
                  onClick={() => {
                    $("#selectedAllColor").show()
                  }}
                />
                <div style={{ marginTop: 20 }}>
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
                </div>
                <PaletteWrap>
                  <Palette type="벽" id="wall" />
                  <Palette type="바닥" id="floor" />
                </PaletteWrap>
              </div>
            </div>
          </ColorBox>
        </CategoryElement>
        <CategoryElement
          onMouseOver={() => {
            showOption("construction")
          }}
          onMouseLeave={() => {
            hideOption("construction")
          }}
          name="세부공사"
        >
          <DetailBox
            id="construction"
            onMouseOver={() => {
              showOption("construction")
            }}
            onMouseLeave={() => {
              hideOption("construction")
            }}
            options={[
              "헤링본 마루",
              "대리석 바닥",
              "원목마루",
              "포세린타일",
              "폴리싱타일",
              "주방리모델링",
              "조명시공",
              "폴딩도어",
              "중문",
              "가벽&파티션",
              "슬라이딩도어",
              "아트월",
              "발코니확장",
            ]}
            selected="selectedConstruction"
          />
        </CategoryElement>
        <CategoryElement
          onMouseOver={() => {
            showOption("field")
          }}
          onMouseLeave={() => {
            hideOption("field")
          }}
          name="분야"
        >
          <DetailBox
            id="field"
            onMouseOver={() => {
              showOption("field")
            }}
            onMouseLeave={() => {
              hideOption("field")
            }}
            options={["리모델링", "홈스타일링", "부분공사", "건축"]}
            selected="selectedField"
          />
        </CategoryElement>
        <CategoryElement
          onMouseOver={() => {
            showOption("worker")
          }}
          onMouseLeave={() => {
            hideOption("worker")
          }}
          name="작업자"
        >
          <WorkerBox
            id="worker"
            onMouseOver={() => {
              showOption("worker")
            }}
            onMouseLeave={() => {
              hideOption("worker")
            }}
          >
            <div style={{ overflow: "auto" }}>
              {workerList.map((data, idx) => (
                <Detail
                  key={idx}
                  onClick={() => {
                    dispatch(
                      changeCategoryList({ name: "worker", data: data[0] })
                    )
                    $("#selectedWorker").show()
                  }}
                >
                  <div>{data[0]}</div>
                  <div style={{ fontSize: 12, color: "#777777" }}>
                    {data[1]}
                  </div>
                </Detail>
              ))}
            </div>
          </WorkerBox>
        </CategoryElement>
      </CategoryContainer>
      <SelectedCategoryContainer>
        {categoryList.map((data, idx) => (
          <SelectedCategoryElement
            id={selectedList[idx]}
            onClick={() => {
              $(`#${selectedList[idx]}`).hide()
              dispatch(changeCategoryList({ name: data[0], data: "" }))
            }}
          >
            {data[1]}
          </SelectedCategoryElement>
        ))}
        <ResetButton id="reset" onClick={categoryListAllhide}>
          초기화
        </ResetButton>
      </SelectedCategoryContainer>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const CategoryContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  padding: 12px;
`
const FlatAreaBox = styled.div`
  width: 370px;
  height: 299px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
  background-color: white;
`
const BudgetBox = styled.div`
  width: 400px;
  height: 229px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
  background-color: white;
`
const ColorBox = styled.div`
  width: 500px;
  height: 349px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
  background-color: white;
`
const WorkerBox = styled.div`
  position: absolute;
  top: 40px;
  width: 400px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 80px;
  padding: 16px;
  color: #555555;
  &:hover {
    background-color: #dbf2ff;
  }
`
const PriceContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
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
  &:hover {
    background-color: #dddddd;
    cursor: pointer;
  }
`
const RangeSlider = styled.input`
  width: 330px;
  margin-top: 20px;
`
const FlatContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
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
  &:hover {
    background-color: #dddddd;
    cursor: pointer;
  }
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
  margin-top: 20px;
  margin-left: 12px;
  height: 30px;
  position: absolute;
  top: 160px;
  z-index: 1;
`
const ResetButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${(props) => props.theme.mainColor};
  padding: 0px 16px;
  border: none;
  background-color: white;
`
const PaletteWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
`
export default Category
