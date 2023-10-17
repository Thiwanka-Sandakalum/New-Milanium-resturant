import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class appService {
  private url = 'https://restaurant-milanium.azurewebsites.net';
  private cart: any[] = [];
  cartUpdated = new EventEmitter<void>();


  constructor(private http: HttpClient) { }

  // API service
  getMenu(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/api/menu`).pipe(
      catchError(this.handleError<any[]>('getMenu', []))
    );
  }

  placeOrder(orderData: any): Observable<any> {
    this.loadCartFromLocalStorage();
    const orderItems = this.cart.map(item => ({ menu_id: item.menu.id, quantity: item.quantity }));
    const order = {
      "order_items": orderItems,
      "order_data": orderData
    };

    console.log(order);

    return this.http.post<any>(`${this.url}/api/order`, order).pipe(
      tap(response => {
        console.log('Order placed successfully', response);
        this.clearCart();
        this.cartUpdated.emit();
      }),
      catchError(error => {
        console.error('Error placing order', error);
        if (error.status === 404 && error.error && error.error.error === 'This order is already placed') {
          alert('Error: This order is already placed.');
        } else {
          alert('Error placing order. Please try again later.');
        }
        throw error;
      })
    );
  }




  // Local storage service
  addCart(item: any): void {
    this.loadCartFromLocalStorage();
    this.cart.push(item);
    this.saveCartToLocalStorage();
    this.cartUpdated.emit();
  }

  getCart(): any[] {
    this.loadCartFromLocalStorage();
    return this.cart;
  }

  removeCartItem(index: number): void {
    this.loadCartFromLocalStorage();
    this.cart.splice(index, 1);
    this.saveCartToLocalStorage();
    this.cartUpdated.emit();
  }

  clearCart(): void {
    this.cart = [];
    this.saveCartToLocalStorage();
    this.cartUpdated.emit();
  }

  private loadCartFromLocalStorage(): void {
    const cartString = localStorage.getItem('cart');
    this.cart = cartString ? JSON.parse(cartString) : [];
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // Handle HTTP errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
