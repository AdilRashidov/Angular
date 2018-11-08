import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http'

import {UserRegistration} from '../models/user.registration'
import { UserLogin } from '../models/user.login';
import { ConfigService } from '../utils/config.service';

import {BaseService} from "./base.service";

import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'; 

// Add the RxJS Observable operators we need in this app.
import {map, tap} from 'rxjs/operators';
import {catchError} from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3/pipe';



@Injectable({providedIn:'root'})

export class UserService extends BaseService {

  baseUrl: string = '';

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
  }

    register(email,password) {
    return this.http.post<string>(this.baseUrl + "/account/register", {email,password});  
};
    

  login(email,password) {
    return this.http.post<any>(this.baseUrl+'/auth/login', { email, password })
          .pipe(map(res=>{ 
                localStorage.setItem('auth_token', res.access_token);
                this.loggedIn = true;
                this._authNavStatusSource.next(true);
                return true;
            }),
             catchError(this.handleError));
          };

  getToken(){
    return localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }
  isLoggedIn() {
    return this.loggedIn;
  }

}
