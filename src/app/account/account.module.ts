import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
//import { SharedModule }   from '../shared/modules/shared.module';
 
import { UserService }  from '../shared/services/user.service';

import { EmailValidator } from '../directives/email.validator.directive';

import { AccountRoutingModule }  from './account.routing';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';


@NgModule({
  imports: [
    CommonModule,FormsModule,AccountRoutingModule//,SharedModule
  ],
  declarations: [EmailValidator, LoginFormComponent, RegistrationFormComponent
  ],
  providers:    [ UserService ]
})
export class AccountModule { }