import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-view-agent',
  templateUrl: './emp-view-agent.component.html',
  styleUrls: ['./emp-view-agent.component.css']
})
export class EmpViewAgentComponent implements OnInit {
  title : string;
  id : number;
  name : string;
  address : string;
  email : string;
  qualification : string;
  status : boolean;

  constructor() { 
    this.title = "View Agent Records"
    this.id = 1
    this.name ="Ram"
    this.address = "Lucknow"
    this.email = "abc@gmail.com"
    this.qualification = "PG"
   this.status = true
  }

  ngOnInit(): void {
  }

}
