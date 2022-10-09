import { Component, OnInit } from '@angular/core';
import { Agent } from 'app/models/agent.model';
import { AgentService } from 'app/services/agent.service';


@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {

  addAgentRequest:Agent={
    id: NaN,
    name: '',
    username: '',
    password: '',
    address: '',
    email: '',
    qualification: '',
    status: false
  };  
  constructor(private agentService:AgentService) { }

  ngOnInit(): void {
  }
  addAgent(){
    this.agentService.addAgent(this.addAgentRequest)
    .subscribe({
      next:(agent)=>{
        console.log(agent);
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }
}
