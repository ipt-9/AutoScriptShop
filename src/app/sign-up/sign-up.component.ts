import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatIcon} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

interface User{
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    NavbarComponent,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatButtonModule,
    FooterComponent,
    MatIcon,
    FormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit{
  Username?:string;
  email?:string;
  firstName?:string;
  lastName?:string;
  password?:string;

  postId:any;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
  }

  createUser() {
    if(!this.Username || !this.email||!this.firstName||!this.lastName||!this.password){
      return
    }
    const body: User = {
      username: this.Username,
      email: this.email,
      firstname: this.firstName,
      lastname: this.lastName,
      password: this.password,
    };
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    this.http.post<any>('http://localhost:8000/api/user/create/', body, {headers: headers}).subscribe({
      next: () => console.log('success', ),
      error: (err) => console.error('error: ', err)
    })
  }

  onKeyUsername(value:string) {
    this.Username = value
  }
  onKeyEmail(value:string) {
    this.email = value
  }
  onKeyFirstname(value:string) {
    this.firstName = value
  }
  onKeyLastname(value:string) {
    this.lastName = value
  }
  onKeyPassword(value:string) {
    this.password = value
  }
}
