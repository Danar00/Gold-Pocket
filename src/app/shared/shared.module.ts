import { CustomDatePipe } from './pipes/custom-date/custom-date.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarDirective, BsNavbarTextDirective } from './directives/bs-navbar/bs-navbar.directive';

const DIRECTIVES = [BsNavbarDirective, BsNavbarTextDirective]

const PIPES = [CustomDatePipe]

@NgModule({
  declarations: [
    ...DIRECTIVES,
    ...PIPES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule { }
