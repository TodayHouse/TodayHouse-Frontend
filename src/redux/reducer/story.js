import { createSlice } from "@reduxjs/toolkit"

const storyReducer = createSlice({
  name: "storyReducer",
  initialState: {
    selectedCategoryList: {
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
    },
  },
  reducers: {
    changeCategoryList: (state, action) => {
      state.selectedCategoryList = {
        ...state.selectedCategoryList,
        [action.payload.name]: action.payload.data,
      }
    },
  },
})

export const { changeCategoryList } = storyReducer.actions
export default storyReducer
