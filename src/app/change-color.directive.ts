
import { Directive , ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  @Input() appChangeColor = 0
  constructor(private element: ElementRef) {
     console.log(element.nativeElement)
  }
  @HostListener('mouseenter', ['$event']) onMouseEnter() {
         this.element.nativeElement.style.backgroundColor = "red"
         console.log(this.appChangeColor);

  }
    @HostListener('mouseleave', ['$event']) onMouseLeave() {
         this.element.nativeElement.style.backgroundColor = "blue"


  }

}
