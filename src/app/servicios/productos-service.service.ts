import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

export interface Producto {
  ean:'',
  nombre:'',
  precio:0
}

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor(private http:HttpClient) { }

  getProductos() {
    return this.http.get('assets/api/tierra-del-fuego.json')
    .pipe(
      map((data:any) => {
        data.values.shift();
        data.values.shift();
        return data.values.map((producto:any) => {
          let precio = producto[2]
          precio = precio.replace('.', '');
          precio = precio.replace(',', '.');
          return {
            ean:parseInt(producto[0]),
            nombre:producto[1],
            precio:parseFloat(producto[2])
          }
        })
      }
      )
    )
  }
}
