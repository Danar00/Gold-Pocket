import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ExplainProductComponent } from './components/explain-product/explain-product.component';
import { OurProductComponent } from './components/our-product/our-product.component';

const COMPONENTS = [LandingComponent, CarouselComponent, ExplainProductComponent, OurProductComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
