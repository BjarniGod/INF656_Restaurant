import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {

  constructor(private apiService: ApiService) { }

  title = 'hays_kitchen';
  status = false;
  menuItems: any;

  addToggle() {
    this.status = !this.status;       
  }

  createMenuItem() {
    return this.apiService.createMenuItem('Lamb', 9.99).subscribe((response: any) => {
      console.log(response);
    })
  }
}