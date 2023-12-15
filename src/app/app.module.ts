import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardNavComponent } from './components/dashboard/dashboard-nav/dashboard-nav.component';
import { EmployeeComponent } from './components/dashboard/employee/employee.component';

import { HttpClientModule } from '@angular/common/http';
import { MenuItemComponent } from './components/dashboard/menu-item/menu-item.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { OrderListComponent } from './components/dashboard/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    OrderComponent,
    RegisterComponent,
    LoginComponent,
    EmployeeLoginComponent,
    DashboardComponent,
    DashboardNavComponent,
    EmployeeComponent,
    MenuItemComponent,
    CartComponent,
    OrderConfirmationComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
