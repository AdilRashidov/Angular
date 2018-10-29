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
  searchName='';

  constructor(private todoService: ToDoService, private router: Router, private activeRoute: ActivatedRoute) {
    
}
  ngOnInit() { 
  this.searchName = (this.activeRoute.snapshot.params["search"]);  
  this.ToDoSearch(this.searchName); 
  }

  ToDoSearch(searchname?:string)
  {
   if (searchname=='')searchname='undefined'
    this.todoService.ToDoSearch(searchname).subscribe((data: ToDo[]) => 
      {
        this.activeTodos = data.filter((a) => !a.check);
        this.completedTodos = data.filter((a) => a.check); 
      });
  }
  
  
  ToDoDo(id:number){
    this.search = (this.activeRoute.snapshot.params["search"]); 
    this.todoService.ToDoDo(id).subscribe(()=>{
    this.ToDoSearch(this.search);
    })
  }
  ToDoDelete(id:number){
    this.search = (this.activeRoute.snapshot.params["search"]); 
    this.todoService.ToDoDelete(id).subscribe(()=>{
    this.ToDoSearch(this.search);
    })
  }

  ToDoAdd() {
    var newToDo: ToDo ={
        name: this.todo.name,
        desc: '',
        tags: ''
    }
  this.todoService.ToDoAdd(newToDo).subscribe(()=>{
    this.todo.name='';
    this.ToDoSearch(this.search);
    })
  }
  

}
