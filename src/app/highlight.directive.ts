import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  {
  @Input() hcolor="red"
  constructor(public Dear:ElementRef) {
    
    this.Dear.nativeElement.style.backgroundColor=this.hcolor
   }
   ngOnChanges(){
    this.Dear.nativeElement.style.backgroundColor=this.hcolor
   }
   @HostListener('mouseenter')
   changeColor(){
    this.Dear.nativeElement.style.backgroundColor='red'
  }
   @HostListener('mouseleave')
   changeColor2(){
    this.Dear.nativeElement.style.backgroundColor=this.hcolor
  }

}


