import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent }  from './account/login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { RegistrationFormComponent } from './account/registration-form/registration-form.component';
import { TodoComponent } from './todo/todo.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  { 
    path: '',
    component: LoginFormComponent 
  },
  { 
    path: 'home',
    component:HomeComponent
  },
  { 
    path: 'register',
    component:RegistrationFormComponent
  },
  { 
    path: 'login',
    component:LoginFormComponent
  },
  {
    path:'todo',
    component:TodoComponent,
    canActivate:[AuthGuard]
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);