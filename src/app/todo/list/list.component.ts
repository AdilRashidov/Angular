import { Component, OnInit } from '@angular/core';

import { ListService} from '../../shared/services/list.service'
import { List } from '../../shared/models/list'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  UrLists: List[];
  completedTodos: List[];
  constructor( private listService:ListService) { }

  ngOnInit() {
    this.ListSearch();
  }
  ListSearch()
  {
    this.listService.GetToDoList().subscribe((data: List[]) => 
      {
         this.UrLists = data;
        //this.completedTodos = data.filter((a) => a.check); 
      });
  }

}
