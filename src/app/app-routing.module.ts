import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';

const routes: Routes = [
  {path: '', component: PaginaHomeComponent},
  {path: 'home', component: PaginaHomeComponent},
  {path: 'provincia', component: ProvinciasComponent},
  {path: 'producto/:nombreProvincia', component: ProductosListComponent},
  {path: 'producto', component: ProductosListComponent},
  {path: '**', component: PaginaErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
