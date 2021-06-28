import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './CustomerComponents/create-customer/create-customer.component';
import { ListCustomerComponent } from './CustomerComponents/list-customer/list-customer.component';
import { UpdateCustomerComponent } from './CustomerComponents/update-customer/update-customer.component';
import { FindCustomerComponent } from './CustomerComponents/find-customer/find-customer.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateSellerComponent} from './SellerComponents/create-seller/create-seller.component';

import { ListReviewsComponent } from './ReviewsComponents/list-reviews/list-reviews.component';
import { UpdateReviewsComponent } from './ReviewsComponents/update-reviews/update-reviews.component';
import { CreateReviewsComponent } from './ReviewsComponents/create-reviews/create-reviews.component';
import { FindReviewsComponent } from './ReviewsComponents/find-reviews/find-reviews.component';
import { CreateOrdersComponent } from './OrderComponent/create-orders/create-orders.component';
import { FindOrdersComponent } from './OrderComponent/find-orders/find-orders.component';
import { ListOrdersComponent } from './OrderComponent/list-orders/list-orders.component';
import { UpdateOrdersComponent } from './OrderComponent/update-orders/update-orders.component';
import { CreateOrderDetailsComponent } from './OrderDetailsComponent/create-orderdetails/create-orderdetails.component';
import { FindOrderDetailsComponent } from './OrderDetailsComponent/find-orderdetails/find-orderdetails.component';
import { ListOrderDetailsComponent } from './OrderDetailsComponent/list-orderdetails/list-orderdetails.component';
import { UpdateOrderDetailsComponent } from './OrderDetailsComponent/update-orderdetails/update-orderdetails.component';
import { CreateProductComponent } from './ProductComponents/create-product/create-product.component';
import { FindProductComponent } from './ProductComponents/find-product/find-product.component';
import { ListProductComponent } from './ProductComponents/list-product/list-product.component';
import { UpdateProductsComponent } from './ProductComponents/update-product/update-product.component';

const routes: Routes = [
  {path: '', redirectTo:'customer', pathMatch:'full'},
  {path: 'customers/list', component: ListCustomerComponent},
  {path: 'customers/search', component: FindCustomerComponent},
  {path: 'customers/create', component:CreateCustomerComponent},
  {path: 'customers/update/:id', component: UpdateCustomerComponent},

  {path: 'reviews/list', component: ListReviewsComponent},
  {path: 'reviews/create',component: CreateReviewsComponent},
  {path: 'reviews/search',component: FindReviewsComponent},
  {path: 'reviews/update/:id',component:UpdateReviewsComponent},

  {path: 'orders/create',component:CreateOrdersComponent},
  {path: 'orders/search',component:FindOrdersComponent},
  {path: 'orders/list', component: ListOrdersComponent},
  {path: 'orders/update/:id', component: UpdateOrdersComponent},

  {path: 'orderdetails/create', component:CreateOrderDetailsComponent},
  {path: 'orderdetails/search',component:FindOrderDetailsComponent},
  {path: 'orderdetails/list',component:ListOrderDetailsComponent},
  {path: 'orderdetails/update/:id',component:UpdateOrderDetailsComponent},

  {path: 'products/create',component:CreateProductComponent},
  {path: 'products/search',component:FindProductComponent},
  {path: 'products/list', component:ListProductComponent},
  {path: 'products/list', component:UpdateProductsComponent},

  {path: 'profile', component: ProfileComponent},
  {path: 'sellers/create', component: CreateSellerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
