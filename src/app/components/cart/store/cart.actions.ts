import { createAction, props } from '@ngrx/store';
import { Product, Products } from 'src/app/model/Product';

const LOAD_CART_ITEM = '[Load cart] Load cart items';
const ADD_NEW_CART_ITEM = '[New cart item] Add new cart item';
const REMOVE_CART_ITEM = '[Remove cart item] Remove cart item';
const EMPTY_CART_ITEM = '[Empty cart item] Empty cart item';
const LOAD_CART_ITEM_SUCCESS = '[Load cart] Load cart items success';
const LOAD_CART_ITEM_ERROR = '[Load cart] Load cart items error';

export const loadCartItems = createAction(LOAD_CART_ITEM);

export const addNewCartItem = createAction(
  ADD_NEW_CART_ITEM,
  props<Product>()
);
export const removeAllItems = createAction(
  EMPTY_CART_ITEM,
  props<{flag:boolean}>()
);
export const removeCartItem = createAction(
  REMOVE_CART_ITEM,
  props<Product>()
);

export const loadCartItemsSuccess = createAction(
  LOAD_CART_ITEM_SUCCESS
);

export const loadCartItemsError = createAction(
  LOAD_CART_ITEM_ERROR,
  props<any>()
);
