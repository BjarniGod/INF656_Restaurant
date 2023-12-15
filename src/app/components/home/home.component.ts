import { Component } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item/menu-item.model';
import { MenuItemService } from 'src/app/services/menu-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  selectedCategory = 'All';
  menuItems: MenuItem[] = [];

  constructor(private menuItemService: MenuItemService) {}

  ngOnInit(): void {
    this.menuItemService.getMenuItems().subscribe((data: any) => {
      this.menuItems = data as MenuItem[];
    });
  }

  selCat(category: string) {
    this.selectedCategory = category;
  }

}
