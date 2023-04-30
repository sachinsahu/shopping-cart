import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public baseURL = 'https://dummyjson.com/';
  
  constructor(private http: HttpClient) {}

  public productCategories() {
    return this.http.get<{products:Product[]}>(this.baseURL + 'products/1');
  }

  public productList() {
    return this.http.get<{products:Product[]}>(this.baseURL + 'products');
  }

}
