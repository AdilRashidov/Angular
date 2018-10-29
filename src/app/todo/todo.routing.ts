import { NgModule } from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'todo/list',
    component: TodoListComponent
  },
  {
    path: 'todo/create',
    component:TodoCreateComponent
  },
  { 
    path: 'todo/edit/:id', 
    component: TodoEditComponent
  },
  {
    path:'todo/search/',
    redirectTo:'todo/list'
  },
  {
    path:'todo/search/undefined',
    redirectTo:'/todo/list'
  },
  {
    path :'todo/search/:search',
    component:TodoListComponent,
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}