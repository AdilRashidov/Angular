import { NgModule } from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';


import { TodoListComponent } from './todo-list.component';
import { TodoCreateComponent } from './todo-create.component';
import { TodoEditComponent } from './todo-edit.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: 'todo/create',
    component:TodoCreateComponent
  },
  { path: 'todo/edit/:id', 
  component: TodoEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}