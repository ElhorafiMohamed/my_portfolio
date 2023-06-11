import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {NgxTreeGraphModule} from "ngx-tree-graph";

@NgModule({
  declarations: [
    AppComponent,
    ContactmeComponent,
    PortfolioComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,

  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule,
        NgxTreeGraphModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
