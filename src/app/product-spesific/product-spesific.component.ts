import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-product-spesific',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MatDivider],
  templateUrl: './product-spesific.component.html',
  styleUrl: './product-spesific.component.scss',
})
export class ProductSpesificComponent {
  title = 'TITLE';
  description = 'DESCRIPTION';
  PRICE = '20';
  Features = 'Well it seems nice. Right ?';
  Creator = 'Will Smith';
}
