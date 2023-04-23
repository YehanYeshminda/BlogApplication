import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {RegisterComponent} from "./components/register/register.component";
import { TextInputComponent } from './partials/text-input/text-input.component';
import {CommonModule} from "@angular/common";
import { DateInputComponent } from './partials/date-input/date-input.component';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogsComponent,
    BlogListComponent,
    RegisterComponent,
    TextInputComponent,
    DateInputComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    BsDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
