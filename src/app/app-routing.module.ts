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
  {path: 'listcustomer', component: ListCustomerComponent},
  {path: 'listreview', component: ListReviewsComponent},
  {path: 'newcustomer', component:CreateCustomerComponent},
  {path: 'updatecustomer/:id', component: UpdateCustomerComponent},
  {path: 'updatereview/:id',component:UpdateReviewsComponent},
  {path: 'searchcustomer', component: FindCustomerComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'newseller', component: CreateSellerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
