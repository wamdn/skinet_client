import { Component, OnInit } from '@angular/core';
import { Pagination } from './models/pagination.model';
import { Product } from './models/product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  products: any[] = [];

  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((response: Pagination) =>
        this.products = response.data
      );
  }
}
