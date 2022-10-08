import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewCommisionWithdrawalsComponent } from './view-commision-withdrawals/view-commision-withdrawals.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminHomeComponent,
    ViewCommisionWithdrawalsComponent,
    ViewAgentComponent,
    EmployeeDashboardComponent,
    CustomerDashboardComponent,
    AgentDashboardComponent
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
