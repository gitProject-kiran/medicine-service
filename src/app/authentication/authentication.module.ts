import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    AngularMaterialModule
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
