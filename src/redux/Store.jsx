import {configureStore,createSlice,combineReducers} from '@reduxjs/toolkit'
import {product} from './reducer'
import {navBar} from './reducer'

const rootReducer = combineReducers({navbar: navBar.reducer, product:product.reducer})
const store = configureStore({reducer: rootReducer}) //redux toolkit 사용가능

export default store;