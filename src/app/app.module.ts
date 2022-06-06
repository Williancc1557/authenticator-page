import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './page/auth/sign-in/sign-in.component';
import { TitleAnimatedComponent } from './components/auth/title/title-animated.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input"

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    TitleAnimatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TitleAnimatedComponent]
})
export class AppModule { }
