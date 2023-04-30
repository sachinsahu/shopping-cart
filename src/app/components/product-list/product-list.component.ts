import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { Store } from '@ngrx/store';
import * as productListAction from './store/product.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public productList$: Observable<{ products: Product[] }>;

  constructor(
    private store: Store<{ productList: { products: Product[] } }>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(productListAction.getProductList());
    this.productList$ = this.store.select('productList');

   
  }
 
}
