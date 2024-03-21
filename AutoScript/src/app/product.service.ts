import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product-list/product-list.component'; // The path might differ

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/products'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
