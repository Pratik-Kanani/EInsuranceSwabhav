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
  intrestRate:number
  ishide:boolean
  constructor() {
    this.years = 0;
    this.amount = 0;
    this.installmentAmount=0;
    this.intrestAmount=0;
    this.totalAmount=0;
    this.months = 0;
    this.intrestRate = 15;
    this.ishide = true;
    
  }
  selectChangeHandler(event: any) {
    //update the ui
    this.months = event.target.value;
    console.log(this.months);
  }
  CalculateIntrest(){
    if(this.amount!=0 && this.years!=0 && this.months!=0)
    {
      this.ishide = false;
    if(this.months == 12)
    {
      this.installmentAmount = parseInt((this.amount/this.years).toFixed(2));
    }
    if(this.months == 6)
    {
      this.installmentAmount = this.amount/(this.years*2);
    }
    if(this.months == 3)
    {
      this.installmentAmount = this.amount/(this.years*4);
    }
    var interestPerYear = (this.amount * this.intrestRate)/100;
    var monthlyInterest = interestPerYear/12;
    this.intrestAmount = monthlyInterest*this.years;
    this.totalAmount = parseInt(this.intrestAmount.toString()) + parseInt(this.amount.toString());
   }
  }
  ngOnInit(): void {
    
  }

}
