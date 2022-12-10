import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvinciasComponent } from './provincias/provincias.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinciasComponent,
    ProductosListComponent,
    PaginaErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProvinciasComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
