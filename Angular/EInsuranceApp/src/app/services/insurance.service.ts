import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Insurance } from 'app/models/insurance.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http : HttpClient) { }

  getAllplans():Observable<Insurance[]>{
    return this.http.get<Insurance[]>(this.baseApiUrl+'/insuranceplans');
  }

  addInsurance(addInsuranceRequest:Insurance):Observable<Insurance>{
       return this.http.post<Insurance>(this.baseApiUrl +'/insuranceplans',addInsuranceRequest);
  }
  
  deleteInsurance(deleteInsuranceRequest:Insurance):Observable<Insurance>{
    return this.http.post<Insurance>(this.baseApiUrl + '/insuranceplans',deleteInsuranceRequest);
}

}
