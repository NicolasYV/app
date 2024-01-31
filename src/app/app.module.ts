import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { MenuComponent } from './menu/menu.component';
import { RecuperarPage } from './recuperar/recuperar.page';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { RegistrarsePage } from './registrarse/registrarse.page';
import { GenerarPage } from './generar/generar.page';

import { HttpClientModule } from '@angular/common/http';
import { defineCustomElements as jeepSqlite } from 'jeep-sqlite/loader'
import { QRCodeModule } from 'angularx-qrcode';


jeepSqlite(window)




@NgModule({
  declarations: [AppComponent, MenuComponent,HomePage,CabeceraComponent,RecuperarPage, RegistrarsePage, GenerarPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,ReactiveFormsModule, HttpClientModule, QRCodeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
  
})
export class AppModule {}
