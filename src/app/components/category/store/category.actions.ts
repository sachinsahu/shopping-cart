import { Action, createAction, props } from '@ngrx/store';
import { Product } from 'src/app/model/Product';

export const PRODUCT_CATEGORIES = '[Categories] Get Product Categories';
export const PRODUCT_CATEGORIES_SUCCESS = '[Categories] Product Categories Success';
export const PRODUCT_CATEGORIES_FAILURE = '[Categories] Product Categories Failure';


export const getProductCategories = createAction(
  PRODUCT_CATEGORIES
);

export const getProductCategoriesSuccess = createAction(
  PRODUCT_CATEGORIES_SUCCESS,
  props<{products:Product[]}>()
);

export const getProductCategoriesFailure = createAction(
  PRODUCT_CATEGORIES_FAILURE,
  props<{any:any}>()
);
