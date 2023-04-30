import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { Store } from '@ngrx/store';
import * as productDetailsAction from './store/product-details.actions';
import * as cartActions from '../cart/store/cart.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public productDetails$: Observable<{ products: Product[] }>;
  public disabled:boolean = false;
  constructor(
    private router:Router,
    private store: Store<{ productDetails: { products: Product[] } }>
  ) {}
  ngOnInit() {
    this.store.dispatch(productDetailsAction.getProductDetails());
    this.productDetails$ = this.store.select('productDetails');
    
  }

  public addToCart(product: Product) {
    this.store.dispatch(cartActions.addNewCartItem(product));
    this.disabled = true;
  }
}
