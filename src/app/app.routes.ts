import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TESTComponent } from './test/test.component';
import { DumpComponent } from './dump/dump.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { FilterComponent } from './filter/filter.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestSpesificComponent } from './request-spesific/request-spesific.component';
import { RequestBoxComponent } from './request-box/request-box.component';

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
    path: 'request-spesific',
    component: RequestSpesificComponent,
  },
  {
    path: 'request-box',
    component: RequestBoxComponent,
  },
];
