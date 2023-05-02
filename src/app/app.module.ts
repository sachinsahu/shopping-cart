import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';

import { ApiService } from './service/api.service';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { categoryReducer } from './components/category/store/category.reducer';
import { CategoryEffects } from './components/category/store/category.effects';
import { productReducer } from './components/product-list/store/product.reducer';
import { ProductListEffects } from './components/product-list/store/product.effects';
import { ProductDetailsEffects } from './components/product-details/store/product-details.effects';
import { productDetailsReducer } from './components/product-details/store/product-details.reducer';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { cartReducer } from './components/cart/store/cart.reducer';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CartComponent,
    CategoryComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    EffectsModule.forRoot([
      CategoryEffects,
      ProductListEffects,
      ProductDetailsEffects,
    ]),
    StoreModule.forRoot({
      router: routerReducer,
      categories: categoryReducer,
      productList: productReducer,
      productDetails: productDetailsReducer,
      items:cartReducer
    }),
    StoreRouterConnectingModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
