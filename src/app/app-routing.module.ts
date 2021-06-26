import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { FindCustomerComponent } from './find-customer/find-customer.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateSellerComponent} from './create-seller/create-seller.component';


const routes: Routes = [
  {path: '', redirectTo:'customer', pathMatch:'full'},
  {path: 'listcustomer', component: ListCustomerComponent},
  {path: 'newcustomer', component:CreateCustomerComponent},
  {path: 'updatecustomer/:id', component: UpdateCustomerComponent},
  {path: 'searchcustomer', component: FindCustomerComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'newseller', component: CreateSellerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
