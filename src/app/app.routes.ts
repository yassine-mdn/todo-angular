import { Routes } from '@angular/router';
import {LoginPageComponent} from "./features/login/pages/login-page/login-page.component";
import {HomePageComponent} from "./features/home/pages/home-page/home-page.component";

export const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent}
];
