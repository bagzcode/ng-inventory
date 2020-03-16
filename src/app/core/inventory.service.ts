import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  //code generator ==> program(2) + group_item(3) + location (4) + date_entry(6) + seq(3)

  constructor(
    private http: HttpClient
  ) { }

  getInventories(){
    return this.http.get('/assets/inventories.json');
  }

  //public addInventories(inventory: { id, code, name_item, location, group_item,  program, description }){
  //  return this.inventories.push(inventory);
  //}
}
