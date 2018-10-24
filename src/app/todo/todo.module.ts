import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
//import { SharedModule }   from '../shared/modules/shared.module';
 
import { UserService }  from '../shared/services/user.service';

import { TodoRoutingModule } from './todo.routing';
import { TodoListComponent } from './todo-list.component';
import { TodoCreateComponent } from './todo-create.component';


@NgModule({
  imports: [
    CommonModule,FormsModule,TodoRoutingModule//,SharedModule
  ],
  declarations: [ TodoListComponent, TodoCreateComponent
  ],
  providers:    [ UserService ]
})
export class TodoModule { }