import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './page/auth/sign-in/sign-in.component';
import { TitleAnimatedComponent } from './components/auth/title/title-animated.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input"
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { SignUpComponent } from './page/auth/sign-up/sign-up.component'

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    TitleAnimatedComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TitleAnimatedComponent]
})
export class AppModule { }
