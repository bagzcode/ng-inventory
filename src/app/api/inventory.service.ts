import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private http: HttpClient
  ) { }

  getInventory(){
    return this.http.get('http://localhost:8000/api/inventories');
  }
}
