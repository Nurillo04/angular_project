import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { time } from 'node:console';

@Directive({
  selector: '[appIf]',
})
export class IfDirective {
  @Input('appIf') set appIf(condition: boolean) {
    if (condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private vcRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
}
