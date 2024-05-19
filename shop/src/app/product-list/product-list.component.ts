import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { MatCard } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCardActions } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { Producto } from '../models/producto.model';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatPaginator
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productos : Producto[] = [];
  categoriaId: number = 0;

  totalProductos = this.productos.length;

  constructor(private route: ActivatedRoute, private productoService: ProductoService, public dialog: MatDialog) {}

  openDialog(producto: Producto): void {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '250px',
      data: { producto: producto }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  cambiarPagina(event: PageEvent) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.categoriaId = +id;
        this.productos = this.productoService.getProductosPorCategoria(this.categoriaId);
      }else{
        this.productos = this.productoService.getProductos();
      }
      this.totalProductos = this.productos.length;
    });
  }

}
