import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-commision-withdrawals',
  templateUrl: './view-commision-withdrawals.component.html',
  styleUrls: ['./view-commision-withdrawals.component.css']
})
export class ViewCommisionWithdrawalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class CommisionWithdrawals{
  constructor(public id:number ,public name:string){
      
  }
}
