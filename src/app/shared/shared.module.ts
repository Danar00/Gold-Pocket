import { RouteGuard } from './guards/route.guard';
import { CustomDatePipe } from './pipes/custom-date/custom-date.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarDirective, BsNavbarTextDirective } from './directives/bs-navbar/bs-navbar.directive';
import { BsButtonDirective } from './directives/bs-button/bs-button.directive';
import { BsInputDirective } from './directives/bs-input/bs-input.directive';

const DIRECTIVES = [BsNavbarDirective, BsNavbarTextDirective, BsButtonDirective, BsInputDirective]

const PIPES = [CustomDatePipe]

@NgModule({
  declarations: [
    ...DIRECTIVES,
    ...PIPES,
    BsButtonDirective,
    BsInputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DIRECTIVES,
    ...PIPES
  ],
  providers: [
    RouteGuard
  ]
})
export class SharedModule { }
