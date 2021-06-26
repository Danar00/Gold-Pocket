import { HistoryTransactionComponent } from './history-transaction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HistoryTransactionComponent //Eager Load
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryTransactionRoutingModule { }
