import { WrappedNodeExpr } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item/menu-item.model';
import { CartService } from 'src/app/services/cart.service';
import { MenuItemService } from 'src/app/services/menu-item.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  selectedCategory = 'All';
  menuItems: MenuItem[] = [];

  constructor(
    private menuItemService: MenuItemService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.menuItemService.getMenuItems().subscribe((data: any) => {
      this.menuItems = data as MenuItem[];
    });
  }

  selCat(category: string) {
    this.selectedCategory = category;
  }

  addToBag(item: MenuItem): void {
    this.cartService.addToCart(item);

  }


}
