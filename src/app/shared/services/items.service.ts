import { Injectable } from '@angular/core';
interface Item {
  name: string;
  count: number;
  checked: boolean;
  // id?: number;
}
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  checked=true;
  count = 5;
  items: Item[] = [
  ]
  constructor() {
    this.items = this.getItemsFromStorage();
   }
   
  addItem(item) {
    this.items.push(item);
    console.log(this.items);
  }

  getDoneItems(item) {
    this.items.push(item);
  }

  deleteItem(i){
    this.items.splice(i,1)
  }

  saveItemsToStorage(){
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  getItemsFromStorage() {
    const itemsJson = localStorage.getItem('items');
    if (itemsJson) {
      const items = JSON.parse(itemsJson);
      return items;
    }
    return [];
  }
}
