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

  newMenuItem: any = {
    _id: '',
    itemName: '',
    description: '',
    price: '',
    itemImage: '',
    category: '',
    calories: ''
  }


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

  getMenuItem(id: string) {
    if(id) {
      this.menuItemService.getMenuItem(id).subscribe((menuItemData) => {
        this.menuItem = menuItemData;
      });
    } else {
      console.log('Menu Item Id is undefined');
    }
  }

  createMenuItem() {
    this.menuItemService.createMenuItem(this.newMenuItem).subscribe({
      next: (newMenuItem) => {
        console.log('Menu Item successfully created: ', newMenuItem);
        this.loadMenuItems()
      },
      error: (error) => {
        console.error('Error creating menu item: ', error)
      }
  });
}

  updatedMenuItem() {
    if(this.menuItem._id && this.menuItem) {
      this.menuItemService.updateMenuItem(this.menuItem).subscribe({
        next: (updateMenuItem) => {
          console.log('Menu Item successfully updated: ', updateMenuItem);
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
