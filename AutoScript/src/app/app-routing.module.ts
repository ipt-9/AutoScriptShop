import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BuyAsGuestComponent } from './buy-as-guest/buy-as-guest.component';
import { BuyAsGuestMessageComponent } from './buy-as-guest-message/buy-as-guest-message.component';
import { CartComponent } from './cart/cart.component';
import { ContactCustomerComponent } from './contact-customer/contact-customer.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateProductMessageComponent } from './create-product-message/create-product-message.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderSpecificComponent } from './order-specific/order-specific.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ProductSpecificComponent } from './product-specific/product-specific.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'buy-as-guest-message', component: BuyAsGuestMessageComponent },
  { path: 'buy-as-guest', component: BuyAsGuestComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact-customer', component: ContactCustomerComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'create-product-message', component: CreateProductMessageComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'order-specific', component: OrderSpecificComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'product-specific', component: ProductSpecificComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
