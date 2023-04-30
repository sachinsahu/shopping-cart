import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as cartActions from './store/cart.actions';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { faTrashCan , faShareNodes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public productList$: Observable<{ items: Product[] }>;
  public itemCount: number;
  public totalPrice: any;
  faRemove = faTrashCan;
  faShareNodes = faShareNodes;

  constructor(private store: Store<{ items: { items: Product[] } }>) {}

  ngOnInit(): void {
    this.store.dispatch(cartActions.loadCartItemsSuccess());
    this.productList$ = this.store.select('items');

    this.productList$.subscribe((res) => {
      setTimeout(() => {
        this.itemCount = res.items.length;
        this.calculatePrice(res.items);
      }, 1000);
    });
  }

  calculatePrice(items: Product[]) {
    const calculateTotal = items.reduce((prevVal, currVal) => {
      return prevVal + currVal.price;
    }, 0);

    this.totalPrice = calculateTotal;
  }

  deleteItem(item: Product) {
    this.store.dispatch(cartActions.removeCartItem(item));
  }
  deleteAllItems(){
    this.store.dispatch(cartActions.removeAllItems({flag:true}));
  }
}
