import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { FindCustomerComponent } from './find-customer/find-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    FindCustomerComponent,
    UpdateCustomerComponent,
    ProfileComponent,
  
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
