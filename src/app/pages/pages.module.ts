import { SharedModule } from './../shared/shared.module';
import { TemplatesModule } from './../templates/templates.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { OurProductComponent } from './components/our-product/our-product.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ExplainProductComponent } from './components/explain-product/explain-product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const COMPONENTS = [CarouselComponent, ExplainProductComponent,
   OurProductComponent, PagesComponent, LoginComponent, RegisterComponent]

@NgModule({
  declarations: [

    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    SharedModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
