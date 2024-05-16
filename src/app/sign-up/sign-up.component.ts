import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {HttpClient} from "@angular/common/http";
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatIcon} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

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
    FormsModule
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
    const body = {
      username: this.Username,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
    };

    this.http.post<any>('https://backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/user/create/', body).subscribe(data => {
      this.postId = data.id;
    });
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


/*


Mögliche Lösung?
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { HttpClient } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";

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
    MatIconModule,
    FormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  Username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;

  postId: any;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Initialization logic if needed
  }

  createUser() {
    interface User {
      username: string;
      email: string;
      firstName: string;
      lastName: string;
      password: string;
    }

    const user: User = {
      username: this.Username!,
      email: this.email!,
      firstName: this.firstName!,
      lastName: this.lastName!,
      password: this.password!,
    };

    this.http.post<{ id: string }>('https://backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/user/create/', user).subscribe(data => {
      this.postId = data.id;
    });
  }

  onKeyUsername(value: string) {
    this.Username = value;
  }

  onKeyEmail(value: string) {
    this.email = value;
  }

  onKeyFirstname(value: string) {
    this.firstName = value;
  }

  onKeyLastname(value: string) {
    this.lastName = value;
  }

  onKeyPassword(value: string) {
    this.password = value;
  }
}

 */
