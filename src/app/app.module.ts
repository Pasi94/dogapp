import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.router';
import { APIService } from "./services/api.service";
import { DogService } from "./services/dog.service";

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from "./pages/home/home.component";
import { RouterModule } from "@angular/router";
import { DogDetailsComponent } from './pages/dog-details/dog-details.component';
import { RandomComponent } from './pages/random/random.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DogDetailsComponent,
    RandomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    
  ],
  providers: [APIService, DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
