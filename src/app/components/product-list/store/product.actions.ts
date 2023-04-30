import { Action, createAction, props } from '@ngrx/store';
import { ProductState } from './product.reducer';
const PRODUCT_LIST = '[Products] product list';
const PRODUCT_LIST_SUCCESS = '[Products] product list success';
const PRODUCT_LIST_ERROR = '[Products] product list error';


export const getProductList = createAction(
  PRODUCT_LIST
  );

export const getProductListSuccess = createAction(
  PRODUCT_LIST_SUCCESS,
  props<ProductState>()
);
export const getProductListError = createAction(
  PRODUCT_LIST_ERROR,
  props<any>()
);
