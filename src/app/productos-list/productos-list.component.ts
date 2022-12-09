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

  provincia:string = "";
  nombreProducto:string = "";
  filtroPrecio:number = 1000;
  precioMaximo:number = 0;

constructor(private productoService:ProductosServiceService, private actRouter:ActivatedRoute) {
  
  this.provincia = this.actRouter.snapshot.params["nombreProvincia"];
  this.productoService.getProductos(this.provincia).subscribe((data:any)=>{

  //Alamacena en el arreglo "productos" los datos de los productos que hay en la API de la provincia qeu se pasa por parametro en "provincia"
  this.productos = data;
  this.productosFiltrados = data;

  let precios = this.productos.map((producto: Producto) => producto.precio);
  console.log(precios);
  
  this.precioMaximo = Math.max(...precios);
  });
}

filtroTexto(event:any){this.productosFiltrados = this.productos.filter((producto:Producto) =>{
    return producto.nombre.toLowerCase().includes(event.toLowerCase())
    || (producto.ean + "").includes(event);
  });
}

  precioFiltrado(event:any){
    // console.log(event);
    this.productosFiltrados = this.productos.filter((producto: Producto) => {
      return producto.precio <= event;
    })
  }

  ngOnInit(): void {  }

}