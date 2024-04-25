import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {MatDivider} from "@angular/material/divider";
import {MatToolbar} from "@angular/material/toolbar";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    MatDivider,
    MatToolbar,
    FooterComponent,
    RouterLink,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
