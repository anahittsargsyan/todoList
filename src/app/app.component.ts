import { Component } from '@angular/core';
import { ItemsService } from './shared/services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoList';
  addedItem = null;
  count = 1;
  name: string = '';
  constructor( private itemService: ItemsService) {}
  added() {
    this.itemService.addItem({
      name: this.name,
      count: this.count++
    });
    this.name = '';
    this.itemService.saveItemsToStorage()
  }
  handleKeyUp(e){
    if(e.keyCode === 13){
      this.added()
    }
 }



}
