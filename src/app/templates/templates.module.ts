import { TemplatesComponent } from './templates.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

const LAYOUT: any = []
const COMPONENTS = [HeaderComponent, FooterComponent, TemplatesComponent]

@NgModule({
  declarations: [
    ...COMPONENTS, ...LAYOUT
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TemplatesComponent
  ]
})
export class TemplatesModule { }
