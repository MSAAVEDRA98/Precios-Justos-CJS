import { Component, Input, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, Route } from '@angular/router';
import { ProductosServiceService } from '../servicios/productos-service.service';
import { Producto } from '../servicios/productos-service.service';
import { ProvinciasComponent } from '../provincias/provincias.component';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  productos: Producto[] = []

  @Input() mensaje:String = this.provinciasComponent.nombreProvincia;

constructor(private productoService:ProductosServiceService,
            private provinciasComponent:ProvinciasComponent) {

  // let provincia:string = this.provinciasComponent.setNombre();

  let provincia:string = 'tierra-del-fuego';
  this.productoService.getProductos(provincia).subscribe((data:any)=>{
    // console.log(data);
    this.productos = data;    //Alamacena en el arreglo "productos" los datos de los productos que hay en la API de la provincia qeu se pasa por parametro en "provincia"

  });

  // console.log(this.mensaje);
}

  ngOnInit(): void {
    // console.log(this.mensaje);
  }

}
