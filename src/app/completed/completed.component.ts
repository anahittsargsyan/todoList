import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/services/items.service';
interface DoneItem {
  name: string;
  checked: boolean;
}
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  checked = false;
  doneItems: DoneItem[] = []
  items = null;

  constructor(private itemService: ItemsService) { }
  ngOnInit(): void {
    this.items = this.itemService.items;
    this.doneItems = this.items.filter(x => x.checked).map(x => x.name);
  }

  deleteItem(i){
    this.doneItems.splice(i,1)
   }

   delete(doneItems: DoneItem){
    let index = this.doneItems.indexOf(doneItems);
    console.log(index);
    this.doneItems.splice(index, 1);
  }


}

