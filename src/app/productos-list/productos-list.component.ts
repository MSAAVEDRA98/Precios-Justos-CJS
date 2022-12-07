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

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  nombreProvincia:string = "";
  nombreProducto:string = "";
  precioMaximo:number = 1000;

constructor(private productoService:ProductosServiceService, private actRouter:ActivatedRoute) {

  this.nombreProvincia = this.actRouter.snapshot.params["nombreProvincia"];
  console.log(this.actRouter);
  console.log(this.nombreProvincia);
  console.log(this.nombreProducto);
  

  let provincia:string = this.nombreProvincia;

  this.productoService.getProductos(provincia).subscribe((data:any)=>{

    //Alamacena en el arreglo "productos" los datos de los productos que hay en la API de la provincia qeu se pasa por parametro en "provincia"
    this.productos = data;
    this.productosFiltrados = data;
  });
}

filtroTexto(event:any){
  // console.log(event);
  
  this.productosFiltrados = this.productos.filter((producto:Producto) =>{
    return producto.nombre.toLowerCase().includes(event.toLowerCase())
    || (producto.ean + "").includes(event);
  });
}
  ngOnInit(): void {  }

}