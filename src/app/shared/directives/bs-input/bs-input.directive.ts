import { Directive,
  ElementRef, 
  HostBinding,
Input } from '@angular/core';

enum InputSize {
  default = '',
  large = 'form-control-lg',
  small = 'form-control-sm'
}

//Target element : mengaplikasikan/menambahkan class 'form-control'
//Caranya : tambahkan @HostBinding('class)
@Directive({
  selector: '[appBsInput]'
})
export class BsInputDirective {
  @Input() inputSize: 'default' | 'large' | 'small' = 'default';

  @HostBinding('class')
  get applyClass(): string{
    return `form-control ${InputSize[this.inputSize]}`;
  }

  constructor(el:ElementRef){
    console.log(`target:`, el.nativeElement);
  }
}

class Car {
  isEngineStarted:boolean = true;
  get engineStart(): string{
    return 'engine started!';
  }
}