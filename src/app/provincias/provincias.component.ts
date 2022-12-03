import { Component, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Provincia,ProvinciasService } from '../servicios/provincias.service';
import { ProductosListComponent } from '../productos-list/productos-list.component';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})

export class ProvinciasComponent implements OnInit {
  constructor(public provinciasService: ProvinciasService) {
    this.provinciasService.getProvincias().subscribe((data:any) => {    //Obtiene las provincias de un "fetch" en productos.servicios

      this.provincias = data;   //Alamacena la provincia en "provincias"

      // this.log(this.nombreProvincia);
    })
  }
      nombreProvincia:string = '';

      getNombre(nombreProv:Provincia){
        this.nombreProvincia = nombreProv.nombre;
        // this.log(this.nombreProvincia);   //Obtiene el valor de la provincia seleccionada en el HTML mediante un evento CLICK
      }

      log(msj:any){
        console.log(msj);
      }

  provincias:Provincia[] = [];    //Arreglo donde irán las 24 provincias traidas de la API

  setNombre(){
    return(this.nombreProvincia);
  }

  provinciaSeleccionada: Provincia = {      //Inicializacion de la interfaz
    nombre:'',
    id:0,
    url:''
  };

  @Input() mensaje:string = this.provinciaSeleccionada.nombre

  ngOnInit(): void {}
}