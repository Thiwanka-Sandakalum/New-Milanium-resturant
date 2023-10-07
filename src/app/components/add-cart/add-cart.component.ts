// add-cart.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { appService } from 'src/app/service/app.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
  @Input() menu: any;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  selectedQuantity: number = 1;
  quantities: number[] = [1, 2, 3, 4, 5];
  Total: number = 0;
  item: object = {}

  constructor(private apiService: appService) { }

  ngOnInit(): void {
    this.updateTotal(); // Initialize Total based on the default selectedQuantity
  }

  addToCart(): void {
    // Implement your cart logic here, considering the selectedQuantity and menu details
    console.log(`Added ${this.selectedQuantity} ${this.menu.id}(s) to the cart`);
    this.closeAddCart();
    this.item = { menu: this.menu, quantity: this.selectedQuantity }
    console.log(this.item)
    this.apiService.addCart(this.item)
  }

  closeAddCart(): void {
    this.close.emit();
  }

  // Update the Total based on the selectedQuantity
  updateTotal(): void {
    this.Total = this.selectedQuantity * this.menu.Price;
  }
}
