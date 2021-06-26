import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoldRoutingModule } from './gold-routing.module';
import { GoldComponent } from './gold.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GoldComponent
  ],
  imports: [
    CommonModule,
    GoldRoutingModule,
    SharedModule
  ]
})
export class GoldModule { }
