import { EventEmitter, Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item/menu-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartKey = 'cartItems';

  getCartItems(): MenuItem[] {
    const items = localStorage.getItem(this.cartKey);
    return items ? JSON.parse(items) : [];
  }

  cartUpdated = new EventEmitter<void>();

  addToCart(item: MenuItem): void {
    const currentItems = this.getCartItems();
    currentItems.push(item);
    localStorage.setItem(this.cartKey, JSON.stringify(currentItems));
    this.cartUpdated.emit();
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }

  removeFromCart(index: number): void {
    const items = this.getCartItems();
    items.splice(index, 1);
    localStorage.setItem(this.cartKey, JSON.stringify(items));
    this.cartUpdated.emit();
  }
  

  // Additional methods like removeFromCart, updateQuantity can be added here
}
