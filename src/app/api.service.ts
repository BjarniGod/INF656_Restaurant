import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private webReqService: WebRequestService) { }

  createMenuItem(title: string, price: number) {
    return this.webReqService.post('/menu_items', { title , price });
  }

  // getMenuItems()
}
