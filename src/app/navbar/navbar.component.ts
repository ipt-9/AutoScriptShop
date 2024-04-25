import { Component } from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatToolbar} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatDivider, MatToolbar, NgOptimizedImage, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
