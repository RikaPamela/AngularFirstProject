import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ContantDetatailsComponent } from './contantDetatails/contantDetatails.component';



@NgModule({
  declarations: [				
    AppComponent,
      NavBarComponent,
      HomepageComponent,
      FooterComponent,
      CartComponent,
      ProductsComponent,
      ContantDetatailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
