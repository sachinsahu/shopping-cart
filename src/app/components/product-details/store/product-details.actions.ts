import { Action, createAction, props } from '@ngrx/store';
import { ProductDetailsState } from '../store/product-details.reducer';

const PRODUCT_DETAILS = '[Products] product details';
const PRODUCT_DETAILS_SUCCESS = '[Products] product details success';
const PRODUCT_DETAILS_ERROR = '[Products] product details error';

export const getProductDetails = createAction(PRODUCT_DETAILS);

export const getProductDetailsSuccess = createAction(
  PRODUCT_DETAILS_SUCCESS,
  props<ProductDetailsState>()
);
export const getProductDetailsError = createAction(
  PRODUCT_DETAILS_ERROR,
  props<any>()
);
