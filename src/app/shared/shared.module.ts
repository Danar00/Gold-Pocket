import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarDirective, BsNavbarTextDirective } from './directives/bs-navbar/bs-navbar.directive';


@NgModule({
  declarations: [
    BsNavbarDirective, BsNavbarTextDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BsNavbarDirective, BsNavbarTextDirective
  ]
})
export class SharedModule { }
