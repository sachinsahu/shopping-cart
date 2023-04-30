import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/model/Product';
import * as categoryActions from '../store/category.actions';


export interface CategoryState {
  products: Product[];
}

export const initialState:CategoryState = {
  products:[]
}

export const categoryReducer = createReducer(
  initialState,
  on(categoryActions.getProductCategories, (state, action:any) => {
    return {
      products: action.products,
    };
  }),
  on(categoryActions.getProductCategoriesSuccess, (state, action:any) => {
    return {
      products: action.products,
    };
  })
);
