import { OurProductComponent } from './our-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    OurProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OurProductComponent
  ]
})
export class OurProductModule { }
