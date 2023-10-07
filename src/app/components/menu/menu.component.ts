// menu.component.ts

import { Component, OnInit } from '@angular/core';
import { appService } from 'src/app/service/app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: any[] = [];
  currentPage = 1; // Initial page
  itemsPerPage = 12;
  menus_count = 0;

  // Add these properties
  selectedMenu: any; // To store the selected menu for the add-cart component
  showAddCart: boolean = false; // To control the visibility of the add-cart component

  constructor(
    private appservice: appService ) { }

  ngOnInit(): void {
    this.loadMenus();
  }

  loadMenus(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.appservice.getMenu()
      .subscribe(menus => {
        this.menus_count = menus.length;
        this.menus = menus.slice(startIndex, endIndex);
      });
  }

  addToCart(menu: any): void {
    // Set the selected menu and show the add-cart component
    this.selectedMenu = menu;
    this.showAddCart = true;
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.loadMenus();
  }

  getTotalPages(): number {
    return Math.ceil(this.menus_count / this.itemsPerPage);
  }

  getPages(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1);
  }

  closeAddCart(): void {
    this.showAddCart = false;
  }
}
