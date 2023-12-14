import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';



@NgModule({
  imports: [
    IonicModule.forRoot(),
    HttpClientModule,
    CommonModule,
    AppComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { } 