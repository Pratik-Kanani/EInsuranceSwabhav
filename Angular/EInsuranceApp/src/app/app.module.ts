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
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { IntrestCalculatorComponent } from './intrest-calculator/intrest-calculator.component';

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
    AddAgentComponent,
    IntrestCalculatorComponent,
    AgentDashboardComponent,
    AgentProfileComponent
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
