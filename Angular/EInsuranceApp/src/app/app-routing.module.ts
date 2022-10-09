import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerDocumentComponent } from './customer-document/customer-document.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { ViewCommisionWithdrawalsComponent } from './view-commision-withdrawals/view-commision-withdrawals.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { ViewInsuranceAccountDetailComponent } from './view-insurance-account-detail/view-insurance-account-detail.component';

const routes: Routes = [
  {path : '',component :HomeComponent},
  {path : 'admin-home', component : AdminHomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'login', component : AdminHomeComponent},
  {path : 'view-agent', component : ViewAgentComponent},
  {path: 'ViewAccountDetail',component:ViewInsuranceAccountDetailComponent},
  {path : 'add-agent',component:AddAgentComponent},
  {path :'agent-profile',component:AgentProfileComponent},
  {path :'customer-dashbotrd',component:CustomerDashboardComponent},
  {path :'customer-profile',component:CustomerProfileComponent},
  {path :'customer-document',component:CustomerDocumentComponent},
  {path : 'agent-dashbord',component:AgentDashboardComponent},
  {path :'view-commision-withdrawals',component:ViewCommisionWithdrawalsComponent},
  {path :'customer-registration',component:CustomerRegistrationComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
