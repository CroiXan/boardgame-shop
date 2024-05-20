import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private categorias: Categoria[] = [
    { id: 1, nombre: 'Categoría 1', descripcion: '', imagen: '' },
    { id: 2, nombre: 'Categoría 2', descripcion: '', imagen: '' }
  ];

  getCategorias(): Categoria[] {
    return this.categorias;
  }
}