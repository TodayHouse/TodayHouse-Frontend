import React, { useState, useEffect, Fragment } from "react"
import styled from "styled-components"
import $ from "jquery"
import SelectedCategoryElement from "../elements/SelectedCategoryElement"
import { Palette } from "../components/index"

const Category = () => {
  const [flatText, setFlatText] = useState("모든 평수")
  const [allColorIsChecked, setAllColorIsChecked] = useState(false)
  const [wallColorIsChecked, setwallColorIsChecked] = useState(false)
  const [selectedCategoryList, setSelectedCategoryList] = useState({
    sort: "",
    livingType: "",
    flatArea: "",
    budget: "",
    family: "",
    style: "",
    allColor: "",
    wallColor: "",
    floorColor: "",
    construction: "",
    field: "",
    worker: "",
  })

  const categoryList = Object.entries(selectedCategoryList)

  const setFlatValue = (data) => {
    if (1 <= data && data < 10) {
      setFlatText("1-9평")
      setSelectedCategoryList({
        ...selectedCategoryList,
        flatArea: "1-9평",
      })
      $("#selectedFlatArea").show()
    }
    if (10 <= data && data < 20) {
      setFlatText("10평대")
      setSelectedCategoryList({
        ...selectedCategoryList,
        flatArea: "10평대",
      })
      $("#selectedFlatArea").show()
    }
    if (20 <= data && data < 30) {
      setFlatText("20평대")
      setSelectedCategoryList({
        ...selectedCategoryList,
        flatArea: "20평대",
      })
      $("#selectedFlatArea").show()
    }
    if (30 <= data && data < 40) {
      setFlatText("30평대")
      setSelectedCategoryList({
        ...selectedCategoryList,
        flatArea: "30평대",
      })
      $("#selectedFlatArea").show()
    }
    if (40 <= data && data < 50) {
      setFlatText("40평대")
      setSelectedCategoryList({
        ...selectedCategoryList,
        flatArea: "40평대",
      })
      $("#selectedFlatArea").show()
    }
    if (50 <= data && data < 60) {
      setFlatText("50평대")
      setSelectedCategoryList({
        ...selectedCategoryList,
        flatArea: "50평대",
      })
      $("#selectedFlatArea").show()
    }
    if (60 <= data && data < 70) {
      setFlatText("60평대")
      setSelectedCategoryList({
        ...selectedCategoryList,
        flatArea: "60평대",
      })
      $("#selectedFlatArea").show()
    }
    if (70 <= data && data < 80) {
      setFlatText("70평 이상")
      setSelectedCategoryList({
        ...selectedCategoryList,
        flatArea: "70평대 이상",
      })
      $("#selectedFlatArea").show()
    }
  }

  const categoryListAllhide = () => {
    // 초기화 버튼 누를 때 실행
    $("#selectedSort").hide()
    $("#selectedLivingType").hide()
    $("#selectedFlatArea").hide()
    $("#selectedBudget").hide()
    $("#selectedFamily").hide()
    $("#selectedStyle").hide()
    $("#selectedAllColor").hide()
    $("#selectedWallColor").hide()
    $("#selectedFloorColor").hide()
    $("#selectedConstruction").hide()
    $("#selectedField").hide()
    $("#selectedWorker").hide()
    $("#reset").hide()
    setSelectedCategoryList({
      sort: "",
      livingType: "",
      flatArea: "",
      budget: "",
      family: "",
      style: "",
      allColor: "",
      wallColor: "",
      floorColor: "",
      construction: "",
      field: "",
      worker: "",
    })
  }

  // 카테고리 상세항목 보이기/숨기기
  const showSort = () => {
    $("#sort").show()
  }
  const hideSort = () => {
    $("#sort").hide()
  }
  const showLivingType = () => {
    $("#livingtype").show()
  }
  const hideLivingType = () => {
    $("#livingtype").hide()
  }
  const showFlatArea = () => {
    $("#flatarea").show()
  }
  const hideFlatArea = () => {
    $("#flatarea").hide()
  }
  const showBudget = () => {
    $("#budget").show()
  }
  const hideBudget = () => {
    $("#budget").hide()
  }
  const showFamily = () => {
    $("#family").show()
  }
  const hideFamily = () => {
    $("#family").hide()
  }
  const showStyle = () => {
    $("#style").show()
  }
  const hideStyle = () => {
    $("#style").hide()
  }
  const showColor = () => {
    $("#color").show()
  }
  const hideColor = () => {
    $("#color").hide()
  }
  const showConstruction = () => {
    $("#construction").show()
  }
  const hideConstruction = () => {
    $("#construction").hide()
  }
  const showField = () => {
    $("#field").show()
  }
  const hideField = () => {
    $("#field").hide()
  }
  const showWorker = () => {
    $("#worker").show()
  }
  const hideWorker = () => {
    $("#worker").hide()
  }
  // 카테고리 상세항목 보이기/숨기기

  useEffect(() => {
    $("#sort").hide()
    $("#livingtype").hide()
    $("#flatarea").hide()
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
    $("#selectedSort").hide()
    $("#selectedLivingType").hide()
    $("#selectedFlatArea").hide()
    $("#selectedBudget").hide()
    $("#selectedFamily").hide()
    $("#selectedStyle").hide()
    $("#selectedAllColor").hide()
    $("#selectedWallColor").hide()
    $("#selectedFloorColor").hide()
    $("#selectedConstruction").hide()
    $("#selectedField").hide()
    $("#selectedWorker").hide()
    $("#reset").hide()
  }, [])

  useEffect(() => {
    // 컬러 내의 전체톤 체크값이 변경될 때마다 실행됨
    console.log("전체 : " + allColorIsChecked)

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
    console.log("벽 : " + wallColorIsChecked)

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
    <Fragment>
      <CategoryContainer>
        <CategoryElement style={{ width: 70 }}>
          <Select onMouseOver={showSort} onMouseLeave={hideSort}>
            정렬
            <img
              alt="arrow"
              src={require("../../../img/ExpandMoreArrow.png")}
            />
          </Select>
          <SortBox id="sort" onMouseOver={showSort} onMouseLeave={hideSort}>
            <div style={{ overflow: "auto" }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    sort: "최근 인기순",
                  })
                  $("#selectedSort").show()
                }}
              >
                최근 인기순
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    sort: "최신순",
                  })
                  $("#selectedSort").show()
                }}
              >
                최신순
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    sort: "역대 인기순",
                  })
                  $("#selectedSort").show()
                }}
              >
                역대 인기순
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    sort: "과거순",
                  })
                  $("#selectedSort").show()
                }}
              >
                과거순
              </Detail>
            </div>
          </SortBox>
        </CategoryElement>
        <CategoryElement>
          <Select onMouseOver={showLivingType} onMouseLeave={hideLivingType}>
            주거형태
            <img
              alt="arrow"
              src={require("../../../img/ExpandMoreArrow.png")}
            />
          </Select>
          <LivingTypeBox
            id="livingtype"
            onMouseOver={showLivingType}
            onMouseLeave={hideLivingType}
          >
            <div style={{ overflow: "auto" }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: "원룸&오피스텔",
                  })
                  $("#selectedLivingType").show()
                }}
              >
                원룸&오피스텔
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: "아파트",
                  })
                  $("#selectedLivingType").show()
                }}
              >
                아파트
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: "빌라&연립",
                  })
                  $("#selectedLivingType").show()
                }}
              >
                빌라&연립
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: "단독주택",
                  })
                  $("#selectedLivingType").show()
                }}
              >
                단독주택
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: "사무공간",
                  })
                  $("#selectedLivingType").show()
                }}
              >
                사무공간
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: "상업공간",
                  })
                  $("#selectedLivingType").show()
                }}
              >
                상업공간
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    livingType: "기타",
                  })
                  $("#selectedLivingType").show()
                }}
              >
                기타
              </Detail>
            </div>
          </LivingTypeBox>
        </CategoryElement>
        <CategoryElement style={{ width: 70 }}>
          <Select onMouseOver={showFlatArea} onMouseLeave={hideFlatArea}>
            평수
            <img
              alt="arrow"
              src={require("../../../img/ExpandMoreArrow.png")}
            />
          </Select>
          <FlatAreaBox
            id="flatarea"
            onMouseOver={showFlatArea}
            onMouseLeave={hideFlatArea}
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
                    <Flat
                      onClick={() => {
                        setSelectedCategoryList({
                          ...selectedCategoryList,
                          flatArea: "1-9평",
                        })
                        setFlatText("1-9평")
                        $("#customRange1").val("9")
                        $("#selectedFlatArea").show()
                      }}
                    >
                      1-9평
                    </Flat>
                    <Flat
                      onClick={() => {
                        setSelectedCategoryList({
                          ...selectedCategoryList,
                          flatArea: "10평대",
                        })
                        setFlatText("10평대")
                        $("#customRange1").val("19")
                        $("#selectedFlatArea").show()
                      }}
                    >
                      10평대
                    </Flat>
                    <Flat
                      onClick={() => {
                        setSelectedCategoryList({
                          ...selectedCategoryList,
                          flatArea: "20평대",
                        })
                        setFlatText("20평대")
                        $("#customRange1").val("29")
                        $("#selectedFlatArea").show()
                      }}
                    >
                      20평대
                    </Flat>
                    <Flat
                      onClick={() => {
                        setSelectedCategoryList({
                          ...selectedCategoryList,
                          flatArea: "30평대",
                        })
                        setFlatText("30평대")
                        $("#customRange1").val("39")
                        $("#selectedFlatArea").show()
                      }}
                    >
                      30평대
                    </Flat>
                  </FlatContainer>
                  <FlatContainer>
                    <Flat
                      onClick={() => {
                        setSelectedCategoryList({
                          ...selectedCategoryList,
                          flatArea: "40평대",
                        })
                        setFlatText("40평대")
                        $("#customRange1").val("49")
                        $("#selectedFlatArea").show()
                      }}
                    >
                      40평대
                    </Flat>
                    <Flat
                      onClick={() => {
                        setSelectedCategoryList({
                          ...selectedCategoryList,
                          flatArea: "50평대",
                        })
                        setFlatText("50평대")
                        $("#customRange1").val("59")
                        $("#selectedFlatArea").show()
                      }}
                    >
                      50평대
                    </Flat>
                    <Flat
                      onClick={() => {
                        setSelectedCategoryList({
                          ...selectedCategoryList,
                          flatArea: "60평대",
                        })
                        setFlatText("60평대")
                        $("#customRange1").val("69")
                        $("#selectedFlatArea").show()
                      }}
                    >
                      60평대
                    </Flat>
                    <Flat
                      onClick={() => {
                        setSelectedCategoryList({
                          ...selectedCategoryList,
                          flatArea: "70평 이상",
                        })
                        setFlatText("70평 이상")
                        $("#customRange1").val("79")
                        $("#selectedFlatArea").show()
                      }}
                    >
                      70평 이상
                    </Flat>
                  </FlatContainer>
                </div>
              </div>
            </div>
          </FlatAreaBox>
        </CategoryElement>
        <CategoryElement style={{ width: 70 }}>
          <Select onMouseOver={showBudget} onMouseLeave={hideBudget}>
            예산
            <img
              alt="arrow"
              src={require("../../../img/ExpandMoreArrow.png")}
            />
          </Select>
          <BudgetBox
            id="budget"
            onMouseOver={showBudget}
            onMouseLeave={hideBudget}
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
                      <Price
                        onClick={() => {
                          setSelectedCategoryList({
                            ...selectedCategoryList,
                            budget: "1백만원 미만",
                          })
                          $("#selectedBudget").show()
                        }}
                      >
                        1백만원 미만
                      </Price>
                      <Price
                        onClick={() => {
                          setSelectedCategoryList({
                            ...selectedCategoryList,
                            budget: "1백만원대",
                          })
                          $("#selectedBudget").show()
                        }}
                      >
                        1백만원대
                      </Price>
                      <Price
                        onClick={() => {
                          setSelectedCategoryList({
                            ...selectedCategoryList,
                            budget: "2백만원대",
                          })
                          $("#selectedBudget").show()
                        }}
                      >
                        2백만원대
                      </Price>
                      <Price
                        onClick={() => {
                          setSelectedCategoryList({
                            ...selectedCategoryList,
                            budget: "3백만원대",
                          })
                          $("#selectedBudget").show()
                        }}
                      >
                        3백만원대
                      </Price>
                    </PriceContainer>
                    <PriceContainer>
                      <Price
                        onClick={() => {
                          setSelectedCategoryList({
                            ...selectedCategoryList,
                            budget: "4백만원대",
                          })
                          $("#selectedBudget").show()
                        }}
                      >
                        4백만원대
                      </Price>
                      <Price
                        onClick={() => {
                          setSelectedCategoryList({
                            ...selectedCategoryList,
                            budget: "5백만원대",
                          })
                          $("#selectedBudget").show()
                        }}
                      >
                        5백만원대
                      </Price>
                      <Price
                        onClick={() => {
                          setSelectedCategoryList({
                            ...selectedCategoryList,
                            budget: "1천만원대",
                          })
                          $("#selectedBudget").show()
                        }}
                      >
                        1천만원대
                      </Price>
                      <Price
                        onClick={() => {
                          setSelectedCategoryList({
                            ...selectedCategoryList,
                            budget: "2천만원대",
                          })
                          $("#selectedBudget").show()
                        }}
                      >
                        2천만원대
                      </Price>
                    </PriceContainer>
                    <PriceContainer>
                      <Price
                        onClick={() => {
                          setSelectedCategoryList({
                            ...selectedCategoryList,
                            budget: "3천만원대",
                          })
                          $("#selectedBudget").show()
                        }}
                      >
                        3천만원대
                      </Price>
                      <Price
                        onClick={() => {
                          setSelectedCategoryList({
                            ...selectedCategoryList,
                            budget: "4천만원 이상",
                          })
                          $("#selectedBudget").show()
                        }}
                      >
                        4천만원 이상
                      </Price>
                    </PriceContainer>
                  </div>
                </div>
              </div>
            </div>
          </BudgetBox>
        </CategoryElement>
        <CategoryElement>
          <Select onMouseOver={showFamily} onMouseLeave={hideFamily}>
            가족형태
            <img
              alt="arrow"
              src={require("../../../img/ExpandMoreArrow.png")}
            />
          </Select>
          <FamilyBox
            id="family"
            onMouseOver={showFamily}
            onMouseLeave={hideFamily}
          >
            <div style={{ overflow: "auto" }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    family: "싱글라이프",
                  })
                  $("#selectedFamily").show()
                }}
              >
                싱글라이프
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    family: "신혼 부부",
                  })
                  $("#selectedFamily").show()
                }}
              >
                신혼 부부
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    family: "아기가 있는 집",
                  })
                  $("#selectedFamily").show()
                }}
              >
                아기가 있는 집
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    family: "취학 자녀가 있는 집",
                  })
                  $("#selectedFamily").show()
                }}
              >
                취학 자녀가 있는 집
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    family: "부모님과 함께 사는 집",
                  })
                  $("#selectedFamily").show()
                }}
              >
                부모님과 함께 사는 집
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    family: "기타",
                  })
                  $("#selectedFamily").show()
                }}
              >
                기타
              </Detail>
            </div>
          </FamilyBox>
        </CategoryElement>
        <CategoryElement style={{ width: 85 }}>
          <Select onMouseOver={showStyle} onMouseLeave={hideStyle}>
            스타일
            <img
              alt="arrow"
              src={require("../../../img/ExpandMoreArrow.png")}
            />
          </Select>
          <StyleBox id="style" onMouseOver={showStyle} onMouseLeave={hideStyle}>
            <div style={{ overflow: "visible auto" }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: "모던",
                  })
                  $("#selectedStyle").show()
                }}
              >
                모던
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: "미니멀&심플",
                  })
                  $("#selectedStyle").show()
                }}
              >
                미니멀&심플
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: "내추럴",
                  })
                  $("#selectedStyle").show()
                }}
              >
                내추럴
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: "북유럽",
                  })
                  $("#selectedStyle").show()
                }}
              >
                북유럽
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: "빈티지&레트로",
                  })
                  $("#selectedStyle").show()
                }}
              >
                빈티지&레트로
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: "클래식&앤틱",
                  })
                  $("#selectedStyle").show()
                }}
              >
                클래식&앤틱
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: "프렌치&프로방스",
                  })
                  $("#selectedStyle").show()
                }}
              >
                프렌치&프로방스
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: "러블리&로맨틱",
                  })
                  $("#selectedStyle").show()
                }}
              >
                러블리&로맨틱
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: "인더스트리얼",
                  })
                  $("#selectedStyle").show()
                }}
              >
                인더스트리얼
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: "한국&아시아",
                  })
                  $("#selectedStyle").show()
                }}
              >
                한국&아시아
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    style: "유니크&믹스매치",
                  })
                  $("#selectedStyle").show()
                }}
              >
                유니크&믹스매치
              </Detail>
            </div>
          </StyleBox>
        </CategoryElement>
        <CategoryElement style={{ width: 70 }}>
          <Select onMouseOver={showColor} onMouseLeave={hideColor}>
            컬러
            <img
              alt="arrow"
              src={require("../../../img/ExpandMoreArrow.png")}
            />
          </Select>
          <ColorBox id="color" onMouseOver={showColor} onMouseLeave={hideColor}>
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
        <CategoryElement>
          <Select
            onMouseOver={showConstruction}
            onMouseLeave={hideConstruction}
          >
            세부공사
            <img
              alt="arrow"
              src={require("../../../img/ExpandMoreArrow.png")}
            />
          </Select>
          <ConstructionBox
            id="construction"
            onMouseOver={showConstruction}
            onMouseLeave={hideConstruction}
          >
            <div style={{ overflow: "visible auto" }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: "헤링본 마루",
                  })
                  $("#selectedConstruction").show()
                }}
              >
                헤링본 마루
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: "대리석 바닥",
                  })
                  $("#selectedConstruction").show()
                }}
              >
                대리석 바닥
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: "원목마루",
                  })
                  $("#selectedConstruction").show()
                }}
              >
                원목마루
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: "포세린타일",
                  })
                  $("#selectedConstruction").show()
                }}
              >
                포세린타일
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: "폴리싱타일",
                  })
                  $("#selectedConstruction").show()
                }}
              >
                폴리싱타일
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: "주방리모델링",
                  })
                  $("#selectedConstruction").show()
                }}
              >
                주방리모델링
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: "조명시공",
                  })
                  $("#selectedConstruction").show()
                }}
              >
                조명시공
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: "폴딩도어",
                  })
                  $("#selectedConstruction").show()
                }}
              >
                폴딩도어
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: "중문",
                  })
                  $("#selectedConstruction").show()
                }}
              >
                중문
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: "가벽&파티션",
                  })
                  $("#selectedConstruction").show()
                }}
              >
                가벽&파티션
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: "슬라이딩도어",
                  })
                  $("#selectedConstruction").show()
                }}
              >
                슬라이딩도어
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: "아트월",
                  })
                  $("#selectedConstruction").show()
                }}
              >
                아트월
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    construction: "발코니확장",
                  })
                  $("#selectedConstruction").show()
                }}
              >
                발코니확장
              </Detail>
            </div>
          </ConstructionBox>
        </CategoryElement>
        <CategoryElement style={{ width: 70 }}>
          <Select onMouseOver={showField} onMouseLeave={hideField}>
            분야
            <img
              alt="arrow"
              src={require("../../../img/ExpandMoreArrow.png")}
            />
          </Select>
          <FieldBox id="field" onMouseOver={showField} onMouseLeave={hideField}>
            <div style={{ overflow: "auto" }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    field: "리모델링",
                  })
                  $("#selectedField").show()
                }}
              >
                리모델링
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    field: "홈스타일링",
                  })
                  $("#selectedField").show()
                }}
              >
                홈스타일링
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    field: "부분공사",
                  })
                  $("#selectedField").show()
                }}
              >
                부분공사
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    field: "건축",
                  })
                  $("#selectedField").show()
                }}
              >
                건축
              </Detail>
            </div>
          </FieldBox>
        </CategoryElement>
        <CategoryElement style={{ width: 85 }}>
          <Select onMouseOver={showWorker} onMouseLeave={hideWorker}>
            작업자
            <img
              alt="arrow"
              src={require("../../../img/ExpandMoreArrow.png")}
            />
          </Select>
          <WorkerBox
            id="worker"
            onMouseOver={showWorker}
            onMouseLeave={hideWorker}
          >
            <div style={{ overflow: "auto" }}>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    worker: "셀프·DIY",
                  })
                  $("#selectedWorker").show()
                }}
                style={{
                  width: 400,
                  height: 80,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>셀프·DIY</div>
                <div style={{ fontSize: 12, color: "#777777" }}>
                  인테리어 전과정을 직접 하는 것
                </div>
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    worker: "반셀프",
                  })
                  $("#selectedWorker").show()
                }}
                style={{
                  width: 400,
                  height: 80,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>반셀프</div>
                <div style={{ fontSize: 12, color: "#777777" }}>
                  디자인, 공정순서 등 시공계획은 본인이 직접하고, 실제 공사는 각
                  분야 전문가를 찾아 맡기는 것.
                </div>
              </Detail>
              <Detail
                onClick={() => {
                  setSelectedCategoryList({
                    ...selectedCategoryList,
                    worker: "전문가",
                  })
                  $("#selectedWorker").show()
                }}
                style={{
                  width: 400,
                  height: 80,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>전문가</div>
                <div style={{ fontSize: 12, color: "#777777" }}>
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
            $("#selectedSort").hide()
            setSelectedCategoryList({ ...selectedCategoryList, sort: "" })
          }}
        >
          {selectedCategoryList.sort}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedLivingType"
          onClick={() => {
            $("#selectedLivingType").hide()
            setSelectedCategoryList({ ...selectedCategoryList, livingType: "" })
          }}
        >
          {selectedCategoryList.livingType}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedFlatArea"
          onClick={() => {
            $("#selectedFlatArea").hide()
            setSelectedCategoryList({ ...selectedCategoryList, flatArea: "" })
          }}
        >
          {selectedCategoryList.flatArea}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedBudget"
          onClick={() => {
            $("#selectedBudget").hide()
            setSelectedCategoryList({ ...selectedCategoryList, budget: "" })
          }}
        >
          {selectedCategoryList.budget}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedFamily"
          onClick={() => {
            $("#selectedFamily").hide()
            setSelectedCategoryList({ ...selectedCategoryList, family: "" })
          }}
        >
          {selectedCategoryList.family}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedStyle"
          onClick={() => {
            $("#selectedStyle").hide()
            setSelectedCategoryList({ ...selectedCategoryList, style: "" })
          }}
        >
          {selectedCategoryList.style}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedAllColor"
          onClick={() => {
            $("#selectedAllColor").hide()
            setSelectedCategoryList({ ...selectedCategoryList, allColor: "" })
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 20,
              backgroundColor: "pink",
            }}
          ></div>
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedWallColor"
          onClick={() => {
            $("#selectedWallColor").hide()
            setSelectedCategoryList({ ...selectedCategoryList, wallColor: "" })
          }}
        >
          {selectedCategoryList.wallColor}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedFloorColor"
          onClick={() => {
            $("#selectedFloorColor").hide()
            setSelectedCategoryList({ ...selectedCategoryList, floorColor: "" })
          }}
        >
          {selectedCategoryList.floorColor}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedConstruction"
          onClick={() => {
            $("#selectedConstruction").hide()
            setSelectedCategoryList({
              ...selectedCategoryList,
              construction: "",
            })
          }}
        >
          {selectedCategoryList.construction}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedField"
          onClick={() => {
            $("#selectedField").hide()
            setSelectedCategoryList({ ...selectedCategoryList, field: "" })
          }}
        >
          {selectedCategoryList.field}
        </SelectedCategoryElement>
        <SelectedCategoryElement
          id="selectedWorker"
          onClick={() => {
            $("#selectedWorker").hide()
            setSelectedCategoryList({ ...selectedCategoryList, worker: "" })
          }}
        >
          {selectedCategoryList.worker}
        </SelectedCategoryElement>
        <ResetButton id="reset" onClick={categoryListAllhide}>
          초기화
        </ResetButton>
      </SelectedCategoryContainer>
    </Fragment>
  )
}

const CategoryContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  padding: 12px;
`
const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eeeeee;
  height: 40px;
  border: none;
  color: #777777;
  font-weight: bold;
  font-size: 16px;
  padding: 0px 8px;
  border-radius: 4px;
  cursor: pointer;
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
  cursor: pointer;
  background-color: white;
`
const LivingTypeBox = styled.div`
  width: 200px;
  height: 349px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
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
const FamilyBox = styled.div`
  width: 200px;
  height: 299px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
`
const StyleBox = styled.div`
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
  cursor: pointer;
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
const ConstructionBox = styled.div`
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
`
const FieldBox = styled.div`
  width: 200px;
  height: 199px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 8px #aaaaaa;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
`
const WorkerBox = styled.div`
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
