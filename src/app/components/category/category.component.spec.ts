import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore,MockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { CategoryComponent } from './category.component';
import { initialState } from '../category/store/category.reducer';
import { RouterTestingModule } from "@angular/router/testing";
import { Product } from 'src/app/model/Product';


describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let store: MockStore<{ categories: { products: Product[] } }>;
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
      imports: [StoreModule.forRoot(), RouterTestingModule],
      declarations: [CategoryComponent],
      providers: [provideMockStore({initialState})],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector('categories', data);
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
