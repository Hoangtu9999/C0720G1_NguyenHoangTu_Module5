import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PetComponent} from './_03_angular_overview/thuc_hanh/pet/pet.component';
import {FontSizeEditorComponent} from './_03_angular_overview/thuc_hanh/font-size-editor/font-size-editor.component';
import {FormsModule} from '@angular/forms';
import { HackerNewsComponent } from './_04_angular_component_va_template/thuc_hanh/hacker-news/hacker-news.component';
import { StudentDetailComponent } from './bai-tap-hang-ngay/student-detail/student-detail.component';
import { StudentListComponent } from './bai-tap-hang-ngay/student-list/student-list.component';
import { NameCardApplicationComponent } from './_05_components_interaction/thuc_hanh/name-card-application/name-card-application.component';
import { ProgressBarApplicationComponent } from './_05_components_interaction/thuc_hanh/progress-bar-application/progress-bar-application.component';


@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    FontSizeEditorComponent,
    HackerNewsComponent,
    StudentDetailComponent,
    StudentListComponent,
    NameCardApplicationComponent,
    ProgressBarApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
