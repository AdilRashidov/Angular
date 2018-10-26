import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToDoService} from '../../shared/services/todo.service'
import { ToDo } from '../../shared/models/todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  activeTodos: ToDo[];
  completedTodos: ToDo[];
  todo: ToDo= new ToDo();
  tableMode: boolean = false;
  search:string;

  constructor(private todoService: ToDoService, private router: Router, private activeRoute: ActivatedRoute) {
    
}
  ngOnInit() { 
  this.todo.name= (this.activeRoute.snapshot.params["search"]);  
  this.ToDoSearch(this.todo.name);

  }

  ToDoSearch(searchname?:string)
  { if (searchname=='')searchname='undefined'
    this.todoService.ToDoSearch(searchname).subscribe((data: ToDo[]) => 
      {
        this.activeTodos = data.filter((a) => !a.check);
        this.completedTodos = data.filter((a) => a.check); 
      });
  }
  
  
  ToDoDo(id:number){
    this.todoService.ToDoDo(id).subscribe(()=>{
    this.ToDoSearch();
    })
  }
  ToDoDelete(id:number){
    this.todoService.ToDoDelete(id).subscribe(()=>{
      this.ToDoSearch();
    })
  }
  editProduct(t: ToDo) {
    this.todo = t;
  }
  

}
