import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, HttpClientModule, MatCheckboxModule, SliderModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})

export class FilterComponent {
  automationScripts = false;
  webTemplate = false;
  framework = false;
  setupScripts = false;
  backendSolutions = false;
  frontendSolutions = false;
  Python = false;
  C = false;
  PHP = false;
  CSS = false;
  Powershell = false;
  freelanceRating = false;

  rangeValues: number[] = [20, 80];
  products: any;

  constructor(private http: HttpClient) {}

  submitForm() {
    const tags = [];
    if (this.automationScripts) {
      tags.push('automationscripts');
    }
    if (this.webTemplate) {
      tags.push('webtemplate');
    }
    if (this.framework) {
      tags.push('framework');
    }
    if (this.setupScripts) {
      tags.push('setupscripts');
    }
    if (this.backendSolutions) {
      tags.push('backendsolutions');
    }
    if (this.frontendSolutions) {
      tags.push('frontendsolutions');
    }
    if (this.Python) {
      tags.push('python');
    }
    if (this.C) {
      tags.push('csharp');
    }
    if (this.PHP) {
      tags.push('php');
    }
    if (this.CSS) {
      tags.push('css');
    }
    if (this.Powershell) {
      tags.push('powershell');
    }
  }
}
