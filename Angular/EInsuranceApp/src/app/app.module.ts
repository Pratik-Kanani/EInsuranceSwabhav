import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
<<<<<<< HEAD
import { ViewCommisionWithdrawalsComponent } from './view-commision-withdrawals/view-commision-withdrawals.component';
=======
import { ViewAgentComponent } from './view-agent/view-agent.component';
>>>>>>> ce4ce5928c53b497c4c9ac611837e2feb871927a

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminHomeComponent,
<<<<<<< HEAD
    ViewCommisionWithdrawalsComponent
=======
    ViewAgentComponent
>>>>>>> ce4ce5928c53b497c4c9ac611837e2feb871927a
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
