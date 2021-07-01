import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryTransactionRoutingModule } from './history-transaction-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HistoryTransactionRoutingModule,
    SharedModule
  ]
})
export class HistoryTransactionModule { }
