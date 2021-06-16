import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarDirective, BsNavbarTextDirective } from './directives/bs-navbar/bs-navbar.directive';

const DIRECTIVES = [BsNavbarDirective, BsNavbarTextDirective]

@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class SharedModule { }
