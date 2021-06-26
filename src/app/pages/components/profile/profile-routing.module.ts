import { ProfileModule } from './profile.module';
import { RouteGuard } from './../../../shared/guards/route.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent, //Eager Load
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    children: [
      {
        path: 'history-transaction',
        pathMatch: '',
        loadChildren: () =>
          import('./history-transaction/history-transaction.module')
          .then((m) => m.HistoryTransactionModule)
      },
      {
        path: 'profile',
        pathMatch: '',
        loadChildren: () =>
          import('./profile-template/profile-template.module')
          .then((m) => m.ProfileTemplateModule)
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
