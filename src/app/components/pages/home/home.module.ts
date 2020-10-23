import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { RegisterComponent } from '@pages/register/register.component';
import { LoginComponent } from '@pages/login/login.component';

import { RegistrationFormComponent } from '@forms/registration-form/registration-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
