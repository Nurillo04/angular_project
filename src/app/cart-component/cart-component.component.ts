import { Component, OnChanges, SimpleChanges, inject } from '@angular/core';
import { Cart } from '../cart/cart';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, distinctUntilChanged, map, shareReplay, tap } from 'rxjs';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrl: './cart-component.component.scss',
})
export class CartComponentComponent implements OnChanges {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  cartTitle = '';

  hoveredCart: string = ' ';
  carts: Cart[];

  constructor(private cartService: CartsService) {
    this.carts = this.cartService.carts;
    this.cartService.hoveredCart$.next('Next');
    this.cartService.hoveredCart$
      .pipe(
        distinctUntilChanged(),
        map((value) => {
          return 'TITLE ' + value;
        }),
        tap((value) => {
          console.log(value);
        })
      )
      .subscribe((value) => {
        this.hoveredCart = value;
      });
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  handleClick(value: string) {
    this.cartTitle = value;
  }
}
