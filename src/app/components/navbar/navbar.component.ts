import { Component, OnInit } from '@angular/core';
import { appService } from 'src/app/service/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private appService: appService) { }

  ngOnInit(): void {
    this.cartCount();

    // Subscribe to the cartUpdated event
    this.appService.cartUpdated.subscribe(() => {
      this.cartCount();
    });
  }

  count: number | undefined;

  cartCount() {
    this.count = this.appService.getCart().length;
  }
}
