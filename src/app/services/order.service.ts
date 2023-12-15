import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order/order.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private apiService: ApiService) {}
  private BASE_URL = `${this.apiService.BASE_URL}/orders`


  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.BASE_URL}`, order);
  }
  
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.BASE_URL}`)
  }

}
