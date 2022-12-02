
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProvinciasComponent } from '../provincias/provincias.component';

export interface Provincia {
  id:number;
  nombre:string;
  url:string;
}

@Injectable({
  providedIn: 'root'
})

export class ProvinciasService {

  constructor(private http: HttpClient){}

  getProvincias() {
    return this.http.get('./assets/api/provincias.json').pipe(
      map((data:any) => {
        let respuesta = data.map((provincia:any) => {
          return{
            id: provincia.id,
            nombre:provincia.nombre,
            url:provincia.api
          };
        })
        return respuesta;
      })
    );
  }
}