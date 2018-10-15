import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';


import {routing} from './app.routing'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './account/login-form/login-form.component';

import { RegistrationFormComponent } from './account/registration-form/registration-form.component';
import { TodoComponent } from './todo/todo.component';
import {TokenInterceptor} from './helpers/token-interceptor'
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AuthGuard,
    { provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
