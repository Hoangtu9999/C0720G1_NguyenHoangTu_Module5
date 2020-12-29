import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentListComponent} from './bai-tap-hang-ngay/student-list/student-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '',pathMatch: 'full',redirectTo:'student-list'},
  {path: 'student-list',component: StudentListComponent}
  // {path: 'student-edit/:id',component: StudentListComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StudentRoutingModule { }
