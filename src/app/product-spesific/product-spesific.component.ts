import {Component, inject, OnInit} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatDivider } from '@angular/material/divider';
import {JsonPipe} from '@angular/common';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-product-spesific',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MatDivider, JsonPipe],
  templateUrl: './product-spesific.component.html',
  styleUrl: './product-spesific.component.scss',
})
export class ProductSpesificComponent implements OnInit{
  response: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any>('https://backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/products/id/51').subscribe(data => {
      this.response = data;
    })
  }

  Creator = 'Will Smith';
  IMG =
    '../../assets/Images/python-logo-png-this-free-icons-png-design-of-python-language-lo-10@1x.png';
}
