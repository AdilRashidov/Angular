import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


import {routing} from './app.routing'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConfigService } from './shared/utils/config.service';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './account/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: []  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
