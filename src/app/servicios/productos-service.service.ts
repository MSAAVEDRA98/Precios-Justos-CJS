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

  getProductos(provincia:string) {              //getProductos devuelve producto por producto de la provincia que se pasa por parametro
    let url = 'assets/api/'+ provincia +'.json';    //variable con el .json de la provincia seleccionada
    return this.http.get(url)
    .pipe(                                            //.pipe sirve para realizar transformaciones
      map((data:any) => {                             //.map sirve para recorrer el arreglo. Es como un for o un ForEach
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
