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

const routes: Routes = [
  {path: '', redirectTo:'customer', pathMatch:'full'},

  {path: 'customers/create', component:CreateCustomerComponent},
  {path: 'customers/list', component: ListCustomerComponent},
  {path: 'customers/search', component: FindCustomerComponent},
  {path: 'customers/update/:id', component: UpdateCustomerComponent},

  {path: 'reviews/create',component: CreateReviewsComponent},
  {path: 'reviews/list', component: ListReviewsComponent},
  {path: 'reviews/search',component: FindReviewsComponent},
  {path: 'reviews/update/:id',component:UpdateReviewsComponent},

  {path: 'orders/create',component:CreateOrdersComponent},
  {path: 'orders/list', component: ListOrdersComponent},
  {path: 'orders/search',component:FindOrdersComponent},
  {path: 'orders/update/:id', component: UpdateOrdersComponent},

  {path: 'orderdetails/create', component:CreateOrderDetailsComponent},
  {path: 'orderdetails/list',component:ListOrderDetailsComponent},
  {path: 'orderdetails/search',component:FindOrderDetailsComponent},
  {path: 'orderdetails/update/:id',component:UpdateOrderDetailsComponent},

  {path: 'products/create',component:CreateProductComponent},
  {path: 'products/list', component:ListProductComponent},
  {path: 'products/search',component:FindProductComponent},
  {path: 'products/update/:id', component:UpdateProductsComponent},
  
  {path: 'categories/create', component:CreateCategoryComponent},
  {path: 'categories/list', component:ListCategoryComponent},
  {path: 'categories/search', component:FindCategoryComponent},
  {path: 'categories/update/:id', component:UpdateCategoryComponent},

  {path: 'roles/create', component:CreateRolComponent},
  {path: 'roles/list', component:ListRolComponent},
  {path: 'roles/search', component:FindRolComponent},
  {path: 'roles/update/:id', component:UpdateRolComponent},

  {path: 'profile', component: ProfileComponent},
  
  {path: 'sellers/create', component: CreateSellerComponent},
  {path: 'sellers/search', component:FindSellerComponent},
  {path: 'sellers/list', component:ListSellerComponent},
  {path: 'sellers/update/:id', component:UpdateSellerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
