import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProvinciasComponent } from './provincias/provincias.component';

const routes: Routes = [
  {path: '', component: ProvinciasComponent},
  {path: 'productos', component: ProductosListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
