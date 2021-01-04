import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {CustomerRoutingModule} from './customer-routing.module';
import {RouterModule} from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerCreateComponent } from './customer-create/customer-create.component';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerCreateComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CustomerManagerModule { }
