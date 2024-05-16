import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {ProductBoxComponent} from "../product-box/product-box.component";
import {AsyncPipe, NgFor} from "@angular/common";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {Router} from "@angular/router";
import {FilterComponent} from "../filter/filter.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductDetailsComponent,
    ProductBoxComponent,
    NgFor,
    NavbarComponent,
    FooterComponent,
    FilterComponent,
    AsyncPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  response$?: Observable<any> = this.http.get<any>('https://backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/products');


  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  productClicked(id: number) {
    this.router.navigate(['/product-details', id])
  }
}
