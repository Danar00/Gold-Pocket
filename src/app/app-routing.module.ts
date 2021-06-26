import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
        //Lazy Load
    },
    {
        path: '',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
        //Lazy Load
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule],
})
export class AppRoutingModule {}