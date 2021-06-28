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

const routes: Routes = [
  {path: '', redirectTo:'customer', pathMatch:'full'},
  {path: 'customers/list', component: ListCustomerComponent},
  {path: 'reviews/list', component: ListReviewsComponent},
  {path: 'customers/create', component:CreateCustomerComponent},
  {path: 'customers/update/:id', component: UpdateCustomerComponent},
  {path: 'reviews/update/:id',component:UpdateReviewsComponent},
  {path: 'customers/search', component: FindCustomerComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'sellers/create', component: CreateSellerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
