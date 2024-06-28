import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from './cart';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  // @Input('title') cartTitle!: string;
  // @Input('description') cartDesc!: string;
  @Input('cart') cart!: Cart;
  @Input('index') index!: number;
  @Output()
  myTitleChange = new EventEmitter<string>();
  test = 'Angular';

  constructor(private cartsService: CartsService) {}

  deleteCart(index: number) {
    this.cartsService.deleteCart(index);
  }

  testFn() {
    this.myTitleChange.emit(this.cart.title);
  }
}
