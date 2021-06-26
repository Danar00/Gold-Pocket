import { RouteGuard } from './../shared/guards/route.guard';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [RouteGuard],
        canActivateChild: [RouteGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () =>
                    import('./components/landing/landing.module')
                    .then((m) => m.LandingModule)
            },
            {
                path: 'profile',
                loadChildren: () =>
                    import('./components/profile/profile.module')
                    .then((m) => m.ProfileModule)
            },
            {
                path: 'platinum',
                loadChildren: () =>
                    import('./components/transaction/transaction.module')
                    .then((m) => m.TransactionModule)
            },
            {
                path: 'silver',
                loadChildren: () =>
                    import('./components/transaction/silver/silver.module')
                    .then((m) => m.SilverModule)
            },
            {
                path: 'gold',
                loadChildren: () =>
                    import('./components/transaction/gold/gold.module')
                    .then((m) => m.GoldModule)
            }
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule],
})
export class PagesRoutingModule {}