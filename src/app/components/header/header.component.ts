import { Component } from '@angular/core';
import { faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faUser = faUser;
  faShoppingBag = faShoppingBag;
}
