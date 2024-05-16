import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {RequestBoxComponent} from "../request-box/request-box.component";
import {FilterComponent} from "../filter/filter.component";
import {ProductBoxComponent} from "../product-box/product-box.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    NgForOf,
    RequestBoxComponent,
    FilterComponent,
    ProductBoxComponent,
    AsyncPipe,
  ],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss'
})

export class RequestsComponent {
  response$?: Observable<any> =    this.http.get<any>('https://backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/tasks');


  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  requestClicked(id: number) {
    this.router.navigate(['/product-details', id])
  }
}
