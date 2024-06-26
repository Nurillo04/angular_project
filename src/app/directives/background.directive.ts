import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { CartsService } from '../carts.service';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  @Input('appBackground') hoveredCart!: string;
  @HostListener('mouseover')
  onHover() {
    this.elementRef.nativeElement.style.boxShadow =
      '0px 7px 15px #0a10143d, 0px 2px 7px #0a10141f';
  }

  @HostListener('mouseleave') onLeave() {
    this.cartService.hoveredCart$.next(this.hoveredCart);

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow',
      '0px 2px 2px #0a10143d, 0px 0px 2px #0a10141f'
    );
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private cartService: CartsService
  ) {}
}
