import { Directive,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective {

  constructor(private el:ElementRef) { }

  @Input()
  set appShow(show:boolean){
    this.el.nativeElement.style.display = show ? 'block' : 'none';
  }
}
