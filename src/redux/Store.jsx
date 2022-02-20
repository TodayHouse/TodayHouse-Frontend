import {configureStore,createSlice,combineReducers} from '@reduxjs/toolkit'
import {product,navBar,signup,cart} from './reducer'

const rootReducer = combineReducers({navbar: navBar.reducer, product:product.reducer, signup:signup.reducer, cart:cart.reducer})
const store = configureStore({reducer: rootReducer}) //redux toolkit 사용가능



export default store;