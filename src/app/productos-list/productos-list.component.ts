import { Component, Input, OnInit } from '@angular/core';
import { ProvinciasComponent } from '../provincias/provincias.component';
// import {  Router } from '@angular/router';
import { ProductosServiceService } from '../servicios/productos-service.service';
import { Producto } from '../servicios/productos-service.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent /* extends ProvinciasComponent */ implements OnInit {

  productos: Producto[] = []

constructor(public productoService:ProductosServiceService,
            /* public provinciasComponent:ProvinciasComponent */) {

  // super();

  // let provincia:string = this.provinciasComponent.nombreProvincia;
  let provincia:string = 'tierra-del-fuego';
  this.productoService.getProductos(provincia).subscribe((data:any)=>{
    // console.log(data);
    this.productos = data;    //Alamacena en el arreglo "productos" los datos de los productos que hay en la API de la provincia qeu se pasa por parametro en "provincia"
});
}

  ngOnInit(): void {
  }

}
