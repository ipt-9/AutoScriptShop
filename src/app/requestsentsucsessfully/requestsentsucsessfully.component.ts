import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-requestsentsucsessfully',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './requestsentsucsessfully.component.html',
  styleUrl: './requestsentsucsessfully.component.scss'
})
export class RequestsentsucsessfullyComponent {

}
