import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {MatDivider} from "@angular/material/divider";
import {NavbarComponent} from "../navbar/navbar.component";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-request-details',
  standalone: true,
    imports: [
        FooterComponent,
        MatDivider,
        NavbarComponent
    ],
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.scss'
})

export class RequestDetailsComponent {
  response: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.http.get<any>('https://backend.auto-script-shop-bmsd21a.bbzwinf.ch/api/tasks/id/'+ id).subscribe(data => {
      this.response = data;
    })
  }

  likes = 111;
  Creator = 'Will Smith';
  IMG =
    '../../assets/Images/python-logo-png-this-free-icons-png-design-of-python-language-lo-10@1x.png';

}
