import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './CustomerComponents/create-customer/create-customer.component';
import { ListCustomerComponent } from './CustomerComponents/list-customer/list-customer.component';
import { FindCustomerComponent } from './CustomerComponents/find-customer/find-customer.component';
import { UpdateCustomerComponent } from './CustomerComponents/update-customer/update-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateSellerComponent } from './SellerComponents/create-seller/create-seller.component';
import { ListReviewsComponent } from './ReviewsComponents/list-reviews/list-reviews.component';
import { UpdateReviewsComponent } from './ReviewsComponents/update-reviews/update-reviews.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    ListReviewsComponent,
    FindCustomerComponent,
    UpdateCustomerComponent,
    ProfileComponent,
    CreateSellerComponent,
    UpdateReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
