import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
      // ['', Validators.compose([Validators.required, Validators.pattern('^(KH-)[0-9]{4}$')])]
      name: ['',Validators.required],
      dateOfBirth: [Validators.required],
      idCard: ['', [Validators.required , Validators.pattern('^\\d{9}$')]],
      phoneNumber: ['', [Validators.required , Validators.pattern('^(090|091|\\(84\\)(\\+90|\\+91))(\\d{7})$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+[@]([a-zA-Z]{3,7})[.]([a-z]{2,3})$')]],
      address: ['', Validators.required],
      typeCustomer: ''
    });
  }

  saveCustomer() {
    if (this.formGroup.invalid){
      alert('There was an error!')
    }else {
      this.customerService.save(this.formGroup.value).subscribe(
        () => this.router.navigateByUrl('customer-list').then(r => alert('More success!'))
      );
    }

  }
  validation_messages = {
    'name': [
      { type: 'required', message: 'This field is not empty!' }
    ],
    'dateOfBirth': [
      { type: 'required', message: 'This field is not empty!' }
    ],
    'idCard': [
      { type: 'required', message: 'This field is not empty!' },
      { type: 'pattern', message: 'The id card is not in the correct format(xxxxxxxxx)'}
    ],
    'phoneNumber': [
      { type: 'required', message: 'This field is not empty!' },
      // { type: 'min', message: 'Lương tối thiểu phải được 1000.' }
      { type: 'pattern', message: 'The id phone number is not in the correct format'}
    ],
    'email': [
      { type: 'required', message: 'This field is not empty!' },
      { type: 'pattern', message: 'The id email is not in the correct format(abc@gmail.com'}
    ],
    'address': [
      { type: 'required', message: 'This field is not empty!' }
    ],

    'typeCustomer': [
      { type: 'required', message: 'This field is not empty!' },
      // { type: 'minlength',message: 'Độ dài password của giáo viên phải tối thiểu 5 kí tự'},
      // { type: 'maxlength',message: 'Độ dài password của giáo viên tối đa 30 kí tự'},
    ],
  }
}
