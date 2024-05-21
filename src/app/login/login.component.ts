import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterLink,
    MatFormField,
    MatInput,
    MatLabel,
    FormsModule,
    MatButton,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email?: string;
  password?: string;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login() {
    if (!this.email || !this.password) {
      return;
    }

    const body = {
      email: this.email,
      password: this.password,
    };
    const headers = new HttpHeaders({ Accept: 'application/json' });
    this.http
      .post<any>(
        'http://://127.0.0.1:8000/api/user/login/',
        body,
        { headers: headers },
      )
      .subscribe({
        next: async (data) => {
          sessionStorage.setItem('token', data.token);
          await this.router.navigate(['/dump']);
        },
        error: (err) => console.error('error: ', err),
      });
  }
}
