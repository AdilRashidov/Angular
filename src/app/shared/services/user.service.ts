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
import { pipe } from 'rxjs';


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

    register(user:UserRegistration) {
    return this.http.post(this.baseUrl + "/account/register", user);
  }  

  login(username: string, password: string) {
    return this.http.post<any>(this.baseUrl+'/auth/login', { email, password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
}

  logout() {
    localStorage.removeItem('currentUser');
  }
}
