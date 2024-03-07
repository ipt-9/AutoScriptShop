import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { BuyAsGuestMessageComponent } from './buy-as-guest-message/buy-as-guest-message.component';
import { BuyAsGuestComponent } from './buy-as-guest/buy-as-guest.component';
import { CartComponent } from './cart/cart.component';
import { ContactCustomerComponent } from './contact-customer/contact-customer.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateProductMessageComponent } from './create-product-message/create-product-message.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderSpecificComponent } from './order-specific/order-specific.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ProductSpecificComponent } from './product-specific/product-specific.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseHistoryExtendedComponent } from './purchase-history-extended/purchase-history-extended.component';
import { RequestCreationMessageSentComponent } from './request-creation-message-sent/request-creation-message-sent.component';
import { RequestServiceMessageComponent } from './request-service-message/request-service-message.component';
import { RequestServiceComponent } from './request-service/request-service.component';
import { RequestsSpecificComponent } from './requests-specific/requests-specific.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { HomeComponent } from './home/home.component';
import { RouterLink } from '@angular/router';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { UserComponent } from './user/user.component';
import { UserHub2Component } from './user-hub-2/user-hub-2.component';
import { UserHub3Component } from './user-hub-3/user-hub-3.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http'; // Here's the import

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    BlogComponent,
    BuyAsGuestMessageComponent,
    BuyAsGuestComponent,
    CartComponent,
    ContactCustomerComponent,
    CreateAccountComponent,
    CreateProductMessageComponent,
    CreateProductComponent,
    DisclaimerComponent,
    ImpressumComponent,
    LoginComponent,
    LogoutComponent,
    OrderSpecificComponent,
    PasswordResetComponent,
    ProductSpecificComponent,
    ProductsComponent,
    PurchaseHistoryExtendedComponent,
    RequestCreationMessageSentComponent,
    RequestServiceMessageComponent,
    RequestServiceComponent,
    RequestsSpecificComponent,
    TaskboardComponent,
    HomeComponent,
    TermsConditionsComponent,
    UserComponent,
    UserHub2Component,
    UserHub3Component,
    ProductListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterLink, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
