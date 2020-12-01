import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubmittedformComponent } from './submittedform/submittedform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubmittedformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
