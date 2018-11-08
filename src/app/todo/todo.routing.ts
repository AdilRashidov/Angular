import { NgModule } from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { AuthGuard } from '../auth.guard';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'todo/list',
    component: TodoListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'list',
    component:ListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'todo/create',
    component:TodoCreateComponent,
    canActivate:[AuthGuard]
  },
  { 
    path: 'todo/edit/:id', 
    component: TodoEditComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'todo/search/',
    redirectTo:'todo/list',
    canActivate:[AuthGuard]
  },
  {
    path:'todo/search/undefined',
    redirectTo:'/todo/list',
    canActivate:[AuthGuard]
  },
  {
    path :'todo/search/:search',
    component:TodoListComponent,
    canActivate:[AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}