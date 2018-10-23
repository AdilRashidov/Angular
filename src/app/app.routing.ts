import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  { 
    path: 'home',
    component:HomeComponent
  },
  {
    path:'todo',
    component:TodoComponent,
    canActivate:[AuthGuard]
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);