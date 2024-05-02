import {Component, inject, OnInit} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatDivider } from '@angular/material/divider';
import { Products } from '../products';
import {JsonPipe} from '@angular/common';
import { HttpClient} from "@angular/common/http";
import {response} from "express";

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

  public getProduct() {


    /*
    return fetch(
      'https://backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/products/id/1',
      {"method": "GET"}
    )
      .then(res =>console.log(res))

      .then(res => res.json())
      .then((res) => {
        return res as Products;
      });*/
  }

  ngOnInit() {
    this.http.get<any>('https://backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/products/id/1').subscribe(data => {
      console.log(data.total);
    })
  }

  /*


  httpsClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.httpClient
      .get('backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/products/id/{1}')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });
  }
  constructor(private httpClient: HttpClient) {}*/

  title = response;
  description = 'DESCRIPTION';
  PRICE = '40';
  Features = 'Well it seems nice. Right ?';
  Creator = 'Will Smith';
  IMG =
    '../../assets/Images/python-logo-png-this-free-icons-png-design-of-python-language-lo-10@1x.png';
}
