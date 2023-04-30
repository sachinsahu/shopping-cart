import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, concatMap } from 'rxjs/operators';
import * as CategoryActions from '../store/category.actions';
import { ApiService } from 'src/app/service/api.service';
import { Product } from 'src/app/model/Product';

@Injectable()
export class CategoryEffects {
  categories: Product[] = [
    {
      category: 'laptops',
      title:'Laptops',
      thumbnail:'https://img.freepik.com/free-psd/high-view-mock-up-home-groceries_23-2148493401.jpg?w=740&t=st=1679628279~exp=1679628879~hmac=c00f9d8b36a01d1a008c2548e0f7d7db69323dd52cd9358fd0a049910866070f'
    },
    {
      category: 'smartphones',
      title:'Smart Phones',
      thumbnail:'https://img.freepik.com/free-vector/online-shopping-concept-landing-page_23-2148253518.jpg?w=900&t=st=1679628321~exp=1679628921~hmac=edbf379cad3caee2669ea63d74f2fa7105ab8944b04b4cd835f12ee079b48a8a'
    },
    {
      category: 'fragrances',
      title:'Fragrances',
      thumbnail:'https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-11069.jpg?w=900&t=st=1679628347~exp=1679628947~hmac=f2001292cc02bdfddc2e243a9ed36ddb3ca1343ace2f7399be5f53e301b481b3'
    },
    {
      category: 'skincare',
      title:'Skincare',
      thumbnail:'https://as1.ftcdn.net/v2/jpg/03/78/93/54/1000_F_378935476_EKX0SCIKSjZ6aegFeMGRMyc8xsYvXlHc.jpg'
    },
    {
      category: 'groceries',
      title:'Groceries',
      thumbnail:'https://as1.ftcdn.net/v2/jpg/02/41/43/18/1000_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg'
    },
    {
      category: 'home-decoration',
      title:'Home Decoration',
      thumbnail:'https://as2.ftcdn.net/v2/jpg/05/40/93/89/1000_F_540938943_2300dCGBVdExfLPqUuU3CZ3tlgot91bS.jpg'
    },
  ];

  getCategories$ = createEffect(() =>
    this.action$.pipe(
      ofType(CategoryActions.getProductCategories),
      concatMap((action) =>
        this.apiService.productCategories().pipe(
          map((response) => {
            return CategoryActions.getProductCategoriesSuccess({
              products: this.categories
            });
          }),
          catchError((error: any) =>
            of(CategoryActions.getProductCategoriesFailure(error))
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
