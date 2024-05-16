import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-offerproduct',
  standalone: true,
  imports: [MatCheckbox, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './offerproduct.component.html',
  styleUrl: './offerproduct.component.scss',
})
export class OfferproductComponent {
  checked: 'false' | undefined;
  submitForm() {
    // only submitable if AGB accepted!
  }
}
