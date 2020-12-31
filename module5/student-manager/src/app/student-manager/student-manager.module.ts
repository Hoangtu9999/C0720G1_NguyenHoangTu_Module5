import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentRoutingModule} from './student-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentEditComponent } from './student-edit/student-edit.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { StudentDeleteComponent } from './student-delete/student-delete.component';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentCreateComponent,
    StudentDetailComponent,
    StudentEditComponent,
    StudentDeleteComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAm6vc-vB60r2Auu_Rw-gx-uLqx48bvz7U',
      authDomain: 'student-manager-ad9cb.firebaseapp.com',
      projectId: 'student-manager-ad9cb',
      storageBucket: 'student-manager-ad9cb.appspot.com',
      messagingSenderId: '153748719875',
      appId: '1:153748719875:web:3c55b157f130c376110136',
      measurementId: 'G-VCQ3TZETD4'
    }),
    AngularFireStorageModule
  ]
})
export class StudentManagerModule { }
