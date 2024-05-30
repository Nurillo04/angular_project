import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @Input('title') cartTitle!: string;
  @Input('description') cartDesc!: string;
  @Output() myTitleChange = new EventEmitter<string>();
  test = 'Angular';

  testFn() {
    this.myTitleChange.emit(this.cartTitle);
  }
}
