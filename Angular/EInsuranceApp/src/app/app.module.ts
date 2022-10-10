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
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerDocumentComponent } from './customer-document/customer-document.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { IntrestCalculatorComponent } from './intrest-calculator/intrest-calculator.component';
import { AgentService } from './services/agent.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { AddingInsurancePlanComponent } from './adding-insurance-plan/adding-insurance-plan.component';
import { ViewInsuranceAccountDetailComponent } from './view-insurance-account-detail/view-insurance-account-detail.component';
import { InsuranceAccountDetailByIdComponent } from './insurance-account-detail-by-id/insurance-account-detail-by-id.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { CustomerEnquiryComponent } from './customer-enquiry/customer-enquiry.component';


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
    AgentProfileComponent,
    CustomerProfileComponent,
    CustomerDocumentComponent,
    CustomerRegistrationComponent,
    EmployeeDashboardComponent,
    AddingInsurancePlanComponent,
    CustomerDashboardComponent,
    ViewInsuranceAccountDetailComponent,
    InsuranceAccountDetailByIdComponent,
    ViewFeedbackComponent,
    CustomerEnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,AgentService ,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
