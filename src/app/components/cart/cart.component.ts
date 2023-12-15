import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MenuItem } from 'src/app/models/menu-item/menu-item.model';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: MenuItem[] = [];

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems();
  }
  
  placeOrder(orderData: any): void {
    const order: Order = {
      _id: '', // This would usually be set by the backend
      firstName: orderData.firstName,
      lastName: orderData.lastName,
      email: orderData.email,
      menuItems: this.cartItems.map(item => item._id) // Assuming each item has an _id
    };

    this.orderService.createOrder(order).subscribe({
      next: (createdOrder) => {
        console.log('Order successfully placed:', createdOrder);
        // Optionally navigate to a thank you or order confirmation page
        this.router.navigate(['/order-placed']);
      },
      error: (error) => {
        console.error('Error placing order:', error);
        // Handle errors (e.g., show an error message to the user)
      }
    });

    // Clear the cart
    this.cartService.clearCart();
    this.cartItems = [];
  }
  
  
  

  // Additional methods for cart modification
}
