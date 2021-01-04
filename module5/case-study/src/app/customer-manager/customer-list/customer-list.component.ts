import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ICustomer} from '../../model/ICustomer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customerList: ICustomer[];

  constructor(
    private customerService: CustomerService
  ) {
    this.customerService.getAll().toPromise().then(data =>{
      this.customerList = data;
    });
  }

  ngOnInit(): void {
  }

}
