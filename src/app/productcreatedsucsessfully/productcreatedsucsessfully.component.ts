import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-productcreatedsucsessfully',
  standalone: true,
    imports: [
        FooterComponent,
        NavbarComponent
    ],
  templateUrl: './productcreatedsucsessfully.component.html',
  styleUrl: './productcreatedsucsessfully.component.scss'
})
export class ProductcreatedsucsessfullyComponent {

}
