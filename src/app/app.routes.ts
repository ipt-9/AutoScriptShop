import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TESTComponent } from './test/test.component';
import { DumpComponent } from './dump/dump.component';
import { ProductSpesificComponent } from './product-spesific/product-spesific.component';
import { ProductBoxComponent } from './product-box/product-box.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: '',
    component: HomeComponent,
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
    path: 'product-spesific',
    component: ProductSpesificComponent,
  },
  {
    path: 'product-box',
    component: ProductBoxComponent,
  },
];
