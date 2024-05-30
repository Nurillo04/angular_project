import { Injectable } from '@angular/core';
import { Cart } from './cart/cart';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  carts: Cart[] = [
    {
      title: 'What is Angular ?',
      description: 'Get a high-level overview of the Angular platform',
    },
    {
      title: 'Getting started ',
      description:
        'Examine and work  with  a small ready-made Angular app, without any setup',
    },
    {
      title: 'Learn and Explore ',
      description:
        'Learn about the foundamental design  concepts and architecture of Angular  apps',
    },
    {
      title: 'Setup environment',
      description:
        'Set up your  local environment for development with the Angular CLi',
    },
  ];

  constructor() {}

  addCart(cart: Cart) {
    this.carts.push(cart);
  }
}