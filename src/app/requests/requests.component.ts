import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {RequestBoxComponent} from "../request-box/request-box.component";

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    NgForOf,
    RequestBoxComponent,
  ],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss'
})

export class RequestsComponent {
  response: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.http.get<any>('https://backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/tasks').subscribe(data => {
      this.response = data;
    })
  }

  requestClicked(id: number) {
    this.router.navigate(['/product-details', id])
  }
}
