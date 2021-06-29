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
import { CreateReviewsComponent } from './ReviewsComponents/create-reviews/create-reviews.component';
import { FindReviewsComponent } from './ReviewsComponents/find-reviews/find-reviews.component';
import { CreateOrdersComponent } from './OrderComponent/create-orders/create-orders.component';
import { FindOrdersComponent } from './OrderComponent/find-orders/find-orders.component';
import { ListOrdersComponent } from './OrderComponent/list-orders/list-orders.component';
import { UpdateOrdersComponent } from './OrderComponent/update-orders/update-orders.component';
import { CreateOrderDetailsComponent} from './OrderDetailsComponent/create-orderdetails/create-orderdetails.component'
import { FindOrderDetailsComponent } from './OrderDetailsComponent/find-orderdetails/find-orderdetails.component';
import { ListOrderDetailsComponent } from './OrderDetailsComponent/list-orderdetails/list-orderdetails.component';
import { UpdateOrderDetailsComponent } from './OrderDetailsComponent/update-orderdetails/update-orderdetails.component';
import { CreateProductComponent } from './ProductComponents/create-product/create-product.component';
import { FindProductComponent } from './ProductComponents/find-product/find-product.component';
import { ListProductComponent } from './ProductComponents/list-product/list-product.component';
import { UpdateProductsComponent } from './ProductComponents/update-product/update-product.component';
import { CreateCategoryComponent } from './CategoryComponents/create-category/create-category.component';
import { ListCategoryComponent } from './CategoryComponents/list-category/list-category.component';
import { UpdateCategoryComponent } from './CategoryComponents/update-category/update-category.component';
import { CreateRolComponent } from './RolesComponents/create-rol/create-rol.component';
import { ListRolComponent } from './RolesComponents/list-rol/list-rol.component';
import { UpdateRolComponent } from './RolesComponents/update-rol/update-rol.component';
import { FindCategoryComponent } from './CategoryComponents/find-category/find-category.component';
import { FindRolComponent } from './RolesComponents/find-rol/find-rol.component';
import { FindSellerComponent } from './SellerComponents/find-seller/find-seller.component';
import { ListSellerComponent } from './SellerComponents/list-seller/list-seller.component';
import { UpdateSellerComponent } from './SellerComponents/update-seller/update-seller.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    FindCustomerComponent,
    UpdateCustomerComponent,

    ListReviewsComponent,
    UpdateReviewsComponent,
    CreateReviewsComponent,
    FindReviewsComponent,
    
    CreateOrdersComponent,
    FindOrdersComponent,
    ListOrdersComponent,
    UpdateOrdersComponent,

    CreateOrderDetailsComponent,
    FindOrderDetailsComponent,
    ListOrderDetailsComponent,
    UpdateOrderDetailsComponent,

    CreateProductComponent,
    FindProductComponent,
    ListProductComponent,
    UpdateProductsComponent,

    CreateCategoryComponent,
    ListCategoryComponent,
    FindCategoryComponent,
    UpdateCategoryComponent,
    
    CreateRolComponent,
    ListRolComponent,
    FindRolComponent,
    UpdateRolComponent,

    CreateSellerComponent,
    FindSellerComponent,
    ListSellerComponent,
    UpdateSellerComponent,

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
