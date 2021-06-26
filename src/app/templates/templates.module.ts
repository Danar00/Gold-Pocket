import { RouterModule } from '@angular/router';
import { TemplatesComponent } from './templates.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

const LAYOUT: any = []
const COMPONENTS = [HeaderComponent, FooterComponent, TemplatesComponent]

@NgModule({
  declarations: [
    ...COMPONENTS, ...LAYOUT
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    TemplatesComponent,
    // CommonModule,
    // ...COMPONENTS,
    // ...LAYOUT
  ]
})
export class TemplatesModule { }
