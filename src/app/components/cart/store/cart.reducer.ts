import { Store, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/model/Product';
import * as cartActions from './cart.actions';

export interface CartState {
  items: Product[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(cartActions.loadCartItems, (state, action: any) => {
    return {
      ...state,
      items: action.items,
    };
  }),
  on(cartActions.addNewCartItem, (state, action: any) => {
    return {
      ...state,
      items: [...state.items, ...[action]],
    };
  }),
  on(cartActions.removeCartItem, (state, action: Product) => {
    return {
      ...state,
      items: state.items.filter(p => p.id !== action.id)
    };
  }),
  on(cartActions.removeAllItems, (state, action: {flag:boolean}) => {
    return {
      ...state,
      items: []
    };
  }),
  on(cartActions.loadCartItemsSuccess, (state, action: any) => {
    return {
      ...state,
      items: [...state.items]
    };
  })
);
