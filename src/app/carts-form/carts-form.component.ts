import { Component, ElementRef } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-carts-form',
  templateUrl: './carts-form.component.html',
  styleUrl: './carts-form.component.scss',
})
export class CartsFormComponent {
  /**
   *
   * @param cartService
   */
  constructor(private cartService: CartsService) {}

  /**
   *
   * @param title
   * @param desc
   */
  addCart(title: string, description: string) {
    if (title && description && title.trim() && description.trim()) {
      this.cartService.addCart({ title, description });
    } else {
      alert('Ma`lumot kiriting');
    }
  }
}
