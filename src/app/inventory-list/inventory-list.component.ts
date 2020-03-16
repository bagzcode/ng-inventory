import { Component, OnInit } from '@angular/core';

import { InventoryService } from '../core/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  items;
  selectedItem;

  constructor( 
    private inventoryitem : InventoryService
  ) { }

  ngOnInit(): void {
    this.items = this.inventoryitem.getInventories();
  }

  selectItem(item){
    this.selectedItem = item;
  }

}
