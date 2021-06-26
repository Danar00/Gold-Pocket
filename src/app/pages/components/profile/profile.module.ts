import { HistoryTransactionModule } from './history-transaction/history-transaction.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { HistoryTransactionComponent } from './history-transaction/history-transaction.component';
import { ProfileTemplateComponent } from './profile-template/profile-template.component';


@NgModule({
  declarations: [
    ProfileComponent,
    HistoryTransactionComponent,
    ProfileTemplateComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HistoryTransactionModule
  ]
})
export class ProfileModule { }
