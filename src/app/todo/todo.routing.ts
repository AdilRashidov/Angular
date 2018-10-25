import { NgModule } from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';


import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: 'todo/create',
    component:TodoCreateComponent
  },
  {
    path: 'todo/search/**/create',
    redirectTo: 'todo/create'
  },
  { 
    path: 'todo/edit/:id', 
    component: TodoEditComponent,
   },
  { 
    path: 'todo/search/**/edit/**', 
    redirectTo: 'todo/edit/:id'
  },
  {
    path:'todo/search',
    redirectTo:'todo'
  },
  {
    path:'todo/search/undefined',
    redirectTo:'todo'
  },
  {
    path :'todo/search/:search',
    component:TodoListComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}