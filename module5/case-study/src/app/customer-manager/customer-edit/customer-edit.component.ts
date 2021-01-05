import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ICustomer} from '../../model/ICustomer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
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
        this.formGroup.setValue(data);
        // this.formGroup.patchValue({
        // type : data.typeCustomer
        // });
      });
    });
  }

  update() {
    this.customerService.update( this.formGroup.value.id ,this.formGroup.value).subscribe(
      () => this.router.navigateByUrl('customer-list').then(r => alert('Updated successful!'))
    );
  }
}

