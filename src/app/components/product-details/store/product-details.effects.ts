import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, filter } from 'rxjs/operators';
import * as productActions from './product-details.actions';
import { ApiService } from 'src/app/service/api.service';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import {
  RouterNavigatedAction,
  RouterNavigationAction,
} from '@ngrx/router-store/src';

@Injectable()
export class ProductDetailsEffects {
  params: any;
  getProductDetails$ = createEffect(() =>
    this.action$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigationAction) => {
        return r.payload.routerState.url.startsWith('/products');
      }),
      map((r: RouterNavigationAction) => {
        return r.payload.routerState.root.firstChild.firstChild.params['id'];
      }),
      switchMap((id) =>
        this.apiService.productList().pipe(
          map((response) => {
            return productActions.getProductDetailsSuccess({
              id: id,
              products: response.products,
            });
          }),
          catchError((error: any) =>
            of(productActions.getProductDetailsError(error))
          )
        )
      )
    )
  );

  constructor(
    private action$: Actions,
    private http: HttpClient,
    private apiService: ApiService
  ) {}
}
