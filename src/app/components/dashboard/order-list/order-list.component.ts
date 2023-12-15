import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item/menu-item.model';
import { Order } from 'src/app/models/order/order.model';
import { MenuItemService } from 'src/app/services/menu-item.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  itemTitles: { [key: string]: string } = {}; // Map to store item titles

  constructor(private orderService: OrderService, private menuItemService: MenuItemService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data: any) => {
      this.orders = data as Order[];
      this.loadItemTitles();
    });
  }

  loadItemTitles(): void {
    this.orders.forEach(order => {
      order.menuItems.forEach(itemId => {
        this.menuItemService.getMenuItem(itemId).subscribe((menuItem: MenuItem) => {
          this.itemTitles[itemId] = menuItem.itemName;
        });
      });
    });
  }

  getItemTitle(id: string): string {
    return this.itemTitles[id] || 'Loading...';
  }
}