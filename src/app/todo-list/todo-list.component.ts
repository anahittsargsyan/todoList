import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/services/items.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  count = null;
  todo = null;
  items = null;
  constructor(private itemService: ItemsService,) { }

  ngOnInit(): void {
    this.items = this.itemService.items;
    this.count = this.itemService.count;
  }
  deleteItem(i){
   this.itemService.deleteItem(i);
   this.itemService.saveItemsToStorage()
  }
}
