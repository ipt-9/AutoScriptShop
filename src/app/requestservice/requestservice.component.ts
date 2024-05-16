import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-requestservice',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    FormsModule,
    PaginatorModule,
    MatCheckbox,
  ],
  templateUrl: './requestservice.component.html',
  styleUrl: './requestservice.component.scss',
})
export class RequestserviceComponent {
  title?: string;
  description?: string;
  tags?: string;
  price?: number;
  checked?: boolean;
}
