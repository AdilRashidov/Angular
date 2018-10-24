import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http'

import {UserRegistration} from '../models/user.registration'
import { UserLogin } from '../models/user.login';
import { ConfigService } from '../utils/config.service';

import {BaseService} from "./base.service";
import { ToDo} from '../models/todo'

import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'; 

// Add the RxJS Observable operators we need in this app.
import {map, tap} from 'rxjs/operators';
import {catchError} from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3/pipe';



@Injectable({providedIn:'root'})

export class ToDoService extends BaseService {
    baseUrl: string = '';

    // Observable navItem source
    private _authNavStatusSource = new BehaviorSubject<boolean>(false);
    // Observable navItem stream
    authNavStatus$ = this._authNavStatusSource.asObservable();
  
    private loggedIn = false;
    AuthToken:String;

    constructor(private http: HttpClient, private configService: ConfigService) {
        super();
        this.loggedIn = !!localStorage.getItem('auth_token');
        this._authNavStatusSource.next(this.loggedIn);
        this.baseUrl = configService.getApiURI();
      }

      GetToDoList() 
      {        
        return this.http.get(this.baseUrl + "/todo");
      }
      
      ToDoAdd(todo: ToDo)
      {
        return this.http.post(this.baseUrl +"/todo",todo)
      }

      ToDoDo(id:number)
      {
        return this.http.put(this.baseUrl + "/todo/do/"+id,{});
      }
      ToDoDelete(id:number)
      {
        return this.http.delete(this.baseUrl+"/todo/"+id);
      }
      ToDoGet(id:number)
      {
        return this.http.get(this.baseUrl+"/todo/"+id);
      }
      ToDoUpdate(todo:ToDo)
      {
        return this.http.put(this.baseUrl+ "/todo/"+todo.id,todo)
      }



    }