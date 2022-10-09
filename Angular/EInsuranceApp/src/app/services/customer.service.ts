import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from 'app/models/agent.model';
import { Customer } from 'app/models/customer';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl:string=environment.baseApiUrl
  constructor(private http:HttpClient) { 
    
  }
  getAllCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseUrl+'/customers');
  }
  addCustomer(addCustomerReqest:Customer):Observable<Customer>{
  
    return this.http.post<Customer>(this.baseUrl+'/customers',addCustomerReqest);

  }
}
