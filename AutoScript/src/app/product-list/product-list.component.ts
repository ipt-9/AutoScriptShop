import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from './product-list.component.scss';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error(err),
      // Optionally handle the completion
    });
  }
}

export interface Product {
  id: number;
  user_id: number;
  title: string;
  body: string;
  features: string;
  price: number;
  rating: number;
  script: string;
  created_at: string;
  updated_at: string;
}
