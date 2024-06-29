import axios from "axios";
import {
    CLEAR_CART_PRODUCTS_FAILURE,
    CLEAR_CART_PRODUCTS_REQUEST,
    CLEAR_CART_PRODUCTS_SUCCESS,
    DELETE_CART_PRODUCTS_FAILURE,
    DELETE_CART_PRODUCTS_REQUEST,
    DELETE_CART_PRODUCTS_SUCCESS,
    GET_CART_PRODUCTS_FAILURE,
    GET_CART_PRODUCTS_REQUEST,
    GET_CART_PRODUCTS_SUCCESS,
    POST_CART_PRODUCTS_FAILURE,
    POST_CART_PRODUCTS_REQUEST,
    POST_CART_PRODUCTS_SUCCESS,
    UPDATE_CART_ITEMS_PRODUCTS_FAILURE,
    UPDATE_CART_ITEMS_PRODUCTS_REQUEST,
    UPDATE_CART_ITEMS_PRODUCTS_SUCCESS,
} from "./actionTypes";

// post
export const postCartProductsRequestAction = () => ({ type: POST_CART_PRODUCTS_REQUEST });
export const postCartProductsSuccessAction = payload => ({ type: POST_CART_PRODUCTS_SUCCESS, payload });
export const postCartProductsFailureAction = () => ({ type: POST_CART_PRODUCTS_FAILURE });

// get
export const getCartProductsRequestAction = () => ({ type: GET_CART_PRODUCTS_REQUEST });
export const getCartProductsSuccessAction = payload => ({ type: GET_CART_PRODUCTS_SUCCESS, payload });
export const getCartProductsFailureAction = () => ({ type: GET_CART_PRODUCTS_FAILURE });

// delete
export const deleteCartProductsRequestAction = () => ({ type: DELETE_CART_PRODUCTS_REQUEST });
export const deleteCartProductsSuccessAction = payload => ({ type: DELETE_CART_PRODUCTS_SUCCESS, payload });
export const deleteCartProductsFailureAction = () => ({ type: DELETE_CART_PRODUCTS_FAILURE });

// delete all
export const clearCartProductsRequestAction = () => ({ type: CLEAR_CART_PRODUCTS_REQUEST });
export const clearCartProductsSuccessAction = () => ({ type: CLEAR_CART_PRODUCTS_SUCCESS });
export const clearCartProductsFailureAction = () => ({ type: CLEAR_CART_PRODUCTS_FAILURE });

// update
export const updateCartItemRequestAction = () => ({ type: UPDATE_CART_ITEMS_PRODUCTS_REQUEST });
export const updateCartItemSuccessAction = payload => ({ type: UPDATE_CART_ITEMS_PRODUCTS_SUCCESS, payload });
export const updateCartItemFailureAction = () => ({ type: UPDATE_CART_ITEMS_PRODUCTS_FAILURE });

// Get Cart products
export const getProducts = () => async dispatch => {
    dispatch(getCartProductsRequestAction());
    try {
        const res = await axios.get(`http://localhost:8080/cart`);
        dispatch(getCartProductsSuccessAction(res.data));
    } catch (err) {
        console.log("something went wrong in getting products:", err);
        dispatch(getCartProductsFailureAction());
    }
};

// Delete Cart
export const deleteProduct = id => async dispatch => {
    dispatch(deleteCartProductsRequestAction());
    try {
        await axios.delete(`http://localhost:8080/cart/${id}`);
        dispatch(deleteCartProductsSuccessAction(id));
    } catch (err) {
        console.log("something went wrong in deleting product:", err);
        dispatch(deleteCartProductsFailureAction());
    }
};

// Clear Cart
export const clearAllProducts = () => async dispatch => {
    dispatch(clearCartProductsRequestAction());
    try {
        const res = await axios.get(`http://localhost:8080/cart`);
        const deleteRequests = res.data.map(item =>
            axios.delete(`http://localhost:8080/cart/${item.id}`)
        );
        await Promise.all(deleteRequests);
        dispatch(clearCartProductsSuccessAction());
    } catch (err) {
        console.log("something went wrong in clearing cart:", err);
        dispatch(clearCartProductsFailureAction());
    }
};

// Add to Cart
export const addToCart = (title, original_price, discounted_price, image_url, getToast) => async dispatch => {
    dispatch(postCartProductsRequestAction());
    try {
        const res = await axios.post(`http://localhost:8080/cart`, {
            title,
            original_price,
            discounted_price,
            image_url,
            items: 1,
        });
        res.data.success
            ? getToast("success", res.data.message)
            : getToast("error", res.data.message);
        dispatch(postCartProductsSuccessAction(res.data.product));
    } catch (err) {
        getToast("error", "something went wrong in adding product to cart");
        dispatch(postCartProductsFailureAction());
    }
};

// Update Cart Item Quantity
export const updateCartItemQuantity = (id, items) => async dispatch => {
    dispatch(updateCartItemRequestAction());
    try {
        const res = await axios.patch(`http://localhost:8080/cart/${id}`, { items });
        dispatch(updateCartItemSuccessAction({ id, items }));
    } catch (err) {
        console.log("something went wrong in updating product quantity:", err);
        dispatch(updateCartItemFailureAction());
    }
};
