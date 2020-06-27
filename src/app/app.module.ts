import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JordanKicksComponent } from './jordan-kicks/jordan-kicks.component';
import { NikeKicksComponent } from './nike-kicks/nike-kicks.component';
import { AdidasKicksComponent } from './adidas-kicks/adidas-kicks.component';
import { PumaKicksComponent } from './puma-kicks/puma-kicks.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    JordanKicksComponent,
    NikeKicksComponent,
    AdidasKicksComponent,
    PumaKicksComponent,
    HeaderComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
