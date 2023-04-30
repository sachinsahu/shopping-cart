import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';
import * as CategoryActions from './store/category.actions';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public productCategories: Observable<{ products: Product[] }>;
  constructor(private store: Store<{ categories: { products: Product[] } }>) {}

  ngOnInit() {
    this.store.dispatch(CategoryActions.getProductCategories());
    this.productCategories = this.store.select('categories');
  }
}
