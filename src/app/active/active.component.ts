import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/services/items.service';
interface ActiveItem {
  name: string;
}
@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  activeItems: ActiveItem[] = [
  ]

  items = null;

  constructor(private itemService: ItemsService) { }

  ngOnInit(): void {
    this.items = this.itemService.items;
    console.log(this.items)
    this.activeItems = this.items.filter(x => !x.checked).map(x => x.name);
  }

}
