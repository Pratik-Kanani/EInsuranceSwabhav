import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'environments/environment';
import { Agent } from 'app/models/agent.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getAllAgents():Observable<Agent[]>{
    return this.http.get<Agent[]>(this.baseApiUrl+'/agents');
  }
  addAgent(addAgentRequest:Agent):Observable<Agent>{
    addAgentRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Agent>(this.baseApiUrl+'/agents',addAgentRequest);
  }
}
