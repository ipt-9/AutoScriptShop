import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-termsandconditions',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './termsandconditions.component.html',
  styleUrl: './termsandconditions.component.scss',
})
export class TermsandconditionsComponent {}
