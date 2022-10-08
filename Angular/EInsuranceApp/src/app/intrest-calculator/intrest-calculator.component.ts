import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intrest-calculator',
  templateUrl: './intrest-calculator.component.html',
  styleUrls: ['./intrest-calculator.component.css']
})
export class IntrestCalculatorComponent implements OnInit {
  years:number
  amount:number
  installmentAmount:number
  intrestAmount:number
  totalAmount:number
  months:number
  intrest:number
  constructor() {
    this.years = 0;
    this.amount = 0;
    this.installmentAmount=0;
    this.intrestAmount=0;
    this.totalAmount=0;
    this.months = 0;
    this.intrest = 6/100;
    
  }
  selectChangeHandler(event: any) {
    //update the ui
    this.months = event.target.value;
    console.log(this.months);
  }
  CalculateIntrest(){
    if(this.months == 12)
    {
      this.installmentAmount = this.amount/this.years;
    }
    if(this.months == 6)
    {
      this.installmentAmount = this.amount/(this.years*2);
    }
    if(this.months == 3)
    {
      this.installmentAmount = this.amount/(this.years*4);
    }

  }
  ngOnInit(): void {
    
  }

}
