import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ICustomer} from '../../model/ICustomer';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ICustomerType} from '../../model/ICustomerType';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  public formGroup: FormGroup;
  public customerTypeList: ICustomerType[];
  public customer: ICustomer;

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService,
    private activatedRoute: ActivatedRoute,
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

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {

      this.customerService.findById(paramMap.get('id')).subscribe((data: ICustomer) => {
        this.formGroup.patchValue(data);
        // this.formGroup.controls.typeCustomer.setValue(this.idCustomerType);
        this.customer = data;
      });
    });
  }

}
