import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {MatDivider} from "@angular/material/divider";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-request-spesific',
  standalone: true,
    imports: [
        FooterComponent,
        MatDivider,
        NavbarComponent
    ],
  templateUrl: './request-spesific.component.html',
  styleUrl: './request-spesific.component.scss'
})
export class RequestSpesificComponent {

  title = "TItEL";
  description = 'DESCRIPTION';
  PRICE = '40';
  Features = 'Well it seems nice. Right ?';
  Creator = 'Will Smith';
  likes = "1111"
  IMG =
    '../../assets/Images/python-logo-png-this-free-icons-png-design-of-python-language-lo-10@1x.png';

}
