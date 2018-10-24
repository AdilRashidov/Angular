import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoService } from '../shared/services/todo.service';
import { ToDo } from '../shared/models/todo';
 
@Component({
    templateUrl: './todo-create.component.html'
})
export class TodoCreateComponent {
 
    todo: ToDo = new ToDo();    // добавляемый объект
    constructor(private todoService: ToDoService, private router: Router) { }
    add() {
        var newToDo: ToDo ={
            name: this.todo.name,
            desc: this.todo.desc,
            tags: 'nada'
        }
    this.todoService.ToDoAdd(newToDo).subscribe(()=>{
        this.todo.name='';
        this.todo.desc='';
    })
    }
}