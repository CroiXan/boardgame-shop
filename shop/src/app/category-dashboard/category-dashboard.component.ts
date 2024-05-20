import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categoria } from '../models/categoria.model';
import { CategoriaService } from '../services/categoria.service';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { MatCard } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    RouterModule
  ],
  templateUrl: './category-dashboard.component.html',
  styleUrl: './category-dashboard.component.css'
})
export class CategoryDashboardComponent {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categorias = this.categoriaService.getCategorias();
  }
}
