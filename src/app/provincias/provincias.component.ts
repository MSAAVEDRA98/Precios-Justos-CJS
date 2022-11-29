import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Provincia,ProvinciasService } from '../servicios/provincias.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})

export class ProvinciasComponent implements OnInit {
  constructor(private provinciasService: ProvinciasService) {
    this.provinciasService.getProvincias().subscribe((data:any) => {
      console.log(data);

      this.provincias = data;
    })
  
  }

  provincias:Provincia[] = [];

  provinciaSeleccionada: Provincia = {
    nombre:'',
    id:0,
    url:''
  };

  ngOnInit(): void {}
}