import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-document',
  templateUrl: './customer-document.component.html',
  styleUrls: ['./customer-document.component.css']
})
export class CustomerDocumentComponent implements OnInit {

  constructor() { }
  
deleteRow(r:any) {
  var i = r.parentNode.parentNode.rowIndex;
  this.deleteRow(i);
}
  ngOnInit(): void {
  }

}
