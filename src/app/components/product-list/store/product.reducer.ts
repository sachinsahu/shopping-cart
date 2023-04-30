import { Store, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/model/Product';
import * as productActions from './product.actions';

export interface ProductState {
  id?:any,
  products: Product[];
}

export const initialState: ProductState = {
  products: [],
};

export const productReducer = createReducer(
  initialState,
  on(productActions.getProductList, (state, action: any) => {
    return {
      ...state,
      products: action.products,
    };
  }),
  on(productActions.getProductListSuccess, (state, action: ProductState) => {
    return {
      ...state,
      products: action.products.filter(p => p.category === action.id),
    };
  })
);
