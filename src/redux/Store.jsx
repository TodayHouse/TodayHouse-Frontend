import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { product, navBar, signup, mpageBar, cart, story, login } from "./reducer"

const rootReducer = combineReducers({
  navbar: navBar.reducer,
  product: product.reducer,
  signup: signup.reducer,
  mpagebar: mpageBar.reducer,
  cart: cart.reducer,
  story: story.reducer,
  login: login.reducer,
})
const store = configureStore({ reducer: rootReducer }) //redux toolkit 사용가능

export default store
