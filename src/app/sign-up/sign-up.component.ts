import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {HttpClient} from "@angular/common/http";
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    NavbarComponent,
    MatFormField
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
    const body = {
      username: this.Username,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
    };

    this.http.post<any>('https://backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/products/id/', body).subscribe(data => {
      this.postId = data.id;
    });
  }
}
