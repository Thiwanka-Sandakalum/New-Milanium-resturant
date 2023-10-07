import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appService } from 'src/app/service/app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderForm: FormGroup;

  cartItems = this.appService.getCart();
  itemCount: number = this.cartItems.length;
  delivery_cost = 200
  isSubmitted = false

  constructor(private appService: appService, private formBuilder: FormBuilder, private router: Router) {
    this.orderForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  getTotal(): number {
    return this.getSubtotal() + this.delivery_cost
  }

  removeItem(index: number): void {
    this.appService.removeCartItem(index);
    this.cartItems.splice(index, 1);
  }

  getSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + item.menu.Price * item.quantity, 0);
  }

  checkout(): void {
    if (this.orderForm.valid) {
      const orderData = this.orderForm.value;
      orderData.pay_method = 'cash';

      this.appService.placeOrder(orderData).subscribe(
        response => {
          console.log('Order placed successfully');
          this.isSubmitted = true;
          this.router.navigate(['/checkout']);
          console.log('Response from server:', response);
        },
        error => {
          console.error('Error placing order', error);
        }
      );
    } else {
      // Mark the form controls as touched to display validation errors
      this.orderForm.markAllAsTouched();
    }

  }
}
