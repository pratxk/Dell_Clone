import {legacy_createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import { productReducer } from './Product/productReducer';
import { cartReducer } from './Cart/cartReducer';


const rootReducer = combineReducers({
    Product: productReducer,
    Cart: cartReducer
})



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));