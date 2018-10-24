import { NgModule } from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';


import { TodoListComponent } from './todo-list.component';
import { TodoCreateComponent } from './todo-create.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: 'todo/create',
    component:TodoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}