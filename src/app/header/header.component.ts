import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';

import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit,OnDestroy {

  status: boolean;
 subscription:Subscription;

  constructor() {     
   }

   logout() {
    // this.userService.logout();       
  }

  ngOnInit() {
  //  this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
  }

   ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}