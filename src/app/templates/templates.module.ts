import { TemplatesComponent } from './templates.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const LAYOUT: any = []
const COMPONENTS = [HeaderComponent, FooterComponent, TemplatesComponent]

@NgModule({
  declarations: [
    ...COMPONENTS, ...LAYOUT
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesComponent
  ]
})
export class TemplatesModule { }
