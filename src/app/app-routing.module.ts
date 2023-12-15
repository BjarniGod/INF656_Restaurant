import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/dashboard/employee/employee.component';
import { MenuItemComponent } from './components/dashboard/menu-item/menu-item.component';
import { OrderListComponent } from './components/dashboard/order-list/order-list.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'order', component: OrderComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
  children: [
    { path: 'employees', component: EmployeeComponent},
    { path: 'menuItems', component: MenuItemComponent},
    { path: 'orderList', component: OrderListComponent}
  ] },
  { path: 'cart', component: CartComponent},
  { path: 'order-confirmation', component: OrderConfirmationComponent},
  { path: '', component: LoginComponent },
  { path: 'employeeLogin', component: EmployeeLoginComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
