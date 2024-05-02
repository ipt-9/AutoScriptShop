import { Component, OnInit, inject } from '@angular/core';
import { CommonModule} from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  standalone: true,
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {
  httpsClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.httpClient
      .get('backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/products')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });
  }
  constructor(private httpClient: HttpClient) {}


}
