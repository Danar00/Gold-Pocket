import { TemplatesModule } from './../templates/templates.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { OurProductComponent } from './components/our-product/our-product.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ExplainProductComponent } from './components/explain-product/explain-product.component';

const COMPONENTS = [CarouselComponent, ExplainProductComponent, OurProductComponent, PagesComponent]

@NgModule({
  declarations: [

    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    TemplatesModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
