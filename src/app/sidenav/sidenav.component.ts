import { Cart } from './../cart/cart';
import { CartsService } from './../carts.service';
import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { title } from 'process';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  cartTitle = '';

  carts: Cart[];

  constructor(private cartService: CartsService) {
    this.carts = this.cartService.carts;
  }

  handleClick(value: string) {
    this.cartTitle = value;
  }
}
