import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app.routes";
import {AppComponent} from "../app.component";
import {HomeComponent} from "../home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent// Déclaration du HomeComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
