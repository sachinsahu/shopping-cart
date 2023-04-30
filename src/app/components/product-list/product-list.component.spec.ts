import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore,MockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { Product } from 'src/app/model/Product';
import { RouterTestingModule } from "@angular/router/testing";
import { ProductListComponent } from './product-list.component';
import { initialState } from '../product-list/store/product.reducer';


describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: MockStore<{ products: Product[] }>;
  const data = {
    products: [
      {
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/1/1.jpg',
          'https://i.dummyjson.com/data/products/1/2.jpg',
          'https://i.dummyjson.com/data/products/1/3.jpg',
          'https://i.dummyjson.com/data/products/1/4.jpg',
          'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        ],
      },
    ],
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[StoreModule.forRoot(),RouterTestingModule],
      declarations: [ ProductListComponent ],
      providers:[provideMockStore({initialState})]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector('productList', data);

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
