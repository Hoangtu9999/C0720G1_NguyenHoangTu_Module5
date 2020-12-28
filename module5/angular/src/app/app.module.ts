import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PetComponent} from './_03_angular_overview/thuc_hanh/pet/pet.component';
import {FontSizeEditorComponent} from './_03_angular_overview/thuc_hanh/font-size-editor/font-size-editor.component';
import { BaiTapHangNgayComponent } from './bai-tap-hang-ngay/bai-tap-hang-ngay.component';
import {FormsModule} from '@angular/forms';
import { HackernewsComponent } from './_04_angular_component_va_template/thuc_hanh/hackernews/hackernews.component';
import { HackerNewsComponent } from './_04_angular_component_va_template/thuc_hanh/hacker-news/hacker-news.component';


@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    FontSizeEditorComponent,
    BaiTapHangNgayComponent,
    HackernewsComponent,
    HackerNewsComponent
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
