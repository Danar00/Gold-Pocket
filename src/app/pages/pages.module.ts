import { SharedModule } from './../shared/shared.module';
import { TemplatesModule } from './../templates/templates.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RegisterComponent } from './components/register/register.component';
import { PagesRoutingModule } from './pages-routing.module';

const COMPONENTS = [PagesComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
