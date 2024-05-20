import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private categorias: Categoria[] = [
    { id: 1, nombre: 'Familiar', descripcion: '', imagen: 'assets/images/categoria/familiar.jpg' },
    { id: 2, nombre: 'Cooperativo', descripcion: '', imagen: 'assets/images/categoria/cooperativo.png' },
    { id: 3, nombre: 'Estrategia', descripcion: '', imagen: 'assets/images/categoria/estrategia.png' },
    { id: 4, nombre: 'Puzzle', descripcion: '', imagen: 'assets/images/categoria/puzzle.png' }
  ];

  getCategorias(): Categoria[] {
    return this.categorias;
  }
}