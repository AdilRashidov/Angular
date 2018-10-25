import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToDoService} from '../../shared/services/todo.service'
import { ToDo } from '../../shared/models/todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  activeTodos: ToDo[];
  completedTodos: ToDo[];
  todo: ToDo= new ToDo();
  tableMode: boolean = false;
  search:string;

  constructor(private todoService: ToDoService, private router: Router, activeRoute: ActivatedRoute) {
    this.search = (activeRoute.snapshot.params["search"]);
    
}
  ngOnInit() {   
 this.getAll();

  }

  getAll() {
    console.log(this.search);
      this.todoService.ToDoSearch(this.search).subscribe((data: ToDo[]) => {
      this.activeTodos = data.filter((a) => !a.check);
      this.completedTodos = data.filter((a) => a.check);   
    });
  }
  
  ToDoDo(id:number){
    this.todoService.ToDoDo(id).subscribe(()=>{
    this.getAll();
    })
  }
  ToDoDelete(id:number){
    this.todoService.ToDoDelete(id).subscribe(()=>{
      this.getAll();
    })
  }
  editProduct(t: ToDo) {
    this.todo = t;
  }
  

}
