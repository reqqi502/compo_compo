import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule,Routes }from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {FormsModule} from '@angular/forms';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './login/login.component';





const appRoutes: Routes = [
  
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path: 'checkout',component: CheckoutComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'cart',component: CartComponent},
  {path: 'authentication',component: AuthentificationComponent},
  {path: 'login',component: LoginComponent},


                          ];

    @NgModule({
    declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CheckoutComponent,
    ContactComponent,
    CartComponent,
    ProductDetailComponent,
    AuthentificationComponent,
    LoginComponent,
    
    //Request.Options.TsComponent,
  ],
  imports: [
      FormsModule,
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

                      
                       }