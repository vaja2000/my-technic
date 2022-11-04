import { Directive } from '@angular/core';
import { HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective {

  constructor() { }
  @Input() display = 'none'

  @HostListener ('mouseenter') onMouseEnter() {
    this.display = 'flex'
  }
}
