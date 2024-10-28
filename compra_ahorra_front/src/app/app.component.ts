import { Component, OnInit } from '@angular/core';
import { ProductoService } from './utils.service';

@Component({
  selector: 'app-productos',
  templateUrl: './app.component.html',
})
export class ProductosComponent implements OnInit {
  productos: any = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }
}