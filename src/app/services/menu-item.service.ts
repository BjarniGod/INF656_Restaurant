import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/menu-item/menu-item.model';


@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private BASE_URL = 'http://localhost:3100/menu_items';

  constructor(private http: HttpClient) { }

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${this.BASE_URL}`)
  }

  getMenuItem(id: string): Observable<MenuItem> {
    return this.http.get<MenuItem>(`${this.BASE_URL}/${id}`)
  }

  updateMenuItem(menuItem: MenuItem): Observable<MenuItem> {
    console.log('Sending update request for menu item: ', menuItem);
    const body = {
        id: menuItem._id,
        itemName: menuItem.itemName,
        description: menuItem.description,
        price: menuItem.price,
        itemImage: menuItem.itemImage,
        category: menuItem.category,
        calories: menuItem.calories
    }
    return this.http.put<MenuItem>(`${this.BASE_URL}`, body)
  }

  deleteMenuItem(id: string): Observable<any> {
    return this.http.request('delete',`${this.BASE_URL}`, {
      body: {
        id: id
      }
    });
  }

}
