import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';
import { Pagination } from './models/pagination.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly API_BASE_URI = 'https://localhost:7047';
  private readonly API_PRODUCTS_URI = this.API_BASE_URI + '/api/products';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Pagination> {
    const productsObservable = this.httpClient.get<Pagination>(
      this.API_PRODUCTS_URI
    );
    productsObservable.subscribe({ error: console.error });
    return productsObservable;
  }
}
