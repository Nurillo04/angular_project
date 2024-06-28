import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartsService } from '../carts.service';
import { Cart } from '../cart/cart';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrl: './cart-display.component.scss',
})
export class CartDisplayComponent implements OnInit {
  cartId!: number;
  currentCart!: Cart;
  carts!: Cart[];
  constructor(
    private route: ActivatedRoute,
    private cartService: CartsService
  ) {}

  ngOnInit(): void {
    this.cartService.carts$

      .pipe(
        switchMap((carts) => {
          return this.route.params.pipe(
            map((param) => {
              this.cartId = +param['id'];
              return carts[this.cartId];
            })
          );
        })
      )

      .subscribe((currentCart) => {
        this.currentCart = currentCart;
      });
  }
}
