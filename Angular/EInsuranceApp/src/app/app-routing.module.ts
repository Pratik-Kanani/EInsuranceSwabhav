import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { AddAgentComponent } from './add-agent/add-agent.component';

const routes: Routes = [
  {path : '',component :HomeComponent},
  {path : 'admin-home', component : AdminHomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'login', component : AdminHomeComponent},
  {path : 'view-agent', component : ViewAgentComponent},
  {path: 'add-agent',component:AddAgentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
