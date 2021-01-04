import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {ICustomer} from '../../model/ICustomer';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ICustomerType} from '../../model/ICustomerType';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  public formGroup: FormGroup;
  public customerList: ICustomer[];
  public customerTypeList: ICustomerType[];

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.customerTypeService.getAll().toPromise().then(data =>{
      this.customerTypeList = data;
    });
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: '',
      name: '',
      dateOfBirth: '',
      idCard: '',
      phoneNumber: '',
      email: '',
      address: '',
      typeCustomer: ''
    });
  }

  saveCustomer() {
    this.customerService.save(this.formGroup.value).subscribe(data =>{
    });
    this.router.navigateByUrl('customer-list').then(r => alert('thêm thành công'));
  }
}
