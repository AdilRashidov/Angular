import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router, ActivatedRoute } from '@angular/router';
import { ToDoService } from '../../shared/services/todo.service';
import { ToDo } from '../../shared/models/todo';
 
@Component({
    templateUrl: './todo-edit.component.html',
    styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
 
    id: number;
    todo: ToDo;    // изменяемый объект
    loaded: boolean = false;
 
    constructor(private todoService: ToDoService, private router: Router, activeRoute: ActivatedRoute,
       private location:Location) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
 
    ngOnInit() {
        if (this.id)
            this.todoService.ToDoGet(this.id)
                .subscribe((data: ToDo) => {
                    this.todo = data;
                    if (this.todo != null) this.loaded = true;
                });
    }
 
    save() {
        this.todoService.ToDoUpdate(this.todo).subscribe(data => this.router.navigateByUrl("/todo/list"));
        this.location.back;
    }

    nazad(){
        this.location.back();
        
    }
}