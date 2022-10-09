import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from 'app/models/agent.model';
import { AgentService } from 'app/services/agent.service';

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent implements OnInit {

  agents: Agent[] = [];
  constructor(private route: Router, private agentService: AgentService) {

  }

  ngOnInit(): void {
    this.agentService.getAllAgents()
      .subscribe({
        next: (agents) => {this.agents=agents;},
        error:(response)=>{
          console.log(response);
        }
      })
  }
}
