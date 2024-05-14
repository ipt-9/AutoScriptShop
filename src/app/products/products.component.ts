import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {ProductBoxComponent} from "../product-box/product-box.component";
import {NgFor} from "@angular/common";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductDetailsComponent,
    ProductBoxComponent,
    NgFor,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  response: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.http.get<any>('https://backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/products').subscribe(data => {
      this.response = data;
    })
  }

  productClicked(id: number) {
    this.router.navigate(['/product-details', id])
  }
}
