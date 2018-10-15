import { Component, OnInit } from '@angular/core';
import { ToDoService} from '../shared/services/todo.service'
import { ToDo } from '../shared/models/todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: ToDoService) { }
  
  activeTodos: ToDo[];
  completedTodos: ToDo[];
  todoMessage: string;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.todoService.GetToDoList().subscribe((data: ToDo[]) => {
      this.activeTodos = data.filter((a) => !a.complete);
      this.completedTodos = data.filter((a) => a.complete);
    });
  }
}
