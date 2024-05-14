import {Component, inject, OnInit} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatDivider } from '@angular/material/divider';
import {JsonPipe} from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MatDivider, JsonPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit{
  response: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.http.get<any>('https://backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/products/id/'+ id).subscribe(data => {
      this.response = data;
    })
  }

  Creator = 'Will Smith';
  IMG =
    '../../assets/Images/python-logo-png-this-free-icons-png-design-of-python-language-lo-10@1x.png';
}
