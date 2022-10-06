import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent implements OnInit {
  title : string;
  id : number;
  name : string;
  address : string;
  email : string;
  qualification : string;
  status : boolean;

  constructor(private route: Router) {
    this.title = "Agent Records"
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
