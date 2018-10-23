import { NgModule } from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';

import { RegistrationFormComponent }    from './registration-form/registration-form.component';
import { LoginFormComponent }    from './login-form/login-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegistrationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}