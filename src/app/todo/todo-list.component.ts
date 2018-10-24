import { Component, OnInit } from '@angular/core';
import { ToDoService} from '../shared/services/todo.service'
import { ToDo } from '../shared/models/todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: ToDoService) { }
  
  activeTodos: ToDo[];
  completedTodos: ToDo[];
  todoMessage: string;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.todoService.GetToDoList().subscribe((data: ToDo[]) => {
      this.activeTodos = data.filter((a) => !a.check);
      this.completedTodos = data.filter((a) => a.check);
    });
  }
  ToDoAdd(todo:ToDo){
    this.todoService.ToDoAdd(todo).subscribe(()=>{
    this.getAll();
    })
  }
  ToDoComplete(id:number){
    this.todoService.ToDoDo(id).subscribe(()=>{
    this.getAll();
    })
  }

}
