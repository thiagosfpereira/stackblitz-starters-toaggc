import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';
import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
  imports: [CommonModule,
    BrowserModule
  ],

  declarations: [
    RootComponent, NavbarComponent, ListagemComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
