import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';

const routes: Routes = [
  {path: '', component: ProvinciasComponent},
  {path: 'home', component: ProvinciasComponent},
  {path: 'producto/:nombreProvincia', component: ProductosListComponent},
  {path: 'producto', component: ProductosListComponent},
  {path: '**', component: PaginaErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
