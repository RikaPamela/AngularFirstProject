import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './NavBar/NavBar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: 'home', component: HomepageComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'Cart', component: CartComponent},
  { path: 'products', component: ProductsComponent},
  

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
