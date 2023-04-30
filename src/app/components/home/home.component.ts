import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';
import * as CategoryActions from '../category/store/category.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public productCategories: Observable<{ products: Product[] }>;
  constructor(public store: Store<{ categories: { products: Product[] } }>) {
    
  }
  ngOnInit(): void {
    this.productCategories = this.store.select('categories');
    
  }
}
