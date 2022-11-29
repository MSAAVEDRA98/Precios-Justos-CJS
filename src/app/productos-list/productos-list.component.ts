import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../servicios/productos-service.service';
import { Producto } from '../servicios/productos-service.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  productos: Producto[] = []

constructor(private productoService:ProductosServiceService) {
  this.productoService.getProductos().subscribe((data:any)=>{
    console.log(data);
    this.productos = data;
});
}

  ngOnInit(): void {
  }

}
