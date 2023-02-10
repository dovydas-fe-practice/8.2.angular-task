import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appHero]',
})
export class HeroDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = '#c4c3c3'

  @HostListener('mouseover', ['$event.target'])
  onMouseOver() {
    this.backgroundColor = '#2b76f6'
  }

  @HostListener('mouseout', ['$event.target'])
  onMouseOut() {
    this.backgroundColor = '#c4c3c3'
  }
}
