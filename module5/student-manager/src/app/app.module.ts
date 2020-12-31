import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StudentRoutingModule} from './student-manager/student-routing.module';
import {StudentManagerModule} from './student-manager/student-manager.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {StudentService} from './service/StudentService';
import {AngularFireStorageModule} from '@angular/fire/storage';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StudentRoutingModule,
    StudentManagerModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,"cloud")
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
