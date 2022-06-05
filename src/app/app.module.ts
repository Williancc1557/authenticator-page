import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './page/auth/sign-in/sign-in.component';
import { TitleAnimatedComponent } from './components/auth/title/title-animated.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    TitleAnimatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TitleAnimatedComponent]
})
export class AppModule { }
