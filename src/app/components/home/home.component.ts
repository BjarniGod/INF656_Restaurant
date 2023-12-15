import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  selectedCategory = 'All';

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
  menuItems = [this.pizza, this.burger, this.wrap];

  constructor() {
    console.log(this.menuItems);
  }

  selCat(category: string) {
    this.selectedCategory = category;
  }

}
