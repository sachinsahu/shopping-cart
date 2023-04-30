import { Store, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/model/Product';
import * as productActions from './product-details.actions';

export interface ProductDetailsState {
  id?:any,
  products: Product[];
}

export const initialState: ProductDetailsState = {
  products: [],
};

export const productDetailsReducer = createReducer(
  initialState,
  on(productActions.getProductDetails, (state, action: any) => {
    return {
      ...state,
      products: action.products,
    };
  }),
  on(productActions.getProductDetailsSuccess, (state, action: ProductDetailsState) => {
    return {
      ...state,
      products: action.products.filter(p => p.id == action.id),
    };
  })
);
