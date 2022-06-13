import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './page/auth/sign-in/sign-in.component';
import { SignUpComponent } from './page/auth/sign-up/sign-up.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: "login",
    component: SignInComponent,
  },
  {
    path: "cadastro",
    component: SignUpComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
