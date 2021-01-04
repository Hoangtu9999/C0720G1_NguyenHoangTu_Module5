import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';

const routes: Routes = [
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-detail/:id', component: CustomerDetailComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class CustomerRoutingModule { }
