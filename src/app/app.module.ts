import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { FormsModule } from '@angular/forms'; // for two-way data binding
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // angular animations import

import { DataService } from './data.service'; // import service/data services

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // add imported FormsModule to imports array
    BrowserAnimationsModule // add imported angular animation
  ],
  providers: [DataService], // add DataService to this providers array
  bootstrap: [AppComponent]
})
export class AppModule { }
