import { Component, Input, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
import { navBarData } from './navData';
import { navBarData1 } from './navData2';
import { navBarData2 } from './navData3'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  
  navData = navBarData;
  navData2 = navBarData1;
  navData3 = navBarData2;


  private _cart: Cart = {items: []};
  itemsQuantity = 0;
  constructor(private cartService: CartService) {}

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
    .map((item) => item.quantity)
    .reduce((prev, current) => prev + current, 0);
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
   this.cartService.clearCart(); 
  }

}
