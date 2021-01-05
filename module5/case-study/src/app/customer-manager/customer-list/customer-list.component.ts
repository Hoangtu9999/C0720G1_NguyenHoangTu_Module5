import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ICustomer} from '../../model/ICustomer';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customerId: number;
  customerList: ICustomer[] ;
  term: any;
  p: any;
  constructor(
    private customerService: CustomerService,
  ) {
  }

  ngOnInit(): void {
    // this.customerService.getAll().toPromise().then(data =>{
    //   this.customerList = data;
    // });
    this.customerService.getAll().subscribe((data: ICustomer[]) =>{
      this.customerList = data;
    });
  }

  getId(id: number) {
    this.customerId = id;
  }

  delete() {
    this.customerService.delete(this.customerId).subscribe(data => {
      this.ngOnInit();
    });
  }


  searchKeyWork (keyword: string)  {
    this.customerService.searchAll(keyword.toLocaleLowerCase()).subscribe((data: ICustomer[]) =>{
      this.customerList = data;   
    });
  }
}
