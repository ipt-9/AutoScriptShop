import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        NavbarComponent,
        FooterComponent,
        RouterLink,
        MatFormField,
        MatInput,
        MatLabel
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email?:string;
  onKeyEmail(value:string) {
    this.email = value
  }
}
