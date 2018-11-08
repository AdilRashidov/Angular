import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistration } from '../../shared/models/user.registration';
import { UserService } from '../../shared/services/user.service';;
import { of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.userService.register(value.email, value.password)
      .pipe(
        catchError(error => {
          this.errors = "Email is already taken";
          this.isRequesting = false;
          return of(error);
        })
      )
    .subscribe(result => {
        debugger;
        this.isRequesting = false
        if (result == "Success"){
          this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
        }
      })
      
     
    }
  }



}