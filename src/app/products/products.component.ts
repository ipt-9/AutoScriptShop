import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductSpesificComponent} from "../product-spesific/product-spesific.component";
import {ProductBoxComponent} from "../product-box/product-box.component";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductSpesificComponent,
    ProductBoxComponent,
    NgFor
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  response: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://127.0.0.1:8000/api/products').subscribe(data => {
      this.response = data;
    })
  }
}
