import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from '../shared/services/user.service';
declare var localStorage : any;

@Injectable({providedIn:'root'})
export class TokenInterceptor implements HttpInterceptor {
    constructor(public auth:UserService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authToken = localStorage.getItem("auth_token");
        request = request.clone({
             setHeaders: {
                Authorization: 'Bearer '+ authToken
            } 
        });
        console.log(request);
    return next.handle(request);  
    }  
  }
