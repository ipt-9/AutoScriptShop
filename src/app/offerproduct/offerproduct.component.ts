import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-offerproduct',
  standalone: true,
  imports: [
    MatCheckbox,
    FormsModule,
    NavbarComponent,
    FooterComponent,
    RouterLink,
  ],
  templateUrl: './offerproduct.component.html',
  styleUrl: './offerproduct.component.scss',
})
export class OfferproductComponent {
  checked: boolean = false;
  title?: string;
  body?: string;
  features?: string;
  price?: number;
  script?: string;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  submitForm() {
    if (
      !this.checked ||
      !this.title ||
      !this.body ||
      !this.features ||
      !this.price ||
      !this.script ||
      !sessionStorage.getItem('token')
    ) {
      return;
    }

    const token = sessionStorage.getItem('token');

    const body = {
      title: this.title,
      body: this.body,
      features: this.features,
      price: this.price,
      script: this.script,
    };
    const headers = new HttpHeaders({ Authorization: `Bearer ${ token }` });
    this.http
      .post<any>(
        'http://127.0.0.1:8000/api/products/create/',
        body,
        { headers: headers },
      )
      .subscribe({
        next: () => console.log('success'),
        error: (err) => console.error('error: ', err),
      });
  }
}
