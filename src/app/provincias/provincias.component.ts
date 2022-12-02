import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Provincia,ProvinciasService } from '../servicios/provincias.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})

export class ProvinciasComponent implements OnInit {
  constructor(private provinciasService: ProvinciasService) {
    this.provinciasService.getProvincias().subscribe((data:any) => {    //Obtiene las provincias de un "fetch" en productos.servicios
      // console.log(data);

      this.provincias = data;   //Alamacena la provincia en "provincias"

    })
  }

  provincias:Provincia[] = [];    //Arreglo donde irán las 24 provincias traidas de la API
  nombreProvincia:string = ''; //Tiene como valor el nombre de la provincia seleccionada

  getNombre(nombreProv:Provincia){
    this.nombreProvincia = nombreProv.nombre;   //Obtiene el valor de la provincia seleccionada en el HTML mediante un evento CLICK
  }

  provinciaSeleccionada: Provincia = {      //Inicializacion de la interfaz
    nombre:'',
    id:0,
    url:''
  };

  ngOnInit(): void {}
}