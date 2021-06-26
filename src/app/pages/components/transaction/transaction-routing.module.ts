import { RouteGuard } from './../../../shared/guards/route.guard';
import { TransactionComponent } from './transaction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent //Eager Load
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
