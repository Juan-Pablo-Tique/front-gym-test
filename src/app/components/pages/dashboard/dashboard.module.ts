import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { LoginFormComponent } from '@forms/login-form/login-form.component';
import { CityFormComponent } from '@forms/city-form/city-form.component';
import { BranchOfficeFormComponent } from '@forms/branch-office-form/branch-office-form.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginFormComponent,
    CityFormComponent,
    BranchOfficeFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
