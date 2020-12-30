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
import { CountdownTimerComponent } from './_05_components_interaction/bai_tap/countdown-timer/countdown-timer.component';
import { CountdownTimerAliasComponent } from './_05_components_interaction/bai_tap/countdown-timer-alias/countdown-timer-alias.component';
import { CountdownTimerEventComponent } from './_05_components_interaction/bai_tap/countdown-timer-event/countdown-timer-event.component';
import { CountdownTimerEventAliasComponent } from './_05_components_interaction/bai_tap/countdown-timer-event-alias/countdown-timer-event-alias.component';
import { CountdownTimerGetSetComponent } from './_05_components_interaction/bai_tap/countdown-timer-get-set/countdown-timer-get-set.component';
import { RatingBarComponent } from './_05_components_interaction/bai_tap/rating-bar/rating-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {StudentRoutingModule} from './student-routing.module';
import { StudentCreateComponent } from './bai-tap-hang-ngay/student-create/student-create.component';


@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    FontSizeEditorComponent,
    HackerNewsComponent,
    StudentDetailComponent,
    StudentListComponent,
    NameCardApplicationComponent,
    ProgressBarApplicationComponent,
    CountdownTimerComponent,
    CountdownTimerAliasComponent,
    CountdownTimerEventComponent,
    CountdownTimerEventAliasComponent,
    CountdownTimerGetSetComponent,
    RatingBarComponent,
    StudentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StudentRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
