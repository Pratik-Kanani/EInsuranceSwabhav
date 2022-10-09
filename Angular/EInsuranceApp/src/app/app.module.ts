import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewCommissionComponent } from './Agent/view-commission/view-commission.component';
import { ViewCommisionWithdrawalsComponent } from './view-commision-withdrawals/view-commision-withdrawals.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerDocumentComponent } from './customer-document/customer-document.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmpViewAgentComponent } from './emp-view-agent/emp-view-agent.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminHomeComponent,
    ViewCommissionComponent,
    ViewCommisionWithdrawalsComponent,
    ViewAgentComponent,
    CustomerDashboardComponent,
    CustomerProfileComponent,
    CustomerDocumentComponent,
    EmployeeDashboardComponent,
    EmpViewAgentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
