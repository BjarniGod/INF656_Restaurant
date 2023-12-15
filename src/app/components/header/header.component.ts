import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  cartQuantity: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartUpdated.subscribe(() => {
      this.updateCartQuantity();
    });
    this.updateCartQuantity();
  }

  updateCartQuantity(): void {
    const cartItems = this.cartService.getCartItems();
    this.cartQuantity = cartItems.length;
  }
}
