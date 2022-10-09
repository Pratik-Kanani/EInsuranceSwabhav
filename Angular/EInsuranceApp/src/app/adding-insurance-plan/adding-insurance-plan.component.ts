import { Component, OnInit } from '@angular/core';
import { Insurance } from 'app/models/insurance.model';
import { InsuranceService } from 'app/services/insurance.service';


@Component({
  selector: 'app-adding-insurance-plan',
  templateUrl: './adding-insurance-plan.component.html',
  styleUrls: ['./adding-insurance-plan.component.css']
})
export class AddingInsurancePlanComponent implements OnInit {
  title : string = "Adding Insurance Plan";
  id :any;

  addInsuranceRequest : Insurance ={
    id : 0,
    name: '',
    policyTermmin : 0,
    policyTermmax : 0,
    minimumAge : 0,
    maximumAge : 0,
    minimumInvestmentamount : 0,
    maximumInvestmentAmount : 0,
    profitPercentage : 0,
    newRegistrationcommission : 0,
    insuranceType : '',
  };
   constructor(private insuranceService : InsuranceService) { }

  ngOnInit(): void {
  }                                  

  addInsurance(){
    this.insuranceService.addInsurance(this.addInsuranceRequest) 
    .subscribe({
      next:(Insurance)=>{
        console.log(Insurance);
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }

}
