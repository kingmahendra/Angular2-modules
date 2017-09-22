import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostBinding("style.background-color") backgroundColor: string;
  constructor() {
    this.backgroundColor = 'gold' ;
   }

}
