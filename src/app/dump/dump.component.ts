import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-dump',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './dump.component.html',
  styleUrl: './dump.component.scss'
})
export class DumpComponent {

}
