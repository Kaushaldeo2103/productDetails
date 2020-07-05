import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home/home.component";
import { LoginComponent } from "./login/login/login.component";
import { RegisterComponent } from "./register/register/register.component";
import { AuthGuard } from "./guards/auth.guard";
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "product", component: ProductDetailComponent },

  // otherwise redirect to home
  { path: "**", redirectTo: "" },
];

//export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
