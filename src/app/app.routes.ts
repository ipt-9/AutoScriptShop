import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TESTComponent } from './test/test.component';
import { DumpComponent } from './dump/dump.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { FilterComponent } from './filter/filter.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { RequestBoxComponent } from './request-box/request-box.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { OfferproductComponent } from './offerproduct/offerproduct.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'requests',
    component: RequestsComponent,
  },
  {
    path: '',
    component: DumpComponent,
  },
  {
    path: 'test',
    component: TESTComponent,
  },
  {
    path: 'dump',
    component: DumpComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'product-box',
    component: ProductBoxComponent,
  },
  {
    path: 'filter',
    component: FilterComponent,
  },
  {
    path: 'request-details',
    component: RequestDetailsComponent,
  },
  {
    path: 'request-box',
    component: RequestBoxComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'offerproduct',
    component: OfferproductComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent,
  },
  {
    path: 'termsandconditions',
    component: TermsandconditionsComponent,
  },
];
