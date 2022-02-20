import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {product,navBar,signup, mpageBar} from './reducer'

const rootReducer = combineReducers({navbar: navBar.reducer, product:product.reducer, signup:signup.reducer, mpagebar : mpageBar.reducer})
const store = configureStore({reducer: rootReducer}) //redux toolkit 사용가능



export default store;