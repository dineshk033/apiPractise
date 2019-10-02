import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProfileDetailsComponent } from './component/Profile/profile-details/profile-details.component';

const appRoutes: Routes = [
  { path: "", component: ProfileComponent },
  { path: "profile/:id", component: ProfileDetailsComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    ProfileComponent,
    ProfileDetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
