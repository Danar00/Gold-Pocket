import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SilverRoutingModule } from './silver-routing.module';
import { SilverComponent } from './silver.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SilverComponent
  ],
  imports: [
    CommonModule,
    SilverRoutingModule,
    SharedModule
  ]
})
export class SilverModule { }
