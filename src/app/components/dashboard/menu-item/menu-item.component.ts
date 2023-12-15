import { Component } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item/menu-item.model';
import { MenuItemService } from 'src/app/services/menu-item.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  selectedCategory = 'All';

  menuItems: MenuItem[] = [];
  menuItem: any = {
    _id: '',
    itemName: '',
    description: '',
    price: '',
    itemImage: '',
    category: '',
    calories: ''
  }

  pizza = {
    id: 1,
    itemName: 'Pizza',
    description: 'Huge pizza',
    price: 10.99,
    category: 'Pizza',
    itemImage: 'https://i.ibb.co/DLj80hM/grilled-Salmon.webp',
    calories: 34
  }
  burger = {
    id: 2,
    itemName: 'Burger',
    description: 'Awesome Burger',
    price: 9.99,
    category: 'Burger',
    itemImage: 'https://i.ibb.co/DLj80hM/grilled-Salmon.webp',
    calories: 34
  }
  wrap = {
    id: 3,
    itemName: 'Wrap',
    description: 'Great Wrap',
    price: 8.99,
    category: 'Wrap',
    itemImage: 'https://i.ibb.co/DLj80hM/grilled-Salmon.webp',
    calories: 34
  }
  // menuItems = [this.pizza, this.burger, this.wrap];

  constructor(private menuItemService: MenuItemService) {}

  ngOnInit(): void {
    this.menuItemService.getMenuItems().subscribe((data: any) => {
      this.menuItems = data as MenuItem[];
    });
  }

  loadMenuItems() {
    this.menuItemService.getMenuItems().subscribe((data: any) => {
      this.menuItems = data;
    });
  }

  getEmployee(id: string) {
    if(id) {
      this.menuItemService.getMenuItem(id).subscribe((menuItemData) => {
        this.menuItem = menuItemData;
      });
    } else {
      console.log('Menu Item Id is undefined');
    }
  }

  updatedMenuItem() {
    if(this.menuItem._id && this.menuItem) {
      this.menuItemService.updateMenuItem(this.menuItem).subscribe({
        next: (updateMenuItem) => {
          console.log('Menu Item successfully updated: ', this.updatedMenuItem);
          this.loadMenuItems()
        },
        error: (error) => {
          console.error('Error updating menu item: ', error)
        }
    });
    } else {
      console.log('Menu Item Id is undefined');
    }
  }

  deleteMenuItem(id: string) {
    this.menuItemService.deleteMenuItem(id).subscribe((response) => {
      console.log('Menu Item deleted: ', response);
      this.loadMenuItems();
    })
  }
}
