import { FooterModule } from './footer/footer.module';
import { OurProductModule } from './our-product/our-product.module';
import { ExplainProductModule } from './explain-product/explain-product.module';
import { CarouselModule } from './carousel/carousel.module';
import { NavbarModule } from './navbar/navbar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    CarouselModule,
    ExplainProductModule,
    OurProductModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
