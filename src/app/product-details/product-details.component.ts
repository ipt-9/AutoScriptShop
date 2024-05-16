import {Component, OnInit} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatDivider } from '@angular/material/divider';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    MatDivider,
    AsyncPipe
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit{
  response$?: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.response$ = this.http.get<any>('https://backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/products/id/'+ id)
  }

  Creator = 'Will Smith';
  IMG =
    '../../assets/Images/python-logo-png-this-free-icons-png-design-of-python-language-lo-10@1x.png';
}
