import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {StudentEditComponent} from './student-edit/student-edit.component';
import {StudentDeleteComponent} from './student-delete/student-delete.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo : 'student-list'},
  {path: 'student-list', component : StudentListComponent},
  {path: 'student-create', component : StudentCreateComponent},
  {path: 'student-edit/:id', component : StudentEditComponent},
  {path: 'student-delete/:id', component : StudentDeleteComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StudentRoutingModule { }
