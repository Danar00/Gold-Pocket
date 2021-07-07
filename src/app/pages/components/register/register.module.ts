import { RegisterRoutingModule } from './register-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [RegisterComponent],
    imports: [ CommonModule, FormsModule, ReactiveFormsModule, SharedModule, RegisterRoutingModule ],
    exports: [],
    providers: [],
})
export class RegisterModule {}