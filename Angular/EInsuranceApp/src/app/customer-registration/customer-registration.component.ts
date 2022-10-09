import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/models/customer.model';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  addCustomerReguest:Customer={
    name: '',
    dob: '',
    login_id: '',
    address: '',
    email: '',
    state: '',
    city: '',
    pincode: 0,
    mobile: 0,
    nominee: '',
    nominee_relation: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
