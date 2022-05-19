import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { Pag1Component } from './views/pag1/pag1.component';
import { Pag2Component } from './views/pag2/pag2.component';
import { Pag3Component } from './views/pag3/pag3.component';
import { Pag4Component } from './views/pag4/pag4.component';
import { FormComponent } from './views/form/form.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pag1Component,
    Pag2Component,
    Pag3Component,
    Pag4Component,
    FormComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
