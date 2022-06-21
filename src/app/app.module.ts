import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrosComponent } from './carros/carros.component';
import { CarroDetailComponent } from './carro-detail/carro-detail.component';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from './cabecalho/cabecalho.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    CarroDetailComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
