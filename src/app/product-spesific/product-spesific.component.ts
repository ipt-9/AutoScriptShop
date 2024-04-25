import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product-spesific',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './product-spesific.component.html',
  styleUrl: './product-spesific.component.scss',
})
export class ProductSpesificComponent {}
