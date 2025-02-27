import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { StoreService } from '../../services/store.service';

const ROWS_HEIGHT: {[id:number]: number} = { 1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort = 'desc';
  count = '12';
  productsSubscription: Subscription | undefined;
  
  constructor(private cartService: CartService,
              private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(): void {
    this.productsSubscription = this.storeService.getAllProducts(this.count, this.sort, this.category)
    .subscribe((_products) => {
      this.products = _products;
    });
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum; 
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
    product: product.imageURL,
    title: product.title,
    price: product.price,
    quantity: 1,
    id: product.id
    });
  }

  onItemsCountChange(newCount: number): void {
    this.count = newCount.toString();
    this.getProducts();
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts;
  }

  ngOnDestroy(): void {
    if(this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

}


