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
  nombreProvincia:string = "";

constructor(private productoService:ProductosServiceService, private actRouter:ActivatedRoute) {

  this.nombreProvincia = this.actRouter.snapshot.params["nombreProvincia"];
  console.log(this.actRouter);
  console.log(this.nombreProvincia);

  let provincia:string = this.nombreProvincia;

  // let provincia:string = "tierra-del-fuego";
  this.productoService.getProductos(provincia).subscribe((data:any)=>{
    // console.log(data);
    this.productos = data;    //Alamacena en el arreglo "productos" los datos de los productos que hay en la API de la provincia qeu se pasa por parametro en "provincia"

    

  });
}

  ngOnInit(): void {  }

}
