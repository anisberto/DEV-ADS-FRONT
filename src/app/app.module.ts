import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navegation/home/home.component';
import { HeadeComponent } from './navegation/heade/heade.component';
import { FooterComponent } from './navegation/footer/footer.component';
import { ContatosComponent } from './agenda/contatos/contatos.component';
import { ServicosComponent } from './agenda/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadeComponent,
    FooterComponent,
    ContatosComponent,
    ServicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
