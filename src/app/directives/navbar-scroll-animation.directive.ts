import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavbarScrollAnimation]'
})
export class NavbarScrollAnimationDirective {

  @HostListener ( 'window:scroll', [] )
    scroll() {
      const rect = this.el.nativeElement.getBoundingClientRect()
      console.log(rect, 1)
  }

  constructor(private el:ElementRef<HTMLElement>) { }

}
