import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {

  title :string
  agentName:string
  loginId:string
  dateOfBirth:string
  address:string
  emailId:string
  state:string
  city:string
  pinCode:number
  mobileNumber:number

  constructor() {
    this.title="AGENT PROFILE"
    this.agentName="Gaurav Jadhav"
    this.loginId="xyz"
    this.dateOfBirth="15/07/2000"
    this.address="Malegaon bk. tal:Baramati dis:Pune"
    this.emailId="gauravjadhav0102@gmail.com"
    this.state="Karnataka"
    this.city="pune"
    this.pinCode=413115
    this.mobileNumber=9921635194
   }

  ngOnInit(): void {
  }

}
