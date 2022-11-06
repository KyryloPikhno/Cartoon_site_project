import {HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MainLayoutComponent} from "./layouts";
import {HeaderComponent} from "./components/header/header.component";
import {AppRoutingModule} from "./app.routing.module";
import {EpisodeModule} from "./modules/episode/episode.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        EpisodeModule,
        BrowserAnimationsModule,
        MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
