import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [
    { nombre: 'Producto 1', precio: 100, imagen: 'ruta/imagen1.jpg', descripcion: 'Descripción del producto 1', categoriaId: 1 },
    { nombre: 'Producto 2', precio: 200, imagen: 'ruta/imagen2.jpg', descripcion: 'Descripción del producto 2', categoriaId: 2 },
    // más productos...
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getProductosPorCategoria(categoriaId: number): Producto[] {
    return this.productos.filter(producto => producto.categoriaId === categoriaId);
  }
}