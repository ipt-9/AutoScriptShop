import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatDivider } from '@angular/material/divider';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-spesific',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MatDivider],
  templateUrl: './product-spesific.component.html',
  styleUrl: './product-spesific.component.scss',
})
export class ProductSpesificComponent {
  httpsClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.httpClient
      .get('backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/products/id/{1}')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });
  }
  constructor(private httpClient: HttpClient) {}

  title = 'TITLE';
  description = 'DESCRIPTION';
  PRICE = '40';
  Features = 'Well it seems nice. Right ?';
  Creator = 'Will Smith';
  IMG =
    '../../assets/Images/python-logo-png-this-free-icons-png-design-of-python-language-lo-10@1x.png';
}
