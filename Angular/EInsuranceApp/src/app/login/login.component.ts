import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="";
  password:string="";
  userType:string="";
  LoginUser(){
    if(this.username=="admin"&& this.password=="admin"){
      alert("Login successful")
      this.route.navigate(['/admin-home']);
    }
    else{
      alert("Incorrect username or password")
    }
  }
  constructor(private route : Router) { }

  ngOnInit(): void {
  }

}
